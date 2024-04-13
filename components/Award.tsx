import React from "react";
import Image from "next/image";

const AwardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 bg-yellow-400">
      <h1 className="text-3xl font-bold mb-8 text-white">Awards</h1>
      <div className="bg-white shadow-md mx-4 rounded-lg overflow-hidden mb-4 p-4 flex items-center">
        <div className="flex-shrink-0 mr-4">
          <Image src="/award.jpg" alt="Award" width={100} height={100} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Outstanding IEM Student Section Award 2022/2023</h2>
          <p>This award recognizes the exceptional performance and contributions of the IEM student section in the academic year 2022/2023.</p>
        </div>
      </div>
      {/* Add more awards here */}
    </div>
  );
};

export default AwardList;
