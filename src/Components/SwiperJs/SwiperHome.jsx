import slider1 from '../../assets/slider.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'

import React, { useState } from 'react';
import './SwiperHome.css';

export default function SwiperHome() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className="">
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}