import React, { Component } from 'react';

class Price extends Component {

    render() {

        return (
            <div className="course__sidebar-widget grey-bg">
                <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Price Filter</h3>
                    <ul>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-all-course"/>
                            <label className="m-check-label" htmlFor="m-all-course">All  (204)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-free"/>
                            <label className="m-check-label" htmlFor="m-free">Free Courses  (36)</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-premium"/>
                            <label className="m-check-label" htmlFor="m-premium">Premium Courses  (184)</label>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Price;