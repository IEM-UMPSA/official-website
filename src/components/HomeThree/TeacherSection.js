import React, { Component } from 'react';
import Link from 'next/link';

class Teacher extends Component {

    render() {

        return (
        <section className="teacher__area pt-115 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Our Most <br />
                           Popular <span className="yellow-bg"> Teachers <img src="assets/img/shape/yellow-bg-2.png" alt="img not found" />  </span> <br />
                        </h2>
                        <p>You don't have to struggle alone, you've got our assistance and help.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor-details"><a><img src="assets/img/teacher/teacger-1.jpg" alt="img not found" /></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title"><Link href="/instructor-details"><a>Lillian Walsh,</a></Link></h3> 
                           <span> CO Founder</span>

                           <div className="teacher__social">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor-details"><a><img src="assets/img/teacher/teacher-2.jpg" alt="img not found" /></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title"><Link href="/instructor-details"><a>Kelly Franklin,</a></Link></h3> 
                           <span>Desginer</span>

                           <div className="teacher__social">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                     <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                        <div className="teacher__thumb w-img fix">
                           <Link href="/instructor-details"><a><img src="assets/img/teacher/teacher-3.jpg" alt="img not found" /></a></Link>
                        </div>
                        <div className="teacher__content">
                           <h3 className="teacher__title"><Link href="/instructor-details"><a>Hilary Ouse,</a></Link></h3> 
                           <span>Markater</span>

                           <div className="teacher__social">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                 <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="teacher__more text-center mt-30">
                        <Link href="/contact"><a className="e-btn e-btn-border e-btn-5">Become an Instructor</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default Teacher;