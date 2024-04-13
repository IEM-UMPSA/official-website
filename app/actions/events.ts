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

export async function createEventAction(prevState: any, formData: FormData) {
  console.log({ prevState });
  console.log(formData.get('title'));
  console.log(formData.get('description'));
  console.log(formData.get('imagePath'));

  const schema = z.object({
    title: z.string().min(6),
    description: z.string().min(10),
    date: z.string().min(1),
    time: z.string().min(1),
    venue: z.string().min(1),
    tag: z.string().min(1),
    imagePath: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.'
      ),
    slug: z.string().optional(),
    pic_id: z.string().optional(), // pic_id is now optional
  });

  const validatedFields = schema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    date: formData.get('date'),
    time: formData.get('time'),
    venue: formData.get('venue'),
    tag: formData.get('tag'),
    imagePath: formData.get('imagePath'),
    slug: formData.get('slug') || '-',
    pic_id: formData.get('pic_id') || '-', // Treat empty string as undefined
  });

  if (!validatedFields.success) {
    return {
      type: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Event.',
    };
  }

  const { title, description, date, time, venue, tag, imagePath, slug, pic_id } =
    validatedFields.data;

  try {
    const fileName = `${Math.random()}-${imagePath.name}`;

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, imagePath, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      return {
        type: 'error',
        message: 'Storage Error: Failed to Upload Image.',
      };
    }

    if (data) {
      const path = data.path;

      const { data: events } = await supabase
        .from('events')
        .insert({ title, description, date, time, venue, tag, imagePath: path, slug, pic_id });

      console.log({ events });
    }
  } catch (e) {
    return {
      type: 'error',
      message: 'Database  Error: Failed to Create Event.',
    };
  }

  revalidatePath('/admin');
  redirect('/admin');
}

// Define the updateEvent function to update an event
export async function updateEvent(id: string, formData: FormData) {
  try {
    // Ensure formData is an instance of FormData
    const data = formData instanceof FormData ? formData : new FormData();

    // Use createClient to establish Supabase connection
    const supabase = createServerActionClient({ cookies });

    // Get the current timestamp
    const currentTimestamp = new Date().toISOString();

    // Define the updateData object with the fields to be updated
    const updateData: any = {
      title: data.get('title'),
      description: data.get('description'),
      date: data.get('date'),
      time: data.get('time'),
      venue: data.get('venue'),
      tag: data.get('tag'),
      slug: data.get('slug'),
      pic_id: data.get('pic_id'),
      updated_at: currentTimestamp, // Include updated_at field with current timestamp
    };

    // Update event in database
    const { error: updateError } = await supabase
      .from('events')
      .update(updateData)
      .eq('id', id);

    if (updateError) {
      // Return an error object if the update operation fails
      return {
        error: 'Database Error: Failed to update event',
      };
    }

    // Return a success message if the update operation is successful
    return {
      message: '✅ Event updated successfully',
    };
  } catch (error) {
    // Catch any unexpected errors and return an error object
    return {
      error: 'Server Error: Failed to update event',
    };
  }

}

// Function to delete an event
export async function deleteEvent(id: string) {
  try {
    const supabase = createServerActionClient({ cookies });

    const { data: existingEvent, error: findError } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (findError) {
      return {
        error: 'Event not found',
      };
    }

    // Delete event from database
    const { error: deleteError } = await supabase.from('events').delete().eq('id', id);

    if (deleteError) {
      return {
        error: 'Database Error: Failed to delete event',
      };
    }

    // Delete image from storage if exists
    if (existingEvent.imagePath) {
      await supabase.storage.from('images').remove([existingEvent.imagePath]);
    }

     // Return a success message if the update operation is successful
     return {
      message: '✅ Event deleted successfully',
    };

  } catch (error) {
    return {
      error: 'Server Error: Failed to delete event',
    };
  }

  
}
