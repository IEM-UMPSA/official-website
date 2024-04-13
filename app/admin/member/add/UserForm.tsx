"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormState } from 'react-dom';
import { createUserAction } from "@/app/actions/users";

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

const UserForm: React.FC = () => {
    const [state, formAction] = useFormState<FormState>(
        createUserAction as any,
        initialState
      );

  return (
    <>
      {state?.type === 'error' && (
        <p className="text-lg mb-2 bg-green-951 border-2 border-gray-300 rounded-md p-2 my-4">
          {state.message}
        </p>
      )}
    <form className="w-full max-w-screen-md mx-auto space-y-8 p-2 px-4 sm:px-0"  action={formAction}>
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            className="w-full"
            required
          />
             {/* Display error message if any */}
             {state?.errors?.name && (
            <span className="text-red-600 text-sm">{state.errors.name.join(',')}</span>
          )}
        </div>
         {/* Password */}
         <div className="space-y-2">
          <Label htmlFor="password" className="text-right">
          Password
          </Label>
          <Input
            type="text"
            id="password"
            name="password"
            className="w-full"
            
          />
            {/* Display error message if any */}
            {state?.errors?.password && (
            <span className="text-red-600 text-sm">{state.errors.password.join(',')}</span>
          )}
        </div>
        
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full"
            
          />
            {/* Display error message if any */}
            {state?.errors?.email && (
            <span className="text-red-600 text-sm">{state.errors.email.join(',')}</span>
          )}
        </div>
        
         {/* Image */}
      <div className="space-y-2">
        <Label htmlFor="image" className="text-right">
          Profile Picture
        </Label>
        <Input
          type="file"
          accept="image/*" id="imagePath" name="imagePath" 
          className="w-full"
        
        />
        {/* Display error message if any */}
        {state?.errors?.imagePath && (          
          <span className="text-red-600 text-sm">{state.errors.imagePath.join(',')}</span>
        )}
      </div>
        {/* Contact No */}
        <div className="space-y-2">
          <Label htmlFor="contact_no" className="text-right">
            Contact No
          </Label>
          <Input
            type="tel"
            id="contact_no"
            name="contact_no"
            className="w-full"
            
          />
          {/* Display error message if any */}
          {state?.errors?.contact_no && (
            <span className="text-red-600 text-sm">{state.errors.contact_no.join(',')}</span>
          )}
        </div>
        {/* IEM Membership No */}
        <div className="space-y-2">
          <Label htmlFor="iem_membership_no" className="text-right">
            IEM Membership No
          </Label>
          <Input
            type="text"
            id="iem_membership_no"
            name="iem_membership_no"
            className="w-full"
            
          />
          {/* Display error message if any */}
          {state?.errors?.iem_membership_no && (
            <span className="text-red-600 text-sm">{state.errors.iem_membership_no.join(',')}</span>
          )}
        </div>
        {/* Position */}
        <div className="space-y-2">
          <Label htmlFor="role" className="text-right">
            Role
          </Label>
          <Input
            type="text"
            id="role"
            name="role"
            className="w-full"
            
          />
          {/* Display error message if any */}
          {state?.errors?.role && (
            <span className="text-red-600 text-sm">{state.errors.role.join(',')}</span>
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

export default UserForm;
