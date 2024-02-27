import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'

import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './SwiperHome.css';

export default function SwiperHome() {
    return (
        <>
            <div className="swiperHomes">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        // delay: 2500,
                        delay: 99999500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="innerSectionHome">
                            <img src={slider1} alt="" />
                            <h1>LET’S BUILD A BETTER <br /> <span>COMMUNITY, TOGETHER</span></h1>
                            <p>Let us handle your construction so you can focus on growing your business</p>
                            <button>Get A Quote</button>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="innerSectionHome">
                            <img src={slider1} alt="" />
                            <h1>LET’S BUILD A BETTER <br /> <span>COMMUNITY, TOGETHER</span></h1>
                            <p>Let us handle your construction so you can focus on growing your business</p>
                            <button>Get A Quote</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="innerSectionHome">
                            <img src={slider1} alt="" />
                            <h1>LET’S BUILD A BETTER <br /> <span>COMMUNITY, TOGETHER</span></h1>
                            <p>Let us handle your construction so you can focus on growing your business</p>
                            <button>Get A Quote</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}