import React, { Component } from 'react';
import Link from 'next/link';

class Categories extends Component {

    render() {

        return (
            <div className="course__sidebar-widget grey-bg">
                <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Categories</h3>
                    <ul>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-eng"/>
                            <label className="m-check-label" htmlFor="m-eng">English  (6)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-edu"/>
                            <label className="m-check-label" htmlFor="m-edu">Education  (8)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-bus"/>
                            <label className="m-check-label" htmlFor="m-bus">Business  (5)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-design"/>
                            <label className="m-check-label" htmlFor="m-design">UX Design  (3)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-math"/>
                            <label className="m-check-label" htmlFor="m-math">Mathematics  (3)</label>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Categories;