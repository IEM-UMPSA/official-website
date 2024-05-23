import Link from 'next/link';
import { FaTelegram, FaLinkedin , FaGithub, FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-4 text-center text-gray-300 bottom-0 relative w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-center md:text-left md:mb-0 mb-2">© {new Date().getFullYear()} All Rights Reserved | IEM UMPSA 2023 - {new Date().getFullYear()} </p>
        <div className="flex items-center justify-center md:justify-end">
        <Link href="https://www.instagram.com/iemumpsass/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <AiFillInstagram className="text-blue-400" size={30} />
          </Link>
          <Link href="https://t.me/iemumpss" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaTelegram className="text-blue-400" size={30} />
          </Link>
          <Link href="https://www.linkedin.com/company/iemumpss/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin  className="text-blue-400" size={30} />
          </Link>
          <Link href="https://github.com/IEM-UMPSS" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub className="text-blue-400" size={30} />
          </Link>
          <Link href="https://www.facebook.com/IEMUMPStudentSection/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaFacebook className="text-blue-400" size={30} />
          </Link>
          <Link href="https://chat.whatsapp.com/D6g1NWa4zrW8YNP1zg9hYh" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp  className="text-blue-400" size={30} />
          </Link>
        </div>
      </div>
  
    </footer>
  );
}
