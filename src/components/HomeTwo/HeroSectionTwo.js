import React, { Component } from 'react';
import Link from 'next/link';

class HeroTwo extends Component {

    render() {

        return (
            <section className="hero__area hero__height hero__height-2 d-flex align-items-center blue-bg-3 p-relative fix">
            <div className="hero__shape">
               <img className="hero-1-circle" src="assets/img/shape/hero/hero-1-circle.png" alt="img not found" />
               <img className="hero-1-circle-2" src="assets/img/shape/hero/hero-1-circle-2.png" alt="img not found" />
               <img className="hero-1-dot-2" src="assets/img/shape/hero/hero-1-dot-2.png" alt="img not found" />
            </div>
            <div className="container">
               <div className="hero__content-wrapper mt-90">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="hero__content hero__content-2 p-relative z-index-1">
                           <h3 className="hero__title hero__title-2">
                              Launch your <br /> Own 
                              <span className="yellow-shape">online <img src="assets/img/shape/yellow-bg.png" alt="yellow-shape" /> </span> 
                              learning Platform
                           </h3>
                           <h4>Unlimited access to all 60+ instructors.</h4>
                           <p>2 passes (with access to all classes) for $240</p>
                           
                           <div className="hero__search">
                              <form action="#">
                                 <div className="hero__search-input mb-10">
                                    <input type="text" placeholder="What do you want to learn?" />
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                 </div>
                              </form>
                              <p>You`re guaranteed to find something that`s right for you.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="hero__thumb-wrapper mb--120">
                           <div className="hero__thumb-2 scene">
                              <img className="hero-big" src="assets/img/hero/hero-2/hero.png" alt="img not found" />
                              <img className="hero-shape-purple" src="assets/img/hero/hero-2/hero-shape-purple.png" alt="img not found" />

                              <div className="hero__promotion d-flex white-bg layer" data-depth="0.1">
                                 <div className="hero__promotion-icon inspiration mr-10">
                                    <span>
                                       <svg viewBox="0 0 512 512">
                                          <g>
                                             <path className="st0" d="M158.5,87.1c7.2-4.1,9.6-13.3,5.5-20.5l-15-26c-4.2-7.2-13.4-9.7-20.5-5.5c-7.2,4.1-9.6,13.3-5.5,20.5l15,26   C142.2,88.9,151.4,91.2,158.5,87.1z"/>
                                             <path className="st0" d="M66.6,348l-26,15c-7.2,4.1-9.6,13.3-5.5,20.5c4.2,7.2,13.4,9.6,20.5,5.5l26-15c7.2-4.1,9.6-13.3,5.5-20.5   C83,346.3,73.8,343.9,66.6,348z"/>
                                             <path className="st0" d="M445.4,164l26-15c7.2-4.1,9.6-13.3,5.5-20.5s-13.4-9.6-20.5-5.5l-26,15c-7.2,4.1-9.6,13.3-5.5,20.5   C429.1,165.7,438.3,168.1,445.4,164z"/>
                                             <path className="st0" d="M430.4,374l26,15c7.1,4.1,16.3,1.7,20.5-5.5c4.1-7.2,1.7-16.3-5.5-20.5l-26-15c-7.2-4.1-16.3-1.7-20.5,5.5   C420.7,360.7,423.2,369.8,430.4,374z"/>
                                             <path className="st0" d="M81.6,138l-26-15c-7.2-4.1-16.3-1.7-20.5,5.5s-1.7,16.3,5.5,20.5l26,15c7.1,4.1,16.3,1.7,20.5-5.5   C91.3,151.3,88.8,142.2,81.6,138z"/>
                                             <path className="st0" d="M374,81.6l15-26c4.1-7.2,1.7-16.3-5.5-20.5c-7.2-4.2-16.3-1.7-20.5,5.5l-15,26c-4.1,7.2-1.7,16.3,5.5,20.5   C360.6,91.2,369.8,88.9,374,81.6z"/>
                                             <path className="st0" d="M271,46V15c0-8.3-6.7-15-15-15s-15,6.7-15,15v31c0,8.3,6.7,15,15,15C264.3,61,271,54.3,271,46z"/>
                                             <path className="st0" d="M15,271h31c8.3,0,15-6.7,15-15s-6.7-15-15-15H15c-8.3,0-15,6.7-15,15C0,264.3,6.7,271,15,271z"/>
                                             <path className="st0" d="M497,241h-31c-8.3,0-15,6.7-15,15c0,8.3,6.7,15,15,15h31c8.3,0,15-6.7,15-15S505.3,241,497,241z"/>
                                             <path className="st0" d="M271,259.5l-15-30l-15,30V271h30V259.5z"/>
                                             <path className="st0" d="M241,301h30v60h-30V301z"/>
                                             <path className="st0" d="M93.5,226.9c-9.4,54.9,8.7,110.3,48.6,148.3c24.7,23.5,38.9,57.6,38.9,91.8c0,24.8,20.2,45,45,45h60   c24.8,0,45-20.2,45-45c0-34.1,14.2-68.2,38.9-91.8c33-31.4,51.1-73.8,51.1-119.2c0-90.6-73-164.4-164.4-164.9   C172.2,90.6,106.4,151.7,93.5,226.9z M211,256c0-2.3,0.5-4.6,1.6-6.7l30-60c5.1-10.2,21.7-10.2,26.8,0l30,60c1,2.1,1.6,4.4,1.6,6.7   v120c0,8.3-6.7,15-15,15h-60c-8.3,0-15-6.7-15-15V256z"/>
                                          </g>
                                          </svg>
                                    </span>
                                 </div>
                                 <div className="hero__promotion-text">
                                    <h5>Congratulation</h5>
                                    <p>Your admission completed</p>
                                 </div>
                              </div>
                              <div className="hero__promotion education d-none d-lg-flex white-bg layer" data-depth="0.2" >
                                 <div className="hero__promotion-icon mr-10">
                                    <span className="cap">
                                       <svg viewBox="0 0 791.8 791.8">
                                          <g>
                                             <path className="st0" d="M395.9,501l-236.2-72.7v71.5v49.9c0,56.1,105.8,101.6,236.3,101.6s236.3-45.5,236.3-101.6   c0-0.4-0.1-0.9-0.2-1.3V428.3L395.9,501z"/>
                                             <path className="st0" d="M0,318.7l84.4,30.2l7.2-15.4l31-2.6l4.4,4.6l-26.6,6.3l-3.9,11.5c0,0-60.1,125.6-51.3,187c0,0,37.5,22.4,75,0   l10-168v-14l55.8-12.6l-3.9,9.7L140.5,369l19.2,6.9l236.2,72.7l236.2-72.7l159.7-57.1L395.9,166.4L0,318.7z"/>
                                          </g>
                                          </svg>
                                    </span>
                                 </div>
                                 <div className="hero__promotion-text">
                                    <h5><span className="counter">450</span>K</h5>
                                    <p>Assisted Student</p>
                                 </div>
                              </div>
                              <div className="hero__class d-none d-lg-flex layer" data-depth="0.3">
                                 <div className="hero__class-thumb mr-15">
                                    <img src="assets/img/hero/hero-2/hero-sm.jpg" alt="img not found" />
                                 </div>
                                 <div className="hero__class-text">
                                    <h5>User Experience Class</h5>
                                    <p>Tomorrow is our</p>
                                    <Link href="/contact"><a>Join Now</a></Link>
                                 </div>
                              </div>
                              <div className="hero__mic">
                                 <span>
                                    <svg viewBox="0 0 512 512">
                                       <g>
                                          <g>
                                             <path className="st0" d="M435.7,0H126.5C89.6,0,59.6,30,59.6,66.9v378.3c0,36.9,30,66.9,66.9,66.9h309.2c9.2,0,16.7-7.5,16.7-16.7    c0-17.5,0-461.2,0-478.6C452.4,7.5,444.9,0,435.7,0z M338.9,396.2c0,13.7-15.7,21.5-26.6,13.4L244,358.9h-54.2    c-9.2,0-16.7-7.5-16.7-16.7v-72c0-9.2,7.5-16.7,16.7-16.7H244l68.3-50.7c11-8.2,26.6-0.3,26.6,13.4V396.2z M419,100.3H126.5    c-18.5,0-33.5-15-33.5-33.5c0-18.5,15-33.5,33.5-33.5H419V100.3z"/>
                                          </g>
                                       </g>
                                       <g>
                                          <g>
                                             <rect x="206.5" y="286.8" className="st0" width="26.3" height="38.7"/>
                                          </g>
                                       </g>
                                       <g>
                                          <g>
                                             <polygon className="st0" points="266.2,278.5 266.2,333.8 305.5,363 305.5,249.3   "/>
                                          </g>
                                       </g>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default HeroTwo;