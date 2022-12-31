import React from 'react';
import Link from 'next/link';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";

const FooterBottom = () => {
    return (
        <div className="footer__bottom">
            <div className="container">
                <div className="row">
                <div className="col-xxl-6 col-xl-6">
                    <div className="footer__copyright text-left">
                        <p>&copy; {new Date().getFullYear()} IEM-UMPSS, All Rights Reserved. Developed By <Link href="/development-team">IEM Web Dev</Link></p>
                    </div>
                </div>

                <div className="col-xxl-6 col-xl-6">
                    <div className="footer__copyright text-right f-right flex">
                    Powered by &nbsp;
                    <Link  href="https://nextjs.org/" target="_blank" ><TbBrandNextjs size="1.5em" /></Link> &nbsp;
                    <Link  href="https://reactjs.org/" target="_blank" ><FaReact size="1.5em" className="loaderIcon"/></Link> &nbsp;
                    <Link  href="https://sass-lang.com/" target="_blank" ><FaSass size="1.5em" /> </Link>&nbsp;
                    <Link  href="https://tailwindcss.com/" target="_blank" ><SiTailwindcss size="1.5em" /></Link> &nbsp;
                    <Link  href="https://getbootstrap.com/" target="_blank" ><BsFillBootstrapFill size="1.5em" /></Link> &nbsp;
                    <Link  href="https://nextjs.org/" target="_blank" ><FaNodeJs size="1.5em" /></Link> &nbsp;

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;