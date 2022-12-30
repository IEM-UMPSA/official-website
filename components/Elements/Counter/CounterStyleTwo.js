import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import counterData from "../../../data/counterData";

const Counter = () => {
    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }
    return(
        <section className="counter__area pt-145 pb-100 grey-bg-2">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3">
                    <div className="section__title-wrapper text-center mb-20">
                        <h2 className="section__title"><span className="yellow-bg yellow-bg-big">Numbers<img src="assets/img/shape/yellow-bg.png" alt="img not found"/></span>&nbsp;at glance</h2>
                        <p>Over the past few years, our social medias had grown tremendously</p>
                    </div>
                </div>
            </div>
            {counterData &&
            <div className="row">
                {counterData.map( (counter, num) => (
                    <div key={num} className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-3 offset-md-0 col-sm-5 offset-sm-2">
                        <div className="counter__item mb-30">
                            <div className="counter__icon user mb-15">
                            <div dangerouslySetInnerHTML={{__html: counter.countIcon}}></div>
                            </div>
                            <div className="counter__content">
                            <h4 ><span className="counter">
                                <VisibilitySensor  onChange={onVisibilityChange} offset={{top:10}}>
                                    <CountUp end={!isViewCount ? counter.countNum : 0} />
                                 </VisibilitySensor>
                                 </span><span className="plus-icon">+</span></h4>
                            <p>{counter.countTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    </section>
    )
}
export default Counter;