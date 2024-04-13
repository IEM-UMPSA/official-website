// pages/404.js

import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image priority src="/under-construction-pikachu.gif" alt="Under Construction" width={400} height={300} />
      <h1 className="text-4xl font-bold mb-4 mt-4">Page Not Found</h1>
      <p className="text-xl mb-4">Oops! Looks like this page is either under construction or does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">Go back to homepage</Link>
    </div>
  );
}
