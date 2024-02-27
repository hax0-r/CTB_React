import React from 'react'
import Slider from "react-slick";
import './AboutSection.css'
import grid1 from '../../../assets/About/grid1.jpg'
import grid2 from '../../../assets/About/grid2.jpg'
import grid3 from '../../../assets/About/grid3.jpg'
import grid4 from '../../../assets/About/grid4.jpg'
import grid5 from '../../../assets/About/grid5.jpg'
import grid6 from '../../../assets/About/grid6.jpg'

export default function AboutSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img className="col" src={grid1} />
                    </div>
                    <div>
                        <img className="col" src={grid2} />
                    </div>
                    <div>
                        <img className="col" src={grid3} />
                    </div>
                    <div>
                        <img className="col" src={grid4} />
                    </div>
                    <div>
                        <img className="col" src={grid5} />
                    </div>
                    <div>
                        <img className="col" src={grid6} />
                    </div>
                </Slider>
            </div>
        </>
    )
}
