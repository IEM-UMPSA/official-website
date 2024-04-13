import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <nav className={` ${isOpen ? 'flex flex-col absolute top-14 left-0  w-full bg-white z-10  border' : 'hidden md:hidden'} items-center gap-2 text-lg font-medium md:flex-row md:gap-5 md:text-sm lg:gap-6`}>
      <Link className="text-gray-500 dark:text-gray-400 py-2 px-4" href="/admin">
        Dashboard
      </Link>
      <Link className="text-gray-500 dark:text-gray-400 py-2 px-4" href="/admin/event">
        Event
      </Link>
      <Link className="text-gray-500 dark:text-gray-400 py-2 px-4" href="/admin/member">
        Members
      </Link>
      <Link className="text-gray-500 dark:text-gray-400 py-2 px-4" href="/admin/finance">
        Finance
      </Link>
    </nav>
  );
};

export default MobileMenu;
