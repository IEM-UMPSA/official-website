import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {

    render() {

        return (
        <main>
            <section className="banner__area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="banner__item p-relative mb-40" style={{ backgroundImage:`url(${'assets/img/banner/banner-bg-1.jpg'})`}}>
                                <div className="banner__content">
                                    <span>Free</span>
                                    <h3 className="banner__title">
                                        <Link href="/course-details"><a>Germany Foundation <br/> Document</a></Link>
                                    </h3>
                                    <Link href="/course-details"><a className="e-btn e-btn-2">View Courses</a></Link>
                                </div>
                                <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                                <img src="assets/img/banner/banner-img-1.png" alt="img not found"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="banner__item p-relative mb-40" style={{ backgroundImage:`url(${'assets/img/banner/banner-bg-2.jpg'})`}}>
                                <div className="banner__content">
                                <span className="orange">new</span>
                                <h3 className="banner__title">
                                    <Link href="/course-details"><a>Online Courses <br/>From Eduka University</a></Link>
                                </h3>
                                <Link href="/course-details"><a className="e-btn e-btn-2">Find Out More</a></Link>
                                </div>
                                <div className="banner__thumb banner__thumb-2 d-none d-sm-block d-md-none d-lg-block">
                                <img src="assets/img/banner/banner-img-2.png" alt="img not found"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        );
    }
}

export default Banner;