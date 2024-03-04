import React from 'react'
import './Footer.css'
import { NAV_DATA } from '../Navbar/NAV_DATA'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer>
                <div className="section1">
                    <h4 className="contact">CONTACT US NOW: <div> (832) 863-1819</div>
                    </h4>
                    <button className>Get A Quote</button>
                </div>
                <div className="section2 row gx-4">
                    <div className="left col-12 col-md-4">
                        <h5>CTB Construction</h5>
                        <p>Chap The Builder is a turnkey construction company with 20 years of experience. They specialize in
                            multi-million dollar ground-up projects, including luxury residential, commercial, and gas station
                            construction. With their skilled team and attention to detail, Chap The Builder delivers exceptional
                            results and prioritizes client satisfaction.</p>
                    </div>
                    <div className="mid col-12 col-md-2">
                        <p>Menu</p>
                        <ul>
                            {
                                NAV_DATA.map(({ navPath, navTitle, index }) => (
                                    <NavLink to={navPath} key={index}><li>{navTitle}</li></NavLink>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="right col-12 col-md-3">
                        <p>Contact</p>
                        <ul>
                            <li><a href><FaPhoneAlt />(832) 863-1819</a></li>
                            <li><a href><FaClock />Mon - Fri 09:00am - 06:00pm</a></li>
                            <li><a href><FaLocationDot />9217 Summerbell Lane, Houston, Texas, 77407</a></li>
                        </ul>
                    </div>
                    <div className="right col-12 col-md-2 col-xxl-1">
                        <p>Information</p>
                        <ul>
                            <li><a href>Privacy Policy</a></li>
                            <li><a href>Terms Of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="section3">
                    <p>© 2024 Chapthebuilder. All Rights Reserved. Designed and Developed by Mean3 Pvt Ltd.</p>
                </div>
            </footer>
        </>
    )
}
