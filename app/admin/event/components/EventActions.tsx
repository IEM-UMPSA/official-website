"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { deleteEvent } from "@/app/actions/events";

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const router = useRouter();
  
  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id);
      router.push('/admin')    
    } catch (error) {
      console.error("Error deleting event:", error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={disabled}
      onClick={handleDeleteEvent}
    >
      Delete
    </DropdownMenuItem>
  );
}
