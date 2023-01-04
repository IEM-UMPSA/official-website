import React, { Component } from 'react';
import Link from 'next/link';

class LatestComments extends Component {

    render() {

        return (
            <div className="latest-comments mb-95">
                <h3>3 Comments</h3>
                <ul>
                    <li>
                        <div className="comments-box grey-bg">
                            <div className="comments-info d-flex">
                                <div className="comments-avatar mr-20">
                                    <img src="assets/img/blog/comments/comment-1.jpg" alt="img not found"/>
                                </div>
                                <div className="avatar-name">
                                    <h5>Eleanor Fant</h5>
                                    <span className="post-meta"> July 14, 2022</span>
                                </div>
                            </div>
                            <div className="comments-text ml-65">
                            <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                            <div className="comments-replay">
                                <a href="#">Reply</a>
                            </div>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="comments-box grey-bg">
                            <div className="comments-info d-flex">
                                <div className="comments-avatar mr-20">
                                    <img src="assets/img/blog/comments/comment-1.jpg" alt="img not found"/>
                                </div>
                                <div className="avatar-name">
                                    <h5>Dominic</h5>
                                    <span className="post-meta">April 16, 2022 </span>
                                </div>
                            </div>
                            <div className="comments-text ml-65">
                            <p>David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                            <div className="comments-replay">
                                <a href="#">Reply</a>
                            </div>
                            </div>
                        </div>
                        <ul>
                            <li className="children-2">
                                <div className="comments-box grey-bg">
                                    <div className="comments-info d-flex">
                                            <div className="comments-avatar mr-20">
                                                <img src="assets/img/blog/comments/comment-3.jpg" alt="img not found"/>
                                            </div>
                                            <div className="avatar-name">
                                                <h5>Von Rails</h5>
                                                <span className="post-meta">April 18, 2022 </span>
                                            </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                        <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                                        <div className="comments-replay">
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LatestComments;