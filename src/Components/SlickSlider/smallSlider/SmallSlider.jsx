import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import img1 from '../../../assets/ResidentialProject/img1.jpg'
import img2 from '../../../assets/ResidentialProject/img2.jpg'
import './SmallSlider.css'

function SmallSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      <div className="slicSlider">

        <div className="slideMain">

          <div className="slider-container">
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
              <div>
                <img src={img1} alt="" className="slideT" />
              </div>
              <div>
                <img src={img2} alt="" className="slideT" />
              </div>
              <div>
                <img src={img1} alt="" className="slideT" />
              </div>
              <div>
                <img src={img2} alt="" className="slideT" />
              </div>
              <div>
                <img src={img1} alt="" className="slideT" />
              </div>
              <div>
                <img src={img2} alt="" className="slideT" />
              </div>
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={slider => (sliderRef2 = slider)}
              slidesToShow={2}
              dots={false}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
              <div>
                <img src={img2} alt="" className="imgH w-100" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>

  );
}

export default SmallSlider;
