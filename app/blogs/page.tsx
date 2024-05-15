import { getPostsData } from "@/lib/blog_functions";
import React from "react";
import Image from "next/image";
import { RiPencilFill } from 'react-icons/ri';
import Link from "next/link";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

// Function to format date as day-month-year
const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default async function Blogs() {
  const blogs = await getPostsData();

  // Sort blogs by date in ascending order
  blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Case: no posts
  if (blogs.length === 0) {
    return (
      <>
        <Header/>
          <div className="container mx-auto p-4">There are no posts yet...</div>
        <Footer/>
      </>
    );
  }

  // Display all posts
  return (
    <>
      <Header/>
      <div className="container mx-auto p-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {blogs.reverse().map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <Image
                width={400}
                height={100}
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                {/* Blog Title */}
                <h2 className="text-lg font-semibold mb-2">
                  <Link prefetch={false} href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                {/* Blog Author */}
                <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>

                {/* Blog Description */}
                <p className="text-sm text-gray-600">{blog.excerpt}</p>

                {/* Blog Date */}
                <p className="mt-2 text-xs text-gray-400">
                  {formatDate(blog.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="https://forms.gle/Di95fZuLeGAUhEQ39"
        className="fixed bottom-24 z-10 right-4 w-auto h-12 bg-red-500 text-white flex items-center p-4 justify-center rounded-md cursor-pointer pencil-icon"
      >
        <RiPencilFill size="1.5rem" /> Submit Your Blog 
      </Link>
      <Footer/>
    </>

  );
}
