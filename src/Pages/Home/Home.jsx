import React from 'react'
import slider1 from '../../assets/slider.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import pg2 from '../../assets/Home/pg2.png'
import pg2Mobile from '../../assets/Home/aboutMobile.png'
import pg4 from '../../assets/Home/pg4.png'
import pg4img1 from '../../assets/Home/pg4img1.png'
import pg4img2 from '../../assets/Home/pg4img2.png'
import pg4img3 from '../../assets/Home/pg4img3.png'
import video from '../../assets/Home/homeVideo.mp4'
import { Link } from 'react-router-dom'
import SwiperHome from '../../Components/SwiperJs/SwiperHome'
import SliderHome from '../../Components/HomeSlider/SliderHome'

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="page1">
                    {/* <SwiperHome /> */}



                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slider1} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h1>LET'S BUILD A BETTER</h1>
                                    <h2>COMMUNITY, TOGETHER</h2>
                                    <p>Let us handle your construction so you focus on your business</p>
                                    <div className="ca_btn">
                                        <button>Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h1>LET'S BUILD A BETTER</h1>
                                    <h2>COMMUNITY, TOGETHER</h2>
                                    <p>Let us handle your construction so you focus on your business</p>
                                    <div className="ca_btn">
                                        <button>Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h1>LET'S BUILD A BETTER</h1>
                                    <h2>COMMUNITY, TOGETHER</h2>
                                    <p>Let us handle your construction so you focus on your business</p>
                                    <div className="ca_btn">
                                        <button>Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slider4} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h1>LET'S BUILD A BETTER</h1>
                                    <h2>COMMUNITY, TOGETHER</h2>
                                    <p>Let us handle your construction so you focus on your business</p>
                                    <div className="ca_btn">
                                        <button>Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>




                </div>
                <div className="page2">
                    <div className="tr">
                        <img src={pg2} />
                        <img id='ForMobile' src={pg2Mobile} />
                        <div className="content">
                            <p className="about">About Us</p>
                            <h3>CTB Construction</h3>
                            <p className="text">Chap The Builder, based in Southwest Houston, Texas, is a turnkey construction company with
                                two decades
                                of
                                collective experience in construction. Our specialty is multi-million dollar ground-up projects,
                                encompassing luxury residential, commercial structures, and gas station construction. We stand out by
                                combining quality with affordability. Our services include cutting-edge gas pump installation,
                                facilitated
                                by state-of-the-art equipment. At Chap The Builder, client satisfaction is the cornerstone of our
                                success.
                            </p>
                            <Link>Read More</Link>
                        </div>
                    </div>
                </div>
                {/* <div className="page3">
                    <SliderHome />
                </div> */}
                <div className="page4">
                    <div className="Newsroom">
                        <div className="Newsroom_head">
                            <img src={pg4} />
                            <h4>News Room</h4>
                            <p>At its core, our newsroom focuses on
                                accuracy and speed. </p>
                            <button>View All</button>
                        </div>
                        <div className="imgbox_container">
                            <div className="imgbox">
                                <img src={pg4img1} />
                                <div className="content">
                                    <p className="meta">March 28, 2023</p>
                                    <div className="titlebox">
                                        <a href className="title">
                                            <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="imgbox">
                                <img src={pg4img2} />
                                <div className="content">
                                    <p className="meta">March 28, 2023</p>
                                    <div className="titlebox">
                                        <a href className="title">
                                            <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="imgbox mob_clear">
                                <img src={pg4img3} />
                                <div className="content">
                                    <p className="meta">March 28, 2023</p>
                                    <div className="titlebox">
                                        <a href className="title">
                                            <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page5">
                    <div className="video">
                        <video src={video} autoPlay muted loop className height="100%" width="100%">
                        </video></div>
                </div>
            </div>
        </>
    )
}
