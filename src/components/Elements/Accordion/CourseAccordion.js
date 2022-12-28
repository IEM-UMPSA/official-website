import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CourseAccordion = () => {

    return(
        <div className="course__curriculum">
            <Accordion className="accodion-style--1" preExpanded={'0'}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h2 className="accordion-header" id="week-01">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-01-content" aria-expanded="true" aria-controls="week-01-content">
                                    Week 01
                                </button>
                            </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                    <div className="course__curriculum-info">
                        <svg className="document" viewBox="0 0 24 24">
                            <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                            <polyline className="st0" points="14,2 14,8 20,8 "/>
                            <line className="st0" x1="16" y1="13" x2="8" y2="13"/>
                            <line className="st0" x1="16" y1="17" x2="8" y2="17"/>
                            <polyline className="st0" points="10,9 9,9 8,9 "/>
                        </svg>
                        <h3> <span>Reading:</span> Ut enim ad minim veniam</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 14 minutes</span>
                        <span className="question">2 questions</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg viewBox="0 0 24 24">
                            <polygon className="st0" points="23,7 16,12 23,17 "/>
                            <path className="st0" d="M3,5h11c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7C1,5.9,1.9,5,3,5z"/>
                            </svg>
                        <h3> <span>Video: </span> Greetings and introduction</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 15 minutes</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg viewBox="0 0 16 16">
                            
                            <path className="st0" d="M2,12V8c0-3.3,2.9-6,6.4-6s6.4,2.7,6.4,6v4"/>
                            <path className="st0" d="M14.8,12.7c0,0.7-0.6,1.3-1.4,1.3h-0.7c-0.8,0-1.4-0.6-1.4-1.3v-2c0-0.7,0.6-1.3,1.4-1.3h2.1V12.7z M2,12.7  C2,13.4,2.6,14,3.3,14H4c0.7,0,1.3-0.6,1.3-1.3v-2c0-0.7-0.6-1.3-1.3-1.3H2V12.7z"/>
                            </svg>
                        <h3> <span>Audio:</span> Interactive lesson</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 7 minutes</span>
                        <span className="question">3 questions</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg className="document" viewBox="0 0 24 24">
                            <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                            <polyline className="st0" points="14,2 14,8 20,8 "/>
                            <line className="st0" x1="16" y1="13" x2="8" y2="13"/>
                            <line className="st0" x1="16" y1="17" x2="8" y2="17"/>
                            <polyline className="st0" points="10,9 9,9 8,9 "/>
                        </svg>
                        <h3> <span>Reading: </span> Ut enim ad minim veniam</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 22 minutes</span>
                        </div>
                    </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <h2 className="accordion-header" id="week-02">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#week-02-content" aria-expanded="true" aria-controls="week-02-content">
                                Week 02
                            </button>
                        </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg className="document" viewBox="0 0 24 24">
                            <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                            <polyline className="st0" points="14,2 14,8 20,8 "/>
                            <line className="st0" x1="16" y1="13" x2="8" y2="13"/>
                            <line className="st0" x1="16" y1="17" x2="8" y2="17"/>
                            <polyline className="st0" points="10,9 9,9 8,9 "/>
                        </svg>
                        <h3> <span>Reading:</span> Ut enim ad minim veniam</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 14 minutes</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg viewBox="0 0 24 24">
                            <polygon className="st0" points="23,7 16,12 23,17 "/>
                            <path className="st0" d="M3,5h11c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V7C1,5.9,1.9,5,3,5z"/>
                            </svg>
                        <h3> <span>Video: </span> Greetings and introduction</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 15 minutes</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg viewBox="0 0 16 16">
                            <path className="st0" d="M2,12V8c0-3.3,2.9-6,6.4-6s6.4,2.7,6.4,6v4"/>
                            <path className="st0" d="M14.8,12.7c0,0.7-0.6,1.3-1.4,1.3h-0.7c-0.8,0-1.4-0.6-1.4-1.3v-2c0-0.7,0.6-1.3,1.4-1.3h2.1V12.7z M2,12.7  C2,13.4,2.6,14,3.3,14H4c0.7,0,1.3-0.6,1.3-1.3v-2c0-0.7-0.6-1.3-1.3-1.3H2V12.7z"/>
                            </svg>
                        <h3> <span>Audio:</span> Interactive lesson</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 7 minutes</span>
                        <span className="question">2 questions</span>
                        </div>
                    </div>
                    <div className="course__curriculum-content d-sm-flex justify-content-between align-items-center">
                        <div className="course__curriculum-info">
                        <svg className="document" viewBox="0 0 24 24">
                            <path className="st0" d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z"/>
                            <polyline className="st0" points="14,2 14,8 20,8 "/>
                            <line className="st0" x1="16" y1="13" x2="8" y2="13"/>
                            <line className="st0" x1="16" y1="17" x2="8" y2="17"/>
                            <polyline className="st0" points="10,9 9,9 8,9 "/>
                        </svg>
                        <h3> <span>Reading: </span> Ut enim ad minim veniam</h3>
                        </div>
                        <div className="course__curriculum-meta">
                        <span className="time"> <i className="fas fa-clock"></i> 22 minutes</span>
                        </div>
                    </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CourseAccordion;





