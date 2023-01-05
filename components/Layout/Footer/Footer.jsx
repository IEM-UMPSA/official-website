import React from 'react';
import FooterBottom from './FooterBottom';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {

   const [email, setEmail] = useState('');


   const handleSubmit = async (e) => {
      e.preventDefault();

      const form = {
         email
      }

      console.log(form)
  

   const response = await fetch('/api/subscribe',{
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
   })

      const content = await response.json();

      console.log(content)

      alert("You have subscribed to our newsletter.")

      setEmail('');
   }

    return (
       <footer>
           <div className="footer__area footer-bg">
              <div className="footer__top pt-190 pb-20">
                 <div className="container">
                    <div className="row">
                       <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                          <div className="footer__widget mb-50">
                             <div className="footer__widget-head mb-22">
                                <div className="footer__logo">
                                   <Link href="/"><img src="/assets/img/logo/logo-2.png" alt="img not found"/></Link>
                                </div>
                             </div>
                             <div className="footer__widget-body">
                                <p>IEM-UMPSS provides various activities for different disciplines. We aim to promote sound
                           professional engineering practice to prepare engineering students for future career. We also service
                           the needs and interests of our members to enhance society’s consciousness of science and
                           technology..</p>

                                <div className="footer__social">
                                   <ul>
                                      <li><a href="https://www.facebook.com/IEMUMPStudentSection/" className="fb"  target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                      <li><a href="https://t.me/iemumpss" className="tw"  target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
                                      <li><a href="https://www.instagram.com/iemumpss/" className="ins"  target="_blank"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="https://www.linkedin.com/company/iemumpss/" className="lin"  target="_blank"><i className="fab fa-linkedin"></i></a></li>

                                   </ul>


                                </div>

                             </div>
                          </div>
                       </div>
                       <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                          <div className="footer__widget mb-50">
                             <div className="footer__widget-head mb-22">
                                <h3 className="footer__widget-title">Navigation</h3>
                             </div>
                             <div className="footer__widget-body">
                                <div className="footer__link">
                                   <ul>
                                      <li><Link href="/event">Event</Link></li>
                                      <li><Link href="/blog">Blog</Link></li>
                                      <li><Link href="/instructor">Committee</Link></li>
                                      <li><Link href="/contact">Contact</Link></li>
                                   </ul>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                          <div className="footer__widget mb-50">
                             <div className="footer__widget-head mb-22">
                                <h3 className="footer__widget-title">More</h3>
                             </div>
                             <div className="footer__widget-body">
                                <div className="footer__link">
                                   <ul>
                                       <li><Link href="/development-team">Development Team</Link></li>
                                       <li><Link href="/open-source">Open Source</Link></li>
                                       <li><Link href="/partnership">Collaborate with Us</Link></li>
                                       <li><Link href="/job">Job</Link></li>
                                       <li><Link href="/faq">FAQ</Link></li>
                                   </ul>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                          <div className="footer__widget footer__pl-70 mb-50">
                             <div className="footer__widget-head mb-22">
                                <h3 className="footer__widget-title">Subscribe</h3>
                             </div>
                             <div className="footer__widget-body">
                                <div className="footer__subscribe">
                                   <form onSubmit={handleSubmit}>
                                      <div className="footer__subscribe-input mb-15">
                                         <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Your email address"/>
                                         <button type="submit">
                                            <i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                         </button>
                                      </div>
                                   </form>
                                   <p>Get the latest news and updates right at your inbox.</p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <FooterBottom />
           </div>
        </footer>
    );
}

export default Footer;