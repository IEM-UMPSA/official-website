import React, { Component } from 'react';
import Cta from '../Home/CtaSection';
import Link from 'next/link';


class InstructorDetailsMain extends Component {

    render() {

        return (
            <main>
                <section className="teacher__area pt-100 pb-110">
                    <div className="page__title-shape">
                        <img className="page-title-shape-5 d-none d-sm-block" src="assets/img/page-title/page-title-shape-1.png" alt="img not found" />
                        <img className="page-title-shape-6" src="assets/img/page-title/page-title-shape-6.png" alt="img not found" />
                        <img className="page-title-shape-3" src="assets/img/page-title/page-title-shape-3.png" alt="img not found" />
                        <img className="page-title-shape-7" src="assets/img/page-title/page-title-shape-4.png" alt="img not found" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="teacher__details-thumb p-relative w-img pr-30">
                                    <img src="assets/img/teacher/details/teacer-details-1.jpg" alt="img not found"/>
                                    <div className="teacher__details-shape">
                                        <img className="teacher-details-shape-1" src="assets/img/teacher/details/shape/shape-1.png" alt="img not found"/>
                                        <img className="teacher-details-shape-2" src="assets/img/teacher/details/shape/shape-2.png" alt="img not found"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="teacher__wrapper">
                                    <div className="teacher__top d-md-flex align-items-end justify-content-between">
                                        <div className="teacher__info">
                                            <h4>Hilary Ouse</h4>
                                            <span>Teaches Interior Markater</span>
                                        </div>
                                        <div className="teacher__rating">
                                            <h5>Review:</h5>
                                            <div className="teacher__rating-inner d-flex align-items-center">
                                                <ul>
                                                    <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                                    <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                                    <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                                    <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                                    <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                                </ul>
                                                <p>4.5</p>
                                            </div>
                                        </div>
                                        <div className="teacher__social-2">
                                            <h4>Follow Us:</h4>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-vimeo-v"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="teacher__follow mb-5">
                                            <a href="#" className="teacher__follow-btn">follow <i className="fas fa-plus"></i> </a>
                                        </div>
                                    </div>
                                    <div className="teacher__bio">
                                        <h3>Short Bio</h3>
                                        <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate, absolutely bladdered bamboozled it's your round don't get shirty with me down the pub well.</p>
                                    </div>
                                    <div className="teacher__courses pt-55">
                                        <div className="section__title-wrapper mb-30">
                                            <h2 className="section__title">Teacher <span className="yellow-bg yellow-bg-big">Course<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span></h2>
                                        </div>
                                        <div className="teacher__course-wrapper">
                                            <div className="row">
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="course__item white-bg mb-30 fix">
                                                        <div className="course__thumb w-img p-relative fix">
                                                            <Link href="/course-details"><a><img src="assets/img/course/course-1.jpg" alt="img not found"/></a></Link>
                                                            <div className="course__tag">
                                                                <Link href="/course-details"><a>Art & Design</a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="course__content">
                                                            <div className="course__meta d-flex align-items-center justify-content-between">
                                                                <div className="course__lesson">
                                                                    <span><i className="fas fa-book"></i>43 Lesson</span>
                                                                </div>
                                                                <div className="course__rating">
                                                                    <span><i className="fas fa-star"></i>4.5 (44)</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="course__title"><Link href="/course-details"><a>Become a product Manager learn the skills & job.</a></Link></h3>
                                                            <div className="course__teacher d-flex align-items-center">
                                                                <div className="course__teacher-thumb mr-15">
                                                                    <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                                                                </div>
                                                                <h6><Link href="/course-details"><a>Jim Séchen</a></Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="course__more d-flex justify-content-between align-items-center">
                                                            <div className="course__status">
                                                                <span>Free</span>
                                                            </div>
                                                            <div className="course__btn">
                                                                <Link href="/course-details"><a className="link-btn">
                                                                    Know Details
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="course__item white-bg mb-30 fix">
                                                        <div className="course__thumb w-img p-relative fix">
                                                            <Link href="/course-details"><a><img src="assets/img/course/course-2.jpg" alt="img not found"/></a></Link>
                                                            <div className="course__tag">
                                                                <Link href="/course-details"><a className="sky-blue">Mechanical</a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="course__content">
                                                            <div className="course__meta d-flex align-items-center justify-content-between">
                                                                <div className="course__lesson">
                                                                    <span><i className="fas fa-book"></i>72 Lesson</span>
                                                                </div>
                                                                <div className="course__rating">
                                                                    <span><i className="fas fa-star"></i>4.5 (44)</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="course__title"><Link href="/course-details"><a>Fundamentals of music theory Learn new</a></Link></h3>
                                                            <div className="course__teacher d-flex align-items-center">
                                                                <div className="course__teacher-thumb mr-15">
                                                                    <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found"/>
                                                                </div>
                                                                <h6><Link href="/course-details"><a>Barry Tone</a></Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="course__more d-flex justify-content-between align-items-center">
                                                            <div className="course__status d-flex align-items-center">
                                                                <span className="sky-blue">$32.00</span>
                                                                <span className="old-price">$68.00</span>
                                                            </div>
                                                            <div className="course__btn">
                                                                <Link href="/course-details"><a className="link-btn">
                                                                    Know Details
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="course__item white-bg mb-30 fix">
                                                        <div className="course__thumb w-img p-relative fix">
                                                        <Link href="/course-details"><a><img src="assets/img/course/course-3.jpg" alt="img not found"/></a></Link>
                                                            <div className="course__tag">
                                                                <Link href="/course-details"><a className="green">Development</a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="course__content">
                                                            <div className="course__meta d-flex align-items-center justify-content-between">
                                                                <div className="course__lesson">
                                                                    <span><i className="fas fa-book"></i>14 Lesson</span>
                                                                </div>
                                                                <div className="course__rating">
                                                                    <span><i className="fas fa-star"></i>3.5 (55)</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="course__title"><Link href="/course-details"><a>Strategy law and organization Foundation</a></Link></h3>
                                                            <div className="course__teacher d-flex align-items-center">
                                                                <div className="course__teacher-thumb mr-15">
                                                                    <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found"/>
                                                                </div>
                                                                <h6><Link href="/course-details"><a>Elon Gated</a></Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="course__more d-flex justify-content-between align-items-center">
                                                            <div className="course__status d-flex align-items-center">
                                                                <span className="green">$46.00</span>
                                                                <span className="old-price">$68.00</span>
                                                            </div>
                                                            <div className="course__btn">
                                                                <Link href="/course-details"><a className="link-btn">
                                                                    Know Details
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                    <div className="course__item white-bg mb-30 fix">
                                                        <div className="course__thumb w-img p-relative fix">
                                                        <Link href="/course-details"><a><img src="assets/img/course/course-4.jpg" alt="img not found"/></a></Link>
                                                            <div className="course__tag">
                                                                <Link href="/course-details"><a className="blue">Marketing</a></Link>
                                                            </div>
                                                        </div>
                                                        <div className="course__content">
                                                            <div className="course__meta d-flex align-items-center justify-content-between">
                                                                <div className="course__lesson">
                                                                    <span><i className="fas fa-book"></i>22 Lesson</span>
                                                                </div>
                                                                <div className="course__rating">
                                                                    <span><i className="fas fa-star"></i>4.5 (42)</span>
                                                                </div>
                                                            </div>
                                                            <h3 className="course__title"><Link href="/course-details"><a>The business Intelligence analyst Course 2022</a></Link></h3>
                                                            <div className="course__teacher d-flex align-items-center">
                                                                <div className="course__teacher-thumb mr-15">
                                                                    <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found"/>
                                                                </div>
                                                                <h6><Link href="/course-details"><a>Eleanor Fant</a></Link></h6>
                                                            </div>
                                                        </div>
                                                        <div className="course__more d-flex justify-content-between align-items-center">
                                                            <div className="course__status d-flex align-items-center">
                                                                <span className="blue">$62.00</span>
                                                                <span className="old-price">$97.00</span>
                                                            </div>
                                                            <div className="course__btn">
                                                                <Link href="/course-details"><a className="link-btn">
                                                                    Know Details
                                                                    <i className="fas fa-arrow-right"></i>
                                                                    <i className="fas fa-arrow-right"></i>
                                                                </a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default InstructorDetailsMain;