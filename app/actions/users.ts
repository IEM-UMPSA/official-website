'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { z } from 'zod';
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export async function createUserAction(prevState: any, formData: FormData) {
  console.log({ prevState });
  console.log(formData.get('name'));
  console.log(formData.get('email'));
  console.log(formData.get('contact_no'));

  const schema = z.object({
    name: z.string().min(3),
    email: z.string().optional(),
    contact_no: z.string().optional(),
    iem_membership_no: z.string().optional(),
    role: z.string().optional(),
    password: z.string().optional(),
    imagePath: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.'
      ).optional(),
  });

  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    contact_no: formData.get('contact_no'),
    iem_membership_no: formData.get('iem_membership_no'),
    role: formData.get('role') || 'member', 
    password: formData.get('password') || '123456', 
    imagePath: formData.get('imagePath') || '-', 

  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { name, email, contact_no, iem_membership_no, role, password, imagePath } =
    validatedFields.data;

  try {
    const fileName = `${Math.random()}-${imagePath.name}`;

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.storage
      .from('avatar')
      .upload(fileName, imagePath, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return {
        type: 'error',
        message: 'Storage Error: Failed to Upload Avatar.',
      };
    }

    if (data) {
      const path = data.path;

      const { data: users } = await supabase
        .from('users')
        .insert({ name, email, contact_no, iem_membership_no, role, password, imagePath: path });

      console.log({ users });
    }
  } catch (e) {
    return {
      type: 'error',
      message: 'Database  Error: Failed to Create User.',
    };
  }

  revalidatePath('/admin');
  redirect('/admin');
}


// Function to delete an event
export async function deleteUser(id: string) {
  try {
    const supabase = createServerActionClient({ cookies });

    const { data: existingEvent, error: findError } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (findError) {
      return {
        error: 'User not found',
      };
    }

    // Delete event from database
    const { error: deleteError } = await supabase.from('users').delete().eq('id', id);

    if (deleteError) {
      return {
        error: 'Database Error: Failed to delete event',
      };
    }

    // Delete image from storage if exists
    if (existingEvent.imagePath) {
      await supabase.storage.from('images').remove([existingEvent.imagePath]);
    }

    return {};
  } catch (error) {
    return {
      error: 'Server Error: Failed to delete event',
    };
  }


}
