import React, { Component } from 'react';
import Link from 'next/link';

class Skilline extends Component {

    render() {

        return (
        <section className="what__area pt-115">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                     <div className="section__title-wrapper mb-60 text-center">
                        <h2 className="section__title">What is <span className="yellow-bg-big">Skilline? <img src="assets/img/shape/yellow-bg-2.png" alt="img not found" /></span></h2>
                        <p>Sloshed faff about me old mucker blatant bubble and squeak hanky panky some dodgy chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow off I'm telling up the kyver he legged it bleeder jolly good, </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-5 offset-xl-1 col-xl-5 offset-xl-1 col-lg-6">
                     <div className="what__item transition-3 mb-30 p-relative fix">
                        <div className="what__thumb w-img">
                           <img src="assets/img/what/what-1.jpg" alt="img not found" />
                        </div>
                        <div className="what__content p-absolute text-center">
                           <h3 className="what__title white-color">Mostly <br /> Online Learning</h3>
                           <Link href="/contact"><a className="e-btn e-btn-border-2">Start a class today</a></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-6">
                     <div className="what__item transition-3 mb-30 p-relative fix">
                        <div className="what__thumb w-img">
                           <img src="assets/img/what/what-2.jpg" alt="img not found" />
                        </div>
                        <div className="what__content p-absolute text-center">
                           <h3 className="what__title white-color">Become <br /> an Instructor</h3>
                           <Link href="/contact"><a className="e-btn e-btn-border-2">Start teaching</a></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default Skilline;