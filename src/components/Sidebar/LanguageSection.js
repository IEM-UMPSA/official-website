import React, { Component } from 'react';

class Language extends Component {

    render() {

        return (
            <div className="course__sidebar-widget grey-bg">
                <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Language</h3>
                    <ul>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-all"/>
                            <label className="m-check-label" htmlFor="m-all">All Language</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-eng-2"/>
                            <label className="m-check-label" htmlFor="m-eng-2">English</label>
                        </div>
                        </li>
                        <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center">
                            <input className="m-check-input" type="checkbox" id="m-russ"/>
                            <label className="m-check-label" htmlFor="m-russ">Russian</label>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Language;