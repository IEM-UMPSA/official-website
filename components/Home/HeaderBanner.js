'use client';

import { BsMegaphone } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

export const revalidate = 3600; // revalidate this page every 3600 seconds


export default function HeaderBanner() {

const [isVisible, setIsVisible] = useState(true);

return (
    <div  className={ isVisible ? ' bg-indigo-600 z-20 mt-90' : 'hidden' }  >
      
      <div  className=" mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div  data-sheetdb-url="http://localhost:3000/api/announcement"  className="flex flex-wrap items-center justify-between">
          <div   data-sheetdb-query-string="id" className=" flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-indigo-800 p-2">
              <BsMegaphone className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 truncate sm:visible font-medium text-white monitor">
              <span className="md:hidden">{`{{summary}}`}</span>
              <span className="hidden md:inline" >{`{{description}}`}</span>
            </p>
          </div>
          <div className="md:order-3 flex-shrink-0 md:mr-8 sm:order-2 sm:ml-3 ">
            <button onClick={() => setIsVisible(false)}
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            > 
              
              <span className="sr-only">Dismiss</span>
              <AiOutlineClose className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="md:order-2 w-full flex-shrink-0  sm:order-3 sm:mt-0 sm:w-auto">
            <a 
              href={`{{link}}`}
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>  

        <script src="https://sheetdb.io/handlebars.js"></script>

      </div>


    </div>
  )
}