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
import Link from "next/link"
import { createClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import {
  DeleteDropdownItem,
} from "./UserActions"
 
export const revalidate = 3600;


export default async function  memberTable() {
  const supabase = createClient();
  const { data: users } = await supabase.from('users').select().order('updated_at', { ascending: false });

  let memberNumber=1;

  if (!users) {
    return notFound();
  }
  // Sort members array in descending order based on date


  return (
    <main className="p-4 md:p-6 ">
      <div className="flex justify-between items-center m-4">
        <h1 className="text-2xl   font-bold text-center mt-4">Members</h1>
        <Link href="/admin/member/add" className="border p-2 solid">Add Member</Link>
      </div>

      <Table>
        <TableCaption>❇️ Use desktop or laptop for best view.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>IEM Membership No</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{memberNumber++}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.contact_no}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.iem_membership_no}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
              <DeleteDropdownItem
                    id={user.id}
                    disabled={user._count > 0}
                  />           
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

