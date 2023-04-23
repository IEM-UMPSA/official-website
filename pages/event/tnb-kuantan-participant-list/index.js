import Link from 'next/link';
import SEO from '../../../components/SEO/index';
import React, { useState, useEffect } from 'react';

const ParticipantList = () => {
  const [participants, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/event/tnb');
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  return (
    <>
    <SEO 
                pageTitle="TNB Kuantan Participant List | IEM-UMPSS" 
                pageDescription="Check out the list of participants who attended the TNB Kuantan event organized by IEM UMPSS at Universiti Malaysia Pahang."
                pageKeywords="TNB Kuantan, IEM UMPSS, Universiti Malaysia Pahang, participants, list.."
                pageImage="https://ilmu.umpadvanced.edu.my/ILMU/pluginfile.php/238420/course/overviewfiles/WhatsApp%20Image%202023-04-16%20at%2000.00.22.jpg"
                pageURL="https://iemumpss.vercel.app/event/tnb-kuantan-participant-list"
                pageImageAlt="TNB Kuantan Participant List | IEM-UMPSS"
            
            />
      <Link href="/event/site-visit-to-tnb-kuantan">
        <span className="block mb-2 text-blue-500 hover:text-blue-700 text-center p-4">← Back to Event</span>
      </Link>
      <h2 className="text-2xl font-bold mb-2 text-center">Registered Participant List</h2>
   
  <div className="text-left max-w-md mx-auto">
    <ul className="list-disc ">
        <li className="font-bold mb-2">☑ Only those who are on this list will get Surat Perlepasan</li>
        <li className="font-bold mb-2">☑ Please inform us promptly if you are unable to attend, so that we can offer your seat to those who are genuinely interested in going.</li>
    </ul>

</div>
      <div className="overflow-x-auto p-2">
        <table className="mx-auto w-full max-w-2xl table-auto border-collapse border-gray-500">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="py-2">#</th>
              <th className="py-2">Full Name</th>
              <th className="py-2">Matric ID</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index} className="border-b border-gray-500">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{participant.name}</td>
                <td className="py-2">{participant.matricID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ParticipantList;