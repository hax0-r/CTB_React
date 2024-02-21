import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { AiFillDownSquare } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";



export default function Navbar() {
    return (
        <>
            <header>
                <nav className="mainnav">
                    <div className="left">
                        <button id="res_menubtn" onclick="toggleMenu()" className="res_menubtn"><i className="fa fa-bars" aria-hidden="true" /></button>
                        <div className="logo">
                            <a href="/Home.html">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <button className="res_phone"><i className="fa-solid fa-phone" aria-hidden="true" /></button>
                        <ul>
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/about" >About Us</NavLink></li>
                            <li><NavLink to="/newroom" >News Room</NavLink></li>
                            <div className="dropdown">
                                <NavLink className="drop" to="/project">
                                    <button className="dropbtn">Projects <IoMdArrowDropdown /></button>
                                </NavLink>
                                <div className="dropdown-content">
                                    <NavLink to="/residential">Residential Projects</NavLink>
                                    <NavLink to="/shopping">Shopping Complex</NavLink>
                                    <NavLink to="/gasstation">Gas Stations</NavLink>
                                    <NavLink to="/completed">Completed Projects</NavLink>
                                </div>
                            </div>
                            <li><NavLink to="contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="right">
                        <button onclick="openSearch()"><IoSearch /></button>
                        <button className="phoneno"><FaPhoneAlt /> (832) 863-1819</button>
                    </div>
                    <div id="res_menu" className="res_menu">
                        <ul>
                            <li><a href="/Home.html">Home</a></li>
                            <li><a href="/About.html">About Us</a></li>
                            <li><a href="/NewsRoom.html">News Room</a></li>
                            <div className="res_dropdown">
                                <a className="res_dropdownbtn" href="/Projects.html"><button>
                                    Projects
                                </button></a>
                                <button onclick="toggleResMenu()" className="menubtn">
                                    <i className="fa fa-caret-down fa-sm" aria-hidden="true" />
                                </button>
                            </div>
                            <ul id="res_dropdown" className="res_dropdownmenu">
                                <li><a href="/Residential.html">Residential Projects</a></li>
                                <li><a href="/Shopping.html">Shopping Complex</a></li>
                                <li><a href="/GasStations.html">Gas Stations</a></li>
                                <li><a href="/CompletedProjects.html">Completed Projects</a></li>
                            </ul>
                            <li><a href="/Contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
