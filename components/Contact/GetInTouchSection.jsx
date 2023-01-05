import React, { Component } from 'react';
import { useState } from 'react';

const GetInTouch = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMsg] = useState('');
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
 
     const form = {
       name,
       email,
       subject,
       message
    }
 
    console.log(form)
 
       const response = await fetch('/api/contact',{
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(form)
     })
 
       const content = await response.json();
 
       console.log(content)
 
       alert("Thanks for contacting us. We will get back to you soon.")
 
   }


        return (
            <section className="contact__area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-7 col-lg-6">
                     <div className="contact__wrapper">
                        <div className="section__title-wrapper mb-20">
                           <h2 className="section__title">Get in <span className="yellow-bg yellow-bg-big">touch<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                           <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                        </div>
                        <div className="contact__form">
                           <form onSubmit={handleSubmit}>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input  value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" name="name"/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-md-6">
                                    <div className="contact__form-input">
                                       <input value={email} onChange={e => setEmail(e.target.value)}  type="email" placeholder="Your Email" name="email"/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <input type="text"  value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" name="subject"/>
                                    </div>
                                 </div>
                                 <div className="col-xxl-12">
                                    <div className="contact__form-input">
                                       <textarea placeholder="Enter Your Message" value={message} onChange={e => setMsg(e.target.value)} name="message"></textarea>
                                    </div>
                                 </div>
                                 {/* <div className="col-xxl-12">
                                    <div className="contact__form-agree  d-flex align-items-center mb-20">
                                       <input className="e-check-input" type="checkbox" id="e-agree"/>
                                       <label className="e-check-label" htmlFor="e-agree">I agree to the<a href="#">Terms & Conditions</a></label>
                                    </div>
                                 </div> */}
                                 <div className="col-xxl-12">
                                    <div className="contact__btn">
                                       <button type="submit" className="e-btn">Send your message</button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="contact__info white-bg p-relative z-index-1">
                        <div className="contact__shape">
                           <img className="contact-shape-1" src="assets/img/contact/contact-shape-1.png" alt="img not found"/>
                           <img className="contact-shape-2" src="assets/img/contact/contact-shape-2.png" alt="img not found"/>
                           <img className="contact-shape-3" src="assets/img/contact/contact-shape-3.png" alt="img not found"/>
                        </div>
                        <div className="contact__info-inner white-bg">
                           <ul>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="map" viewBox="0 0 24 24">
                                          <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"/>
                                          <circle className="st0" cx="12" cy="10" r="3"/>
                                       </svg>
                                    </div>
                                    <div className="contact__info-text">
                                       <h4>Our location</h4>
                                       <p><a target="_blank" href="https://goo.gl/maps/K7WjNanRfYNH8LZo9">Universiti Malaysia, 26600 Pekan, Pahang</a></p>
   
                                    </div>
                                 </div>
                              </li>
                              <li>
                                 <div className="contact__info-item d-flex align-items-start mb-35">
                                    <div className="contact__info-icon mr-15">
                                       <svg className="mail" viewBox="0 0 24 24">
                                          <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"/>
                                          <polyline className="st0" points="22,6 12,13 2,6 "/>
                                       </svg>
                                    </div>
                                    <div className="contact__info-text">
                                       <h4>Email us directly</h4>
                                       <p><a href="mailto:iem@ump.edu.my">iem@ump.edu.my</a></p>
                                    </div>
                                 </div>
                              </li>
                             
                           </ul>
                           <div className="contact__social pl-30">
                              <h4>Follow Us</h4>
                              <ul>
                              <li><a href="https://www.facebook.com/IEMUMPStudentSection/" className="fb" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                       <li><a href="https://t.me/iemumpss" className="tw"  target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
                                       <li><a href="https://www.instagram.com/iemumpss/" className="ins"  target="_blank"><i className="fab fa-instagram"></i></a></li>
                                       <li><a href="https://www.linkedin.com/company/iemumpss/" className="lin"  target="_blank"><i className="fab fa-linkedin"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> 
   )
}

export default GetInTouch;