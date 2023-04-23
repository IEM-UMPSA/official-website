import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO/index';

const ParticipantList = () => {
  const participants = [
    { name: 'LAU ZHAO LIN', matricID: 'CB22039' },
    { name: 'TAN KA POH', matricID: 'RM22037' },
    { name: 'Phan Zhi Loong', matricID: 'Ea20007' },
    { name: 'LOH FUI QI', matricID: 'EA20013' },
    { name: 'GOH JO YING', matricID: 'EA20018' },
    { name: 'Tan Qiao Zhen', matricID: 'EA20001' },
    { name: 'SHARON TIE TUNG SHING', matricID: 'RP22022' },
    { name: 'CHUA HONG XIANG', matricID: 'HA20030' },
    { name: 'SHU TUANG SIONG', matricID: 'EC20062' },
    { name: 'LOO MEI FERN', matricID: 'AA20217' },
    { name: 'CHUA WEE REN', matricID: 'AA20216' },
    { name: 'LIM SEI FEN', matricID: 'AA20219' },
    { name: 'RIKY DANIEAL BIN MISMAN', matricID: 'FB19073' },
    { name: 'Mohammad Haikal Firdaus bin Yusmi', matricID: 'FB19092' },
    { name: 'Pavithiran A/L Mahinthan', matricID: 'TA20004' },
    { name: 'HARMELLA A/P MURUGAN NAIDU', matricID: 'TA20024' },
    { name: 'Zaqwan Hazim Bin Abu Zarin', matricID: 'FB20037' },
    { name: 'YAP BEE BEE', matricID: 'SA20067' },
    { name: 'Wong Yee Huei', matricID: 'SA20070' },
    { name: 'Lydia Zeti Anak Billy', matricID: 'VD22004' },
    { name: 'NURUL ANIS SABRINA BINTI OTHMAN', matricID: 'VD22008' },
    { name: 'MOHAMAD SYAHIRAN BIN MAHMOOD', matricID: 'Vd22002' },
    { name: 'TUAN MUHAMMAD UWAIS BIN TUAN SOH', matricID: 'VD22005' },
    { name: 'MUHAMMAD FARIS BIN ZULKEPLI', matricID: 'VD22011' },
    { name: 'MUHAMMAD HAKIM FIKRI BIN MAHD AB LAH', matricID: 'Vd22013' },
    { name: 'KAJENDRAN A/L MURUALIKARAN', matricID: 'TA20027' },
    { name: 'MUHAMMAD FIRDAUS BIN MOHD ZUKERI', matricID: 'VD22006' },
    { name: 'NUR FARHANA BT ABDUL RAHMAN', matricID: 'TL21004' },
    { name: 'Jehovah Yii Zui Hon', matricID: 'TB20091' },
    { name: 'SALINI A/P SAMBETH', matricID: 'KA21088' },
  ];

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
      <h3 className="font-bold mb-2 text-center">Only those who are on this list will get Surat Perlepasan</h3>
      <div className="overflow-x-auto">
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