import React, { Component } from 'react';
import Link from 'next/link';

class BlogMeta extends Component {

    render() {

        return (
            <div className="blog__meta-3 d-sm-flex justify-content-between align-items-center mb-80">
                <div className="blog__tag-2">
                    <Link href="/blog-details"><a>Art & Design</a></Link>
                    <Link href="/blog-details"><a>Education</a></Link>
                    <Link href="/blog-details"><a>App</a></Link>
                </div>
                <div className="blog__social d-flex align-items-center">
                    <h4>Share:</h4>
                    <ul>
                        <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BlogMeta;