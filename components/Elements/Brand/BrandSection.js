import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import partnerData from '../../../data/partnerData';

class Brand extends Component {

    render() {

        return (
            <section className="brand__area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="brand__content text-center">
                                <h3 className="brand__title">Our Partners</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="brand__slider swiper-container">
                                <div className="swiper-wrapper text-center">
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={2}
                                        autoplaydisableoninteraction={"false"}
                                        loop={true}
                                        breakpoints={{
                                            450: {
                                                slidesPerView: 3
                                            },
                                            768: {
                                                slidesPerView: 4
                                            },
                                            1200: {
                                                slidesPerView: 6,
                                            }
                                        }}
                                    >
                                        { partnerData.map(item => (
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="brand__item">
                                                    <img width="120px" height="100px" src={item.img} alt="img not found" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        ))}
                                  
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="brand__more text-center">
                                <Link href="/about" className="link-btn">View all partners<i className="fas fa-arrow-right"></i>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Brand;