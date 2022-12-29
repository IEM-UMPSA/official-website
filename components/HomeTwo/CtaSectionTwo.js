import React, { Component } from 'react';
import Link from 'next/link';

class CtaTwo extends Component {

    render() {

        return (
        <section className="cta__area mb--100">
            <div className="container">
               <div className="cta__inner cta__inner-2 blue-bg fix">
                  <div className="cta__shape">
                     <img src="assets/img/cta/cta-shape.png" alt="img not found" />
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                        <div className="cta__content">
                           <h3 className="cta__title">Start learning by Downloading Apps.</h3>
                        </div>
                     </div>
                     <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                        <div className="cta__apps d-lg-flex justify-content-end p-relative z-index-1">
                           <a target="_blank" href="https://www.apple.com/app-store/" className="mr-10"><i className="fab fa-apple"></i> Apple Store</a>
                           <a target="_blank" href="https://play.google.com/store/apps" className="active"><i className="fab fa-google-play"></i> Play Store</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default CtaTwo;