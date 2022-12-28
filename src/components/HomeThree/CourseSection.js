import React, { Component } from 'react';
import Link from 'next/link';

class Course extends Component {

    render() {

        return (
        <section className="course__area grey-bg pt-115 pb-120">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                     <div className="section__title-wrapper mb-60">
                        <h2 className="section__title">Online<span className="yellow-bg"> Courses <img src="assets/img/shape/yellow-bg-2.png" alt="img not found" /></span> <br /> For anyone, anywhere 
                        </h2>
                        <p>You don't have to struggle alone, you've got our assistance and help.</p>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4">
                     <div className="category__more mb-60 float-md-end fix">
                        <Link href="/course-grid"><a className="link-btn">
                           View All Courses
                           <i className="fas fa-arrow-right"></i>
                           <i className="fas fa-arrow-right"></i>
                        </a></Link>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="course__item course__item-2 white-bg mb-30 transition-3">
                        <div className="course__thumb fix w-img">
                           <Link href="/course-details"><a><img src="assets/img/course/home-3/course-1.jpg" alt="img not found" /></a></Link>
                        </div>
                        <div className="course__content-2">
                           <h3 className="course__title-2"><Link href="/course-details"><a>Product Manager Learn the Skills & job.</a></Link></h3>
                           <p>Top instructors from around the world teach millions of students on Quillow. Get unlimited.</p>
                           <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                              <div className="course__teacher-2 d-flex align-items-center">
                                 <div className="course__teacher-thumb-2 mr-20">
                                    <img src="assets/img/course/teacher/home-3/teacher-1.jpg" alt="img not found" />
                                    <div className="course__teacher-rating">
                                        <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="course__teacher-info">
                                    <h6><Link href="/instructor-details"><a>Jim Séchen</a></Link></h6>
                                    <span>Product Designer</span>
                                 </div>
                              </div>
                              <div className="course__meta">
                                 <div className="course__lesson">
                                    <span><i className="fas fa-book"></i>43 Lesson</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="course__item course__item-2 white-bg mb-30 transition-3">
                        <div className="course__thumb fix w-img">
                           <Link href="/course-details"><a><img src="assets/img/course/home-3/course-2.jpg" alt="img not found" /></a></Link>
                        </div>
                        <div className="course__content-2">
                           <h3 className="course__title-2"><Link href="/course-details"><a>The Importance Of Intrinsic for Students.</a></Link></h3>
                           <p>Top instructors from around the world teach millions of students on Quillow. Get unlimited.</p>
                           <div className="course__bottom d-sm-flex justify-content-between align-items-center">
                              <div className="course__teacher-2 d-flex align-items-center">
                                 <div className="course__teacher-thumb-2 mr-20">
                                    <img src="assets/img/course/teacher/home-3/teacher-2.jpg" alt="img not found" />
                                    <div className="course__teacher-rating">
                                        <i className="fas fa-star"></i>
                                    </div>
                                 </div>
                                 <div className="course__teacher-info">
                                    <h6><Link href="/instructor-details"><a>JCraig Weber</a></Link></h6>
                                    <span>UX Designer</span>
                                 </div>
                              </div>
                              <div className="course__meta">
                                 <div className="course__lesson">
                                    <span><i className="fas fa-book"></i>30 Lesson</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }
}

export default Course;