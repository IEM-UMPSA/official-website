import React, { Component } from 'react';
import Cta from '../Home/CtaSection';
import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function EventDetailsMain(){
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(`/api/event/${id}`, fetcher)

    console.log(data)
    if (error) return <div>Failed to load</div>
    console.log(data)
    if (!data) return <div>Loading...</div>

    return (
        <main>
            <section key={data.id}  className="page__title-area pt-120 ">
                <div className="page__title-shape ">
                <img className="page-title-shape-5 d-none d-sm-block" src="/assets/img/page-title/page-title-shape-1.png" alt="img not found"/>
                <img className="page-title-shape-6" src="/assets/img/page-title/page-title-shape-2.png" alt="img not found"/>
                <img className="page-title-shape-7" src="/assets/img/page-title/page-title-shape-4.png" alt="img not found"/>
                <img className="page-title-shape-8" src="/assets/img/page-title/page-title-shape-5.png" alt="img not found"/>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8">
                        <div className="page__title-content mb-25 pr-40">
                            <div className="page__title-breadcrumb">                            
                                <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="/event">Event</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                                </ol>
                                </nav>
                            </div>
                            <span className="page__title-pre purple-bg">{data.department} Department</span>
                            <h5 className="page__title-3">{data.title}</h5>
                        </div>
                        <div className="course__meta-2 d-sm-flex mb-30">
                            {/* <div className="course__teacher-3 d-flex align-items-center mr-70 mb-30">
                            <div className="course__teacher-thumb-3 mr-15">
                                <img src="/assets/img/course/teacher/teacher-1.jpg" alt="img not found"/>
                            </div>
                            <div className="course__teacher-info-3">
                                <h5>Teacher</h5>
                                <p><Link href="/instructor">Elon Gated</Link></p>
                            </div>
                            </div> */}
                            <div className="course__update mr-80 mb-30">
                            <h5>Last Update:</h5>
                            <p>{data.date}</p>
                            </div>
                            {/* <div className="course__update mb-30">
                            <h5>Location:</h5>
                            <p>{data.venue}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="event__area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="events__wrapper">
                                <div className="events__thumb mb-35 w-img">
                                <img src={data.poster} alt="img not found"/>
                                </div>
                                <div className="events__details mb-35">
                                <h3>Description</h3>
                                <p>{data.description}</p>
                                </div>
                                <div className="events__allow mb-40">
                                <h3>This event will allow participants to:</h3>
                                <ul>
                                    <li><i className="fas fa-check"></i> {data.benefitOne}</li>
                                    <li><i className="fas fa-check"></i> {data.benefitTwo}</li>
                                    <li><i className="fas fa-check"></i> {data.benefitThree}</li>
                                </ul>
                                </div>
                                <div className="events__tag">
                                <span><i className="fas fa-tag"></i></span>
                                <Link href="#">{data.categoryOne}, </Link>
                                <Link href="#">{data.categoryTwo}, </Link>
                                <Link href="#">{data.categoryThree}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="events__sidebar pl-70">
                                <div className="events__sidebar-widget white-bg mb-20">
                                <div className="events__sidebar-shape">
                                    <img className="events-sidebar-img-2" src="/assets/img/events/event-shape-2.png" alt="img not found"/>
                                    <img className="events-sidebar-img-3" src="/assets/img/events/event-shape-3.png" alt="img not found"/>
                                </div>
                                <div className="events__info">
                                    {/* <div className="events__info-meta mb-25 d-flex align-items-center justify-content-between">
                                        <div className="events__info-price">
                                            <h5>$76.<span>00</span> </h5>
                                            <h5 className="old-price">$142.00</h5>
                                        </div>
                                        <div className="events__info-discount">
                                            <span>68% OFF</span>
                                        </div>
                                    </div> */}
                                    <div className="events__info-content mb-35">
                                        <ul>
                                            <li className="d-flex align-items-center">
                                            <div className="events__info-icon">
                                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                            </div>
                                            <div className="events__info-item">
                                                <h5><span>Date:&nbsp; </span> {data.date}</h5>
                                            </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                            <div className="events__info-icon">
                                                <i className="fas fa-clock"></i> &nbsp;
                                            </div>
                                            <div className="events__info-item">
                                                <h5><span>Time:&nbsp; </span> {data.time}</h5>
                                            </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                            <div className="events__info-icon">
                                                <i className="fas fa-address-card"></i> &nbsp;
                                            </div>
                                            <div className="events__info-item">
                                                <h5><span>Venue:&nbsp; </span> {data.venue}</h5>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="events__join-btn">
                                        <Link href={data.registrationLink} className="e-btn e-btn-7 text-white border-transparent w-100">Enroll<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                </div>
                                <div className="events__sidebar-widget white-bg">
                                <div className="events__sponsor">
                                    <h3 className="events__sponsor-title">Organiser</h3>
                                    {/* <div className="events__sponsor-thumb mb-35">
                                        <img src="/assets/img/events/sponsor-logo.png" alt="img not found"/>
                                    </div> */}
                                    <div className="events__sponsor-info">
                                        <h3>{data.organiser}</h3>
                                        <h4>Contact: <span>{data.contact}</span></h4>
                                        {/* <div className="events__social d-xl-flex align-items-center">
                                            <h4>Share:</h4>
                                            <ul>
                                                <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div> */}

                                        <h3>{data.organiserTwo}</h3>
                                        <h4>Contact: <span>{data.contactTwo}</span></h4>
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

