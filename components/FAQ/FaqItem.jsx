import Link from "next/link";
import React, { useState } from "react"

  const FaqItem = ({
    question,
    answer,
  
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              
        {!isVisible && (
          <button onClick={() => setIsVisible(true)}  class="flex items-center justify-between w-full p-8">
              <h1 class="font-semibold text-gray-700 dark:text-white">{question}</h1>
              <span class="text-white bg-blue-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
          </span>
          </button>
        )}

      {isVisible && (
           <button onClick={() => setIsVisible(false)}  class="flex items-center justify-between w-full p-8">
           <h1 class="font-semibold text-gray-700 dark:text-white">{question}</h1>
           <span class="text-gray-400 bg-gray-200 rounded-full" >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
              </svg>
          </span>
        
          </button>
        )}



      <hr className="border-gray-200 dark:border-gray-700" />

      {isVisible && (
          <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
              {answer}
          </p>
      )}
  </div>
    );
  };
  
  export default FaqItem;
  