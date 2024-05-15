
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FcStackOfPhotos } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Engineering Week 2024 | IEM UMPSA",
  applicationName: 'Engineering Week 2024',
  description: "Join IEM-UMPSA SS from May 12-19 for Engineering Week 2024. Participate in workshops, seminars, and competitions designed for engineering enthusiasts. Celebrate the spirit of engineering with us!",
  keywords: "Engineering Week 2024, IEM-UMPSA, University Malaysia Pahang, Engineering Events, Workshops, Seminars, Competitions",
  authors: [{ name: 'IEM UMPSA', url: 'https://iemumpsa.vercel.app/' }],
  creator: 'IEM-UMPSS',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: 'https://iemumpsa.vercel.app/engineering-week',
    siteName: 'IEM UMPSA',
    title: "Engineering Week 2024 | IEM UMPSA",
    description: "Join IEM-UMPSA SS from May 12-19 for Engineering Week 2024. Participate in workshops, seminars, and competitions designed for engineering enthusiasts. Celebrate the spirit of engineering with us!",
    images: [
      {
        url: 'https://iemumpsa.vercel.app/logo/logo.jpg', // Must be an absolute URL
        width: 512,
        height: 512,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};



const events = [
  {
    name: 'Aspen Plus Workshop',
    image: '/events/aspen.jpg',
    description: 'Kickstart the week on May 12th with our Aspen Plus Workshop. Dive deep into process modeling and learn from the experts.  ',
    link: '/events/aspen-plus-workshop',
    uploadLink: 'https://umpedumy-my.sharepoint.com/:f:/g/personal/tb20091_student_umpsa_edu_my/Eu8WNYGK7-9Fpx5v10U9osgBepESi8-rO_xGir_jQV4b2g?e=I6Fn0n', // Replace with your actual link

  },
  {
    name: 'Site Visit - UPC CHemical (M) Sdn. Bhd.',
    image: '/events/upc.jpg',
    description: 'Get a behind-the-scenes look at real-world chemical engineering on May 17th. Don’t miss this rare opportunity to see theory put into practice.',
    link: '/events/site-visit-to-upc-chemicals',
    uploadLink: 'https://umpedumy-my.sharepoint.com/:f:/g/personal/tb20091_student_umpsa_edu_my/EnaBS0NSdvdGt3kD9pijhkQBfItPyGHWy92uB9z01RQ1vQ?e=bcyEur', // Replace with your actual link

  },
  {
    name: 'Polymath Workshop',
    image: '/events/polymath.jpg',
    description: 'Conclude the week on May 18th by enhancing your problem-solving skills at our Polymath Workshop, where engineering meets innovation.',
    link: '/events/chemical-engineering-with-polymath',
    uploadLink: 'https://umpedumy-my.sharepoint.com/:f:/g/personal/tb20091_student_umpsa_edu_my/EqzSfQATdLVFu-AviH2FRSsBIJze59rjHkOnaJV8dmLyJg?e=2fnXqh', // Replace with your actual link

  },
  {
    name: 'Math Olympic Competition',
    image: '/events/math-olympic.jpg',
    description: ' Put your skills to the test and compete with the best on the final day.',
    link: '/events/math-olympic-competition',
    uploadLink: 'https://umpedumy-my.sharepoint.com/:f:/g/personal/tb20091_student_umpsa_edu_my/Emq6Iz1e8exMvJtKzXWueW4BWq-StL4XBPBHgXcC_P2byg?e=e6Eyw7', // Replace with your actual link

  },
  {
    name: 'IEM Virtual Run',
    image: '/events/virtual-run.jpg',
    description: 'Lace up your sneakers for our week-long Virtual Run starting May 12th. Join fellow engineers in promoting health and teamwork in our community.',
    link: '/events/virtual-run',
    uploadLink: 'https://umpedumy-my.sharepoint.com/:f:/g/personal/tb20091_student_umpsa_edu_my/EmydO5Wo-X9Mp_68XxntRVcBjHBvnGjJ0_q73vS1VFeGOg?e=dsm9Hb', // Replace with your actual link

  },
];

const EngineeringPage: React.FC = () => {
  
  
  return (
    <>
      <Header />
      <div className="flex flex-col gap-8 items-center mt-8">
        <div className="relative  ml-20">
          <div className="flex flex-col md:flex-row items-center md:items-start md:gap-4">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-center md:text-left">
                Engineering Week 2024
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-center md:text-left">
                Join IEM-UMPSA SS from May 12-19 for an exhilarating week filled with opportunities to innovate, inspire, and interact. Ready your minds for cutting-edge workshops, insightful seminars, and thrilling competitions designed for engineering enthusiasts at all levels.<br /><br />
                Whether you’re aiming to enhance your skills, gain new insights, or network with industry leaders, this week has it all. Don't just watch the future happen—be a part of creating it!<br /><br />
                Mark your calendars and stay tuned for more details. Let’s celebrate the spirit of engineering together! 🚀🛠️ <br /><br />
                "EMBARK ON PROFESSIONALISM"<br /><br />
                #EngineeringWeek #IEMUMPSASS #IEMPAHANG #IEMMALAYSIA #UMPSAMALAYSIA #UMPSAFirstChoice #UMPSA5STAR
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="/ew.jpg"
                alt="Engineering Week Banner"
                className="w-2/3 object-cover mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-100 py-8">
          <div className="grid gap-6 w-full mt-10 md:w-3/4 lg:w-2/3 mx-auto">
        
          <h1 className="text-4xl font-bold text-center">
                🌟 Engineering Week 2024 - Events 🌟
              </h1>
            {events.map(event => (
            
              <div className="grid md:grid-cols-[200px_1fr] gap-4 items-center bg-white p-4 rounded-md" key={event.name}>
                    <Link href={event.link}>
                <Image
                  alt="Event Photo"
                  className="rounded-lg object-contain aspect-[4/3] mx-auto"
                  height={150}
                  src={event.image}
                  width={200}
                /></Link>
                <div className="space-y-2">
                 
             
                <Link href={event.link}> <h3 className="font-semibold text-lg">{event.name}</h3></Link>
                  <p className="text-gray-500 dark:text-gray-400">{event.description}</p>
                 
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="bg-blue-200">
                    <FcStackOfPhotos className="h-4 w-4" />
                      <Link href={event.uploadLink} target="_blank">
                        View Photo
                      </Link>
                     
                    
                    </Button>
                  </div>
                 
             
                </div>
              </div> 

            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EngineeringPage;
