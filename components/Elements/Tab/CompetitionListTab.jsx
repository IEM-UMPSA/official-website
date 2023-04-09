import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false })
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PaginationSection from '../../Common/Pagination';
import Link from 'next/link';

 
export default () => (
    <section className="course__area pt-120 pb-120">
        <Tabs>
            <div className="container">

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="course__tab-conent">
                        <TabPanel>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="course__item white-bg mb-30 fix">
                                    <div className="row gx-0">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                                            <div className="course__thumb course__thumb-list w-img p-relative fix">
                                                <Link href="/course-details">
                                                    <img src="assets/img/course/list/course-1.jpg" alt="img not found"/>
                                                </Link>
                                            <div className="course__tag">
                                                <Link href="/course-details">Art & Design</Link>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                                            <div className="course__right">
                                            <div className="course__content course__content-3">
                                                <div className="course__meta d-flex align-items-center">
                                                    <div className="course__lesson mr-20">
                                                        <span><i className="fas fa-book"></i>43 Lesson</span>
                                                    </div>
                                                    <div className="course__rating">
                                                        <span><i className="fas fa-star"></i>4.5 (44)</span>
                                                    </div>
                                                </div>
                                                <h3 className="course__title course__title-3">
                                                    <Link href="/course-details">Creative writing through Storytelling</Link>
                                                </h3>
                                                <div className="course__summary">
                                                    <p>Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem</p>
                                                </div>
                                                <div className="course__teacher d-flex align-items-center">
                                                    <div className="course__teacher-thumb mr-15">
                                                        <img src="assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                                                    </div>
                                                    <h6><Link href="/instructor-details">Jim Séchen</Link></h6>
                                                </div>
                                            </div>
                                            <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
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
                                        </div>
                                    </div>
                                </div>
                            </div>                                                                                                                                                                                                                                                                                                                                                     
                        </div>
                        </TabPanel>
        
                        </div>
                    </div>
                </div>
                <PaginationSection />
            </div>
        </Tabs>
    </section>
);