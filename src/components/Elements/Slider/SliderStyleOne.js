import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";  
import Link from 'next/link';

// import required modules
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        effect={"fade"}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-4.jpg'})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                            <div className="slider__content">
                                <span>Learn & Achieve</span>
                                <h3 className="slider__title">Find the right Online <span className="yellow-bg">tutor <img src="assets/img/shape/yellow-bg.png" alt="img not found"/> </span> for you.</h3>
                                <p>Meet university,and cultural institutions, who'll share their experience.</p>
                                <Link href="/about"><a className="e-btn slider__btn">Ready to get Started?</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-1.jpg'})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                            <div className="slider__content">
                                <span>Learn & Achieve</span>
                                <h3 className="slider__title">Fundamentals of music <span className="yellow-bg">theory <img src="assets/img/shape/yellow-bg.png" alt="img not found"/> </span> Learn</h3>
                                <p>Meet university,and cultural institutions, who'll share their experience.</p>
                                <Link href="/about"><a className="e-btn slider__btn">Ready to get Started?</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-2.jpg'})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                            <div className="slider__content">
                                <span>Learn & Achieve</span>
                                <h3 className="slider__title">Become a product  <span className="yellow-bg">Manager <img src="assets/img/shape/yellow-bg.png" alt="img not found"/> </span> & learn.</h3>
                                <p>Meet university,and cultural institutions, who'll share their experience.</p>
                                <Link href="/about"><a className="e-btn slider__btn">Ready to get Started?</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="single-slider swiper-slide slider__height slider__overlay d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/slider/slider-3.jpg'})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                            <div className="slider__content">
                                <span>Learn & Achieve</span>
                                <h3 className="slider__title">Launch your <span className="yellow-bg">online <img src="assets/img/shape/yellow-bg.png" alt="img not found"/> </span> learning Platform.</h3>
                                <p>Meet university,and cultural institutions, who'll share their experience.</p>
                                <Link href="/about"><a className="e-btn slider__btn">Ready to get Started?</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <div className="slider__nav-item swiper-slide orange-bg" style={{ backgroundImage:`url(${'assets/img/slider/nav/slider-nav-4.jpg'})`}}>
                <div className="slider__nav-content">
                    <span>6 Courses</span>
                    <h4>Programming Languages</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider__nav-item swiper-slide blue-bg" style={{ backgroundImage:`url(${'assets/img/slider/nav/slider-nav-1.jpg'})`}}>
                <div className="slider__nav-content">
                    <span>4 Courses</span>
                    <h4>Idea Discussion</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider__nav-item swiper-slide pink-bg" style={{ backgroundImage:`url(${'assets/img/slider/nav/slider-nav-2.jpg'})`}}>
                <div className="slider__nav-content">
                    <span>8 Courses</span>
                    <h4>Web Development</h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider__nav-item swiper-slide green-bg" style={{ backgroundImage:`url(${'assets/img/slider/nav/slider-nav-3.jpg'})`}}>
                <div className="slider__nav-content">
                    <span>8 Courses</span>
                    <h4>System Administration</h4>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
