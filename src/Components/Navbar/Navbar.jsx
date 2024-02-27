import React from 'react'
import { useRef } from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { NAV_DATA, NAV_DROPDOWN } from './NAV_DATA';





export default function Navbar() {
    let mobile = useRef()
    let mobileClick = useRef()
    let iconRotate = useRef()

    const showHide = () => {
        mobile.current.classList.toggle("height")
    }
    const showHideDrop = () => {
        mobileClick.current.classList.toggle("heightdrop")
        mobile.current.classList.toggle("heightMax")
        iconRotate.current.classList.toggle("icon")
    }

    return (
        <>
            <nav>
                <div className="main">
                    <button className='bar' onClick={showHide} ><FaBars /></button>
                    <div className="left">
                        <Link to={NAV_DATA[0].navPath}>
                            <img src={logo} alt="" />
                        </Link>
                        <ul>
                            {
                                NAV_DATA.map(({ navTitle, navPath }) => (
                                    <NavLink to={navPath}> <li>{navTitle}</li></NavLink>
                                ))
                            }
                            <div className='hover'>
                                <NavLink to='/project'><li>Project <IoMdArrowDropdown /></li></NavLink>
                                <ul>
                                    {
                                        NAV_DROPDOWN.map(({ navTitle, navPath, index }) => (
                                            <Link to={navPath} key={index}><li>{navTitle}</li></Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <button className='pho'><FaPhoneAlt /></button>
                    <div className="right">
                        <IoSearch />
                        <button><FaPhoneAlt />(832)863-1819</button>
                    </div>
                </div>
                <div className="mobile" ref={mobile}>
                    <div className="drop">
                        <ul>
                            {
                                NAV_DATA.map(({ navPath, navTitle, index }) => (
                                    <NavLink to={navPath} key={index}><li>{navTitle}</li></NavLink>
                                ))
                            }
                            <div >
                                <li>Project <button onClick={showHideDrop} ref={iconRotate}><IoMdArrowDropdown /></button></li>
                                <ul ref={mobileClick}>
                                    {
                                        NAV_DROPDOWN.map(({ navPath, navTitle, index }) => (
                                            <NavLink to={navPath} key={index}><li>{navTitle}</li></NavLink>
                                        ))
                                    }
                                    <NavLink onClick={showHide} to="/" ><li>home</li></NavLink>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
