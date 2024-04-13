
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import EventForm from "./EventForm"

export function AddEvent() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add Event</Button>
        </DialogTrigger>
        <DialogContent className="h-screen overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
            <DialogDescription>
              Enter the details of the event here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <EventForm />
        </DialogContent>
      </Dialog>
    )
}
