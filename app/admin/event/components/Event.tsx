"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react"
import { AddEvent } from "./AddEvent";
import Link from "next/link"
import { EventHeader } from "./EventHeader"
import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import {
  DeleteDropdownItem,
} from "./EventActions"
export const revalidate = 0;


export default async function  EventTable() {
  const supabase = createClient();
  const { data: events } = await supabase.from('events').select().order('updated_at', { ascending: false });

  let eventNumber=1;

  if (!events) {
    return notFound();
  }
  // Sort events array in descending order based on date


  return (
    <main className="p-4 md:p-6 ">
      <div className="flex justify-between items-center m-4">
        <EventHeader children="Event" />
        <AddEvent />
      </div>

      <Table>
        <TableCaption>❇️ Use desktop or laptop for best view.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{eventNumber++}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/event/${event.id}/edit`}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {/* Assuming DeleteDropdownItem takes an id prop */}
                    <DropdownMenuItem asChild>
                    <DeleteDropdownItem
                    id={event.id}
                    disabled={event._count > 0}
                  />                    
                  </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

