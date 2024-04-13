import { ReactNode } from "react"

export function EventHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-2xl   font-bold text-center mt-4">{children}</h1>
}