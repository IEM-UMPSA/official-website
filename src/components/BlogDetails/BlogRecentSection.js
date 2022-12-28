import React, { Component } from 'react';
import Link from 'next/link';

class BlogRecent extends Component {

    render() {

        return (
            <div className="blog__recent mb-65">
                <div className="section__title-wrapper mb-40">
                    <h2 className="section__title">Related <span className="yellow-bg-sm">Post <img src="assets/img/shape/yellow-bg-4.png" alt="img not found"/>  </span></h2>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="blog__item white-bg mb-30 transition-3 fix">
                            <div className="blog__thumb w-img fix">
                                <Link href="/blog-details"><a><img src="assets/img/blog/blog-1.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="blog__content">
                            <div className="blog__tag">
                                <Link href="/blog-details"><a>Art & Design</a></Link>
                            </div>
                            <h3 className="blog__title"><Link href="/blog-details"><a>The Challenge Of Global Learning In Public Education</a></Link></h3>
                            <div className="blog__meta d-flex align-items-center justify-content-between">
                                <div className="blog__author d-flex align-items-center">
                                    <div className="blog__author-thumb mr-10">
                                        <img src="assets/img/blog/author/author-1.jpg" alt="img not found"/>
                                    </div>
                                    <div className="blog__author-info">
                                        <h5>Jim Séchen</h5>
                                    </div>
                                </div>
                                <div className="blog__date d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <span>April 02, 2022</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="blog__item white-bg mb-30 transition-3 fix">
                            <div className="blog__thumb w-img fix">
                                    <Link href="/blog-details"><a><img src="assets/img/blog/blog-2.jpg" alt="img not found"/></a></Link>
                            </div>
                            <div className="blog__content">
                                <div className="blog__tag">
                                    <Link href="/blog-details"><a className="purple">Marketing</a></Link>
                                </div>
                                <h3 className="blog__title"><Link href="/blog-details"><a>Exactly How Technology Can Make Reading Better</a></Link></h3>
        
                                <div className="blog__meta d-flex align-items-center justify-content-between">
                                    <div className="blog__author d-flex align-items-center">
                                        <div className="blog__author-thumb mr-10">
                                            <img src="assets/img/blog/author/author-2.jpg" alt="img not found"/>
                                        </div>
                                        <div className="blog__author-info">
                                            <h5>Barry Tone</h5>
                                        </div>
                                    </div>
                                    <div className="blog__date d-flex align-items-center">
                                        <i className="fas fa-clock"></i>
                                        <span>July 02, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogRecent;