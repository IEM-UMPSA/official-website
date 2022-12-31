import React, { Component } from 'react';
import Link from 'next/link';

class Hero extends Component {

    render() {

        return (
            <main>
                <section className="hero__area hero__height d-flex align-items-center grey-bg-2 p-relative">
                    <div className="hero__shape">
                        <img className="moon" src="assets/img/shape/hero/moon-4.png" alt="img not found"/>
                        <img className="star-1" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-2" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-3" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-4" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-5" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-6" src="assets/img/shape/hero/star-1.png" alt="img not found"/>

                        <img className="star-7" src="assets/img/shape/hero/star-1.png" alt="img not found"/>
                        <img className="star-8" src="assets/img/shape/hero/star-1.png" alt="img not found"/>


                    </div>
                    <div className="container">
                        <div className="hero__content-wrapper mt-90">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="hero__content p-relative z-index-1">
                                    <h3 className="hero__title">
                                        <span>IEM-UMPSS</span> Founded in&nbsp;
                                        <span className="yellow-shape">2013 <img src="assets/img/shape/yellow-bg.png" alt="yellow-shape"/> </span> 
                                        </h3>
                                        <p>Acts as a liaison, connecting UMP students to engineers, institutions, industries and professionals.</p>
                                        <Link href="/course-grid" className="e-btn">Join Us Now</Link>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"> 
                                    {/* <div className="hero__thumb d-flex p-relative"> */}
                                    {/* <div className="hero__thumb-shape">
                                        <img className="hero-1-dot" src="assets/img/shape/hero/hero-1-dot.png" alt="img not found"/>
                                        <img className="hero-1-circle-3" src="assets/img/shape/hero/hero-1-circle-3.png" alt="img not found"/>
                                        <img className="hero-1-circle-4" src="assets/img/shape/hero/hero-1-circle-4.png" alt="img not found"/>
                                    </div> */}
                                    <div className="hero__thumb-big mr-30">
                                        <img src="assets/img/hero/boat-animation.gif" alt="img not found"/>
                                        {/* <div className="hero__quote hero__quote-animation">
                                            <span>⚓ Set the sail ⚓</span>
                                            <h4>Embark 🌊 on Professionalism 🧭</h4>
                                        </div>   */}
                                    </div>
                                    {/* <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                                        <img src="assets/img/hero/hero-sm-1.jpg" alt="img not found"/>
                                    </div>  */}
                                    {/* </div> */}
                                 </div> 
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Hero;