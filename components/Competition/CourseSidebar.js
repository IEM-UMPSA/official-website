import React, { Component } from 'react';
import Link from 'next/link';
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

class CourseSidebar extends Component {

    state = {
        open: false
      };
    
      onOpenModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

      onCloseModal = () => {
        this.setState(prevState => ({
          open: !prevState.open
        }));
      };

    render() {

        return (
            <React.Fragment>
                <Modal
                open={this.state.open}
                onClose={this.onCloseModal}
                styles={{
                modal: {
                    maxWidth: "unset",
                    width: "70%",
                    padding: "unset"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                },
                closeButton: {
                    background: "yellow"
                }
                }}
                center
            >
                <ReactPlayer
                url="https://youtu.be/es4x5R-rV9s"
                width="100%"
                height="calc(100vh - 100px)"
                />
            </Modal>
            
            <div className="course__sidebar pl-70 p-relative">
                <div className="course__shape">
                <img className="course-dot" src="/assets/img/course/course-dot.png" alt="img not found"/>
                </div>
                <div className="course__sidebar-widget-2 white-bg mb-20">
                <div className="course__video">
              
                   
                    <div className="course__video-content mb-35">
                        <ul>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon mr-4">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Registration Timeline :</span> March 13th to April 15th, 2023</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon mr-4">
                                <i className="fas fa-money-bill-wave"></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Registration fee :</span>RM 180 per group</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon  mr-4">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="course__video-info">
                                <h5><span>Venue :</span>Universiti Teknologi Malaysia, Johor Bahru</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon mr-4">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="course__video-info">
                                <h5>Participants must register as a group with a minimum of 3 members and a maximum of 5 members per group</h5>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <div className="course__video-icon mr-4">
                                <i className="fas fa-exclamation-triangle"></i> 
                            </div>
                            <div className="course__video-info">
                                <h5>Only the leader of the group should register</h5>
                            </div>
                            </li>
                        </ul>
                    </div>
                  
                    <div className="course__enroll-btn">
                        <Link className="e-btn e-btn-7 w-100" href="https://bit.ly/invencmax3nd_Registration">Enroll <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                </div>
           
            </div>
            </React.Fragment>
        );
    }
}

export default CourseSidebar;