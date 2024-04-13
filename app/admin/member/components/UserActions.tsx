"use client"

import { useTransition } from "react"

import { useRouter } from "next/navigation"
import { deleteUser } from "@/app/actions/users"
import { RiDeleteBin2Fill } from "react-icons/ri";


export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string
  disabled: boolean
}) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  return (
    <button
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteUser(id)
          router.push('/admin')    
        })
      }}
    >
    <RiDeleteBin2Fill className="text-red-500" size={20}/>
    </button>
  )
}