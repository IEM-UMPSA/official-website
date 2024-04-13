"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateEvent } from "@/app/actions/events";
import { useFormState } from 'react-dom';
import { Textarea } from "@/components/ui/textarea"
import { createClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';
import Image from "next/image"
import { UUID } from "crypto";

interface User {
  id: string;
  name: string;
}

interface FormState {
  type: string;
  message: string;
  errors: {
    [key: string]: string[];
  } | null;
}

interface FormData {
  id: UUID;
  title: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  imagePath: File | null;
  tag: string;
  slug: string;
  pic_id: string;
}

const initialState: FormState = {
  message: '',
  errors: null,
  type: ''
};

const UpdateForm: React.FC<{ eventData?: FormData }> = ({ eventData }) => {
  const [state, formAction] = useFormState<FormState>(
    updateEvent as any,
    initialState
  );

  const [picOptions, setPicOptions] = useState<User[]>([]);
  const [selectedPic, setSelectedPic] = useState<string>('');

  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const { message: success, error: errorMessage } = await updateEvent(eventData?.id || '', formData);

      if (errorMessage) {
        setError(errorMessage);
        setSuccessMessage('');
      } else {
        setError('');
        setSuccessMessage(success || '');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      setError('Server Error: Failed to update event');
      setSuccessMessage('');
    }
  };

  useEffect(() => {
    async function fetchPicOptions() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('users').select('id, name');
        if (error) {
          throw error;
        }

        if (data) {
          setPicOptions(data);
        }
      } catch (error) {
        console.error('Error fetching PIC options:', error);
      }
    }

    fetchPicOptions();
  }, []);

  useEffect(() => {
    if (eventData) {
      setSelectedPic(eventData.pic_id);
    }
  }, [eventData]);

  return (
    <>
  <div className="fixed top-4 right-0 mr-4 mb-4 flex flex-col items-end">
  {error && (
    <p className="text-lg mb-2 bg-red-500 text-white rounded-md p-2">
      {error}
    </p>
  )}
  {successMessage && (
    <p className="text-lg mb-2 bg-green-500 text-white rounded-md p-2">
      {successMessage}
    </p>
  )}
</div>

      
      <form className="w-full max-w-screen-md mx-auto space-y-8 p-2 px-4 sm:px-0" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-right">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            className="w-full"
            defaultValue={eventData?.title || ''}
            required
          />
          {/* Display error message if any */}
          {state?.errors?.title && (
            <span className="text-red-600 text-sm"> {state.errors.title.join(',')}</span>
          )}
        </div>
        {/* Venue */}
        <div className="space-y-2">
          <Label htmlFor="venue" className="text-right">
            Venue
          </Label>
          <Input
            type="text"
            id="venue"
            name="venue"
            className="w-full"
            defaultValue={eventData?.venue || ''}
            required
          />
          {/* Display error message if any */}
          {state?.errors?.venue && (
            <span className="text-red-600 text-sm"> {state?.errors.venue.join(',')}</span>
          )}
        </div>
        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-right">
            Date
          </Label>
          <Input
            type="date"
            id="date"
            name="date"
            className="w-full"
            defaultValue={eventData?.date || ''}
            required
          />      
          {/* Display error message if any */}
          {state?.errors?.date && (
            <span className="text-red-600 text-sm">{state.errors.date.join(',')}</span>
          )}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-right">
            Time
          </Label>
          <Input
            type="time"
            id="time"
            name="time"
            className="w-full"
            defaultValue={eventData?.time || ''}
            required
          />
          {/* Display error message if any */}
          {state?.errors?.time && (
            <span className="text-red-600 text-sm">{state.errors.time.join(',')}</span>
          )}
        </div>
        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            defaultValue={eventData?.description || ''}
            required
            className="w-full"
          />
          {/* Display error message if any */}
          {state?.errors?.description && (
            <span className="text-red-600 text-sm"> {state.errors.description.join(',')}</span>
          )}
        </div>
        {/* Image */}
        <div className="space-y-2">
          <Label htmlFor="image" className="text-right">
            Image
          </Label>
          <Input
            type="file"
            accept="image/*" 
            id="imagePath" 
            name="imagePath" 
            className="w-full"
            required={eventData == null}
          />
        {eventData != null && eventData.imagePath && (
          <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${eventData.imagePath}`} // Prepend with a leading slash
            height="400"
            width="400"
            alt="Product Image"
          />
        )}
          {/* Display error message if any */}
          {state?.errors?.imagePath && (          
            <span className="text-red-600 text-sm">{state.errors.imagePath.join(',')}</span>
          )}
        </div>
        {/* Tag */}
        <div className="space-y-2">
          <Label htmlFor="tag" className="text-right">
            Tag
          </Label>
          <Input
            type="text"
            id="tag"
            name="tag"
            defaultValue={eventData?.tag || ''}
            className="w-full"
            required
          />
          {/* Display error message if any */}
          {state?.errors?.tag && (
            <span className="text-red-600 text-sm">{state.errors.tag.join(',')}</span>
          )}
        </div>
        {/* Tag */}
        <div className="space-y-2">
          <Label htmlFor="tag" className="text-right">
            Slug
          </Label>
          <Input
            type="text"
            id="slug"
            name="slug"
            defaultValue={eventData?.slug || ''}
            className="w-full"
            required
          />
          {/* Display error message if any */}
          {state?.errors?.slug && (
            <span className="text-red-600 text-sm">{state.errors.slug.join(',')}</span>
          )}
        </div>
        {/* PIC */}
        <div className="space-y-2">
          <Label htmlFor="pic_id" className="text-right">
            PIC
          </Label>
          <select
            id="pic_id"
            name="pic_id"
            className="w-full"
            value={selectedPic}
            onChange={(e) => setSelectedPic(e.target.value)}
            required
          >
            <option value="">Select PIC (optional)</option>
            {picOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          {/* Display error message if any */}
          {state?.errors?.pic_id && (
            <span className="text-red-600 text-sm">{state.errors.pic_id.join(',')}</span>
          )}
        </div>
        {/* Submit button */}
        <div className="w-full flex justify-end mt-4">
          <Button type="submit" className="bg-primary text-white">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
