import React, { Component } from 'react';
import Link from 'next/link';

class Category extends Component {

    render() {

        return (
            <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                    <h3 className="sidebar__widget-title">Category</h3>
                </div>
                <div className="sidebar__widget-content">
                    <div className="sidebar__category">
                        <ul>
                            <li><Link href="/blog">Category</Link></li>
                            <li><Link href="/blog">Video & Tips  (4)</Link></li>
                            <li><Link href="/blog">Education  (8)</Link></li>
                            <li><Link href="/blog">Business  (5)</Link></li>
                            <li><Link href="/blog">UX Design  (3)</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;