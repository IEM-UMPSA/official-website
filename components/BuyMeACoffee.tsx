import React from 'react';
import Link from 'next/link';

const BuyMeACoffeeLink: React.FC = () => {
  return (
    <div className="bg-orange-200 text-center py-2">
      <p className="m-0 leading-6">
       This website is built with ❤️‍🔥 by <Link href="https://hovahyii.vercel.app/">Hovah Yii</Link>, consider{' '}   
        <Link
          href="https://www.buymeacoffee.com/hovahyii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
        buying Hovah a ☕
        </Link>
        .
      </p>
    </div>
  );
};

export default BuyMeACoffeeLink;
