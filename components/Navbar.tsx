"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-col items-center justify-between px-6 py-4 bg-white shadow-md md:flex-row md:justify-between">
      <div className="flex items-center justify-between w-full mb-2 md:mb-0 md:w-auto">
        <Link href="/"><Image src="/logo/logo.png" alt="Logo" width={100} height={100} /></Link>

        <button
          className="p-2 rounded-md md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full md:block md:w-auto`}
      >
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">

          <Link href="/#events" className="block px-2 py-1 rounded-md hover:bg-gray-200">Events
          </Link>
          <Link href="/engineering-week" className="block px-2 py-1 rounded-md hover:bg-gray-200">EW
          </Link>
          <Link href="/blogs" className="block px-2 py-1 rounded-md hover:bg-gray-200">Blog
          </Link>
          <Link href="/auth" className="block px-2 py-1 rounded-md hover:bg-gray-200">Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
