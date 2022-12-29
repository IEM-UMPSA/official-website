import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

class CourseSlider extends Component {

    render() {

        return (
            <div className="course__slider swiper-container">
                <div className="swiper-wrapper pb-10">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y,]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2
                            },
                            1200: {
                                // when window width is >= 992px
                                slidesPerView: 2,
                            }
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><img src="assets/img/course/course-1.jpg" alt="img not found" /></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details">Art & Design</Link>
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
                                    <h3 className="course__title"><Link href="/course-details">Become a product Manager learn the skills & job.</Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details">Jim Séchen</Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status">
                                        <span>Free</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details" className="link-btn">Know Details<i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><img src="assets/img/course/course-2.jpg" alt="img not found" /></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details" className="sky-blue">Mechanical</Link>
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
                                    <h3 className="course__title"><Link href="/course-details">Fundamentals of music theory Learn new</Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teacher-2.jpg" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details">Barry Tone</Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="sky-blue">$32.00</span>
                                        <span className="old-price">$68.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details" className="link-btn">Know Details<i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><img src="assets/img/course/course-3.jpg" alt="img not found" /></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details" className="green">Development</Link>
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
                                    <h3 className="course__title"><Link href="/course-details">Strategy law and organization Foundation</Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teacher-3.jpg" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details">Elon Gated</Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="green">$46.00</span>
                                        <span className="old-price">$68.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details" className="link-btn">Know Details<i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="course__item course__item-3 swiper-slide white-bg mb-80 fix">
                                <div className="course__thumb w-img p-relative fix">
                                    <Link href="/course-details"><img src="assets/img/course/course-4.jpg" alt="img not found" /></Link>
                                    <div className="course__tag">
                                        <Link href="/course-details" className="blue">Marketing</Link>
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
                                    <h3 className="course__title"><Link href="/course-details">The business Intelligence analyst Course 2022</Link></h3>
                                    <div className="course__teacher d-flex align-items-center">
                                        <div className="course__teacher-thumb mr-15">
                                            <img src="assets/img/course/teacher/teacher-4.jpg" alt="img not found" />
                                        </div>
                                        <h6><Link href="/instructor-details">Eleanor Fant</Link></h6>
                                    </div>
                                </div>
                                <div className="course__more d-flex justify-content-between align-items-center">
                                    <div className="course__status d-flex align-items-center">
                                        <span className="blue">$62.00</span>
                                        <span className="old-price">$97.00</span>
                                    </div>
                                    <div className="course__btn">
                                        <Link href="/course-details" className="link-btn">Know Details<i className="fas fa-arrow-right"></i>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
    }
}

export default CourseSlider;