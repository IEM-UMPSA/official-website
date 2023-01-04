import React, { Component } from 'react';
import Link from 'next/link';

class Tags extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Tags</h3>
                </div>
                <div className="sidebar__widget-content">
                    <div className="sidebar__tag">
                        <Link href="/blog-details">Art & Design</Link>
                        <Link href="/blog-details">Course</Link>
                        <Link href="/blog-details">Videos</Link>
                        <Link href="/blog-details">App</Link>
                        <Link href="/blog-details">Education</Link>
                        <Link href="/blog-details">Data Science</Link>
                        <Link href="/blog-details">Machine Learning</Link>
                        <Link href="/blog-details">Tips</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;