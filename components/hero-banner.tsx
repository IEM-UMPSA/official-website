"use client"

import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function HeroBanner() {
  const router = useRouter();

    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/slide/upc.jpg', '/slide/huawei-day.jpg', '/slide/tt-electronics.jpg', '/slide/thank-you.jpg' ];
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
      const handleClick = () => {
        router.push('/#events');
      };
      return (
      <main className="min-screen">
        <section className="bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="space-y-6 lg:w-1/2">
            <div className="space-y-2">
              <h2 className="text-lg text-gray-600">IEM UMPSA</h2>
              <p className="text-4xl md:text-6xl font-bold text-gray-800 leading-none">Embark on Professionalism</p>
            </div>
            <p className="text-gray-600">
            Founded in 2013. Acts as a liaison, connecting UMPSA students to engineers, institutions, industries and professionals.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-teal-700 text-white">Learn More</Button>
              <Button onClick={handleClick} className="bg-yellow-300 text-gray-800 hover:text-white">Events</Button>
            </div>
            <div className="border grid grid-cols-3  bg-white pt-4 pb-4 rounded-lg">
              <div  className="text-center">
                <p className="text-3xl font-bold text-gray-800">50+</p>
                <p className="text-gray-600">Events Held</p>
                <p className="text-sm text-gray-500">We're still rolling!</p>
              </div>
              <div className="text-center border-x-2  ">
                <p className="text-3xl  font-bold text-gray-800">1000+</p>
                <p className="text-gray-600">Impact</p>
                <p className="text-sm text-gray-500">Students Reached</p>
              </div>
              <div className="text-center ">
                <p className="text-3xl font-bold text-gray-800">57</p>
                <p className="text-gray-600">Committee</p>
                <p className="text-sm text-gray-500">Passionate Students</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-8">
              <Image
      src={images[currentImage]}
      alt="Hero"
      width={1440}
      height="400"
      className="object-cover w-screen h-[28rem] rounded-lg"
    />
          </div>
        </div>
      </div>
        </section>
      </main>
  );
}
