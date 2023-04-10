import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false })
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PaginationSection from '../Common/Pagination';
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
                                                <Link href="/competition/invencmax-3.0">
                                                    <img src="/assets/img/competition/invencmax.jpg" alt="img not found"/>
                                                </Link>
                                            <div className="course__tag">
                                                <Link href="/course-details">New</Link>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                                            <div className="course__right">
                                            <div className="course__content course__content-3">
                                                                                               <h3 className="course__title course__title-3">
                                                    <Link href="/competiton/invencmax-3.0">InvencMax 3.0</Link>
                                                </h3>
                                                <div className="course__summary">
                                                    <p>InvencMax is an annual invention competition aimed at incentivizing STEAM awareness among undergraduate students and promoting sustainable product design and marketing.




</p>
                                                </div>
                                                <div className="course__teacher d-flex align-items-center">
                                                    <div className="course__teacher-thumb mr-15">
                                                        <img src="/assets/img/brand/iem-utm.jpg" alt="img not found"/>
                                                    </div>
                                                    <h6><Link href="https://t.me/IEMUTMStudentSection">IEM-UTM Student Section</Link></h6>
                                                </div>
                                            </div>
                                            <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                                                <div className="course__status">
                                                    <span>RM 180 per group</span>
                                                </div>
                                                <div className="course__btn">
                                                    <Link href="/competition/invencmax-3.0" className="link-btn">Know Details<i className="fas fa-arrow-right"></i>
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