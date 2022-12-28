import React, { Component } from 'react';
import Link from 'next/link';

const ArticleLayout = ({ post }) => {

  return (
        <div className="blog__wrapper">
            <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                    <Link href={post.url}>
                        <img src={'/'+ post.image} alt="blog image" />
                    </Link>
                </div>
                <div className="blog__content">
                <div className="blog__tag">
                    <Link href={post.url}>
                        {post.tag}
                    </Link>
                </div>
                <h3 className="blog__title">
                    <Link href={post.url}>
                        {post.title}
                    </Link>
                </h3>

                <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                        <div className="blog__author-thumb mr-10">
                            <img src={'/'+ post.authorImage} alt="blog image" />
                        </div>
                        <div className="blog__author-info">
                            <h5>{post.authorTitle}</h5>
                        </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                        <i className="fas fa-clock"></i>
                        <span>{post.date}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
  );
}

export default ArticleLayout;