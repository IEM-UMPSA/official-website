"use client"

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MobileMenu from './MobileMenu'; // Import the MobileMenu component
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { logout } from "@/app/auth/actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
	const onSubmit = async () => {
		startTransition(async () => {
			await logout();
		});
	};
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center h-16 px-4 border-b md:px-6 p-4">
      <Button className="mr-4 md:hidden" onClick={toggleMenu}>
        <MenuIcon className="w-6 h-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <MobileMenu isOpen={isMenuOpen}  /> {/* Render the MobileMenu component */}
      <nav className="hidden md:flex items-center gap-6 text-lg font-medium md:flex-row md:gap-5 md:text-sm lg:gap-6">
        <Link className="text-gray-500 dark:text-gray-400" href="/admin">
          Dashboard
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/admin/event">
          Event
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="/admin/member">
          Members
        </Link>
  
        <Link className="text-gray-500 dark:text-gray-400" href="/admin/finance">
          Finance
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search topics..."
              type="search"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="512"
                src="/logo/logo.jpg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="512"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/admin/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
            <form action={onSubmit}>
			<Button
				className="w-full flex items-center gap-2"
			>
				SignOut{" "}
				<AiOutlineLoading3Quarters
					className={cn(" animate-spin", { hidden: !isPending })}
				/>
			</Button>
		</form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
