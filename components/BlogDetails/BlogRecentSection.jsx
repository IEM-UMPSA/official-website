import React, { Component } from 'react';
import Link from 'next/link';

const BlogRecent = ({
    tag,
    title,
    authorImage,
    image,
    author,
    date
  }) => {

        return (
            <div className="blog__recent">
                <div className="section__title-wrapper mb-20">
                    <h2 className="section__title">Related <span className="yellow-bg-sm">Post <img src="/assets/img/shape/yellow-bg-4.png" alt="img not found"/>  </span></h2>
                    <p>Recent blog posts by {author}.</p>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="blog__item white-bg mb-30 transition-3 fix">
                            <div className="blog__thumb w-img fix">
                                <Link href="/blog-details"><img src={image} alt="img not found"/></Link>
                            </div>
                            <div className="blog__content">
                            <div className="blog__tag">
                                <Link href="/blog-details">{tag}</Link>
                            </div>
                            <h3 className="blog__title"><Link href="/blog-details">{title}</Link></h3>
                            <div className="blog__meta d-flex align-items-center justify-content-between">
                                <div className="blog__author d-flex align-items-center">
                                    <div className="blog__author-thumb rounded-full mr-8">
                                        <img src={authorImage}  className=" h-12 object-cover rounded-full" alt="img not found"/>
                                    </div>
                                    <div className="blog__author-info">
                                        <h5>{author}</h5>
                                    </div>
                                </div>
                                <div className="blog__date d-flex align-items-center">
                                    <i className="fas fa-clock"></i>
                                    <span>{date}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        );
    }


export default BlogRecent;