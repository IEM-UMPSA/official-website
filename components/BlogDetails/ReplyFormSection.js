import React, { Component } from 'react';

class ReplyForm extends Component {

    render() {

        return (
            <div className="blog__comment">
                <h3>Write a Review</h3>
                <form action="#">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="blog__comment-input">
                                <input type="text" placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="blog__comment-input">
                                <input type="email" placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="col-xxl-12">
                            <div className="blog__comment-input">
                                <input type="text" placeholder="Website"/>
                            </div>
                        </div>
                        <div className="col-xxl-12">
                            <div className="blog__comment-input">
                                <textarea placeholder="Enter your comment ..."></textarea>
                            </div>
                        </div>
                        <div className="col-xxl-12">
                            <div className="blog__comment-agree d-flex align-items-center mb-20">
                                <input className="e-check-input" type="checkbox" id="e-agree"/>
                                <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                        </div>
                        <div className="col-xxl-12">
                            <div className="blog__comment-btn">
                                <button type="submit" className="e-btn">Post Comment</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ReplyForm;