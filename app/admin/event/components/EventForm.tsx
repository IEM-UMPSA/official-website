'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createEventAction } from "@/app/actions/events";
import { useFormState } from 'react-dom';
import { Textarea } from "@/components/ui/textarea"
import { createClient } from '@/lib/supabase';
import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
}

interface FormState {
  type: string; // Adjust type based on your actual implementation
  message: string;
  errors: {
    [key: string]: string[];
  } | null;
}



const initialState: FormState = {
  message: '',
  errors: null,
  type: '' // Adjust type based on your actual implementation
};

const UploadFormPage: React.FC = () => {
  const [state, formAction] = useFormState<FormState>(
    createEventAction as any,
    initialState
  );
  const [picOptions, setPicOptions] = useState<User[]>([]);
  const [selectedPic, setSelectedPic] = useState<string>('');


  useEffect(() => {
    async function fetchPicOptions() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('users').select('id, name');
        console.log("Fetched Data:", data); // Check the data
        console.error("Fetch Error:", error); // Check for errors

        if (error) {
          throw error;
        }

        if (data) {
          setPicOptions(data);
        }
      } catch (error) {
        console.error('Error fetching PIC options:');
      }
    }

    fetchPicOptions();
  }, []);

  return (
    <>
        {state?.type === 'error' && (
          <p className="text-lg mb-2 bg-green-951 border-2 border-gray-300 rounded-md p-2 my-4">
            {state.message}
          </p>
        )}
    <form className="w-full max-w-screen-md mx-auto space-y-8 p-2 px-4 sm:px-0"  action={formAction}>
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
          accept="image/*" id="imagePath" name="imagePath" 
          className="w-full"
          required
        />
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

export default UploadFormPage;
