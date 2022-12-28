import React, { Component } from 'react';
import Link from 'next/link';

class RelatedCourse extends Component {

    render() {

        return (
            <div className="course__sidebar-widget grey-bg">
                <div className="course__sidebar-course">
                    <h3 className="course__sidebar-title">Related courses</h3>
                    <ul>
                        <li>
                        <div className="course__sm d-flex align-items-center mb-30">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-details"><a><img src="assets/img/course/sm/course-sm-1.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-details"><a>Development</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>$54.00</span>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="course__sm d-flex align-items-center mb-30">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-details"><a><img src="assets/img/course/sm/course-sm-2.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-details"><a>Data Science</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>$72.00</span>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="course__sm d-flex align-items-center mb-10">
                            <div className="course__sm-thumb mr-20">
                                <Link href="/course-details"><a><img src="assets/img/course/sm/course-sm-3.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="course__sm-content">
                                <div className="course__sm-rating">
                                    <ul>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                        <li><a href="#"> <i className="fas fa-star"></i> </a></li>
                                    </ul>
                                </div>
                                <h5><Link href="/course-details"><a>UX Design</a></Link></h5>
                                <div className="course__sm-price">
                                    <span>Free</span>
                                </div>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RelatedCourse;