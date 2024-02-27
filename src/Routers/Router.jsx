import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/AboutUs/About'
import NewRoom from '../Pages/NewRoom/NewRoom'
import Projects from '../Pages/Projects/Projects'
import ContactUs from '../Pages/ContactUs/ContactUs'
import ResidentialProject from '../Pages/ResidentialProject/ResidentialProject'
import ShoppingProject from '../Pages/ShoppingProject/ShoppingProject'
import GasStation from '../Pages/GasStation/GasStation'
import CompletedProject from '../Pages/CompletedProject/CompletedProject'
import { NAV_DATA, NAV_DROPDOWN } from '../Components/Navbar/NAV_DATA'
import Pg404 from '../Pages/404/Pg404'

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={NAV_DATA[0].navPath} element={<Home />} />
        <Route path={NAV_DATA[1].navPath} element={<About />} />
        <Route path={NAV_DATA[2].navPath} element={<NewRoom />} />
        <Route path="/project" element={<Projects />} />
        <Route path={NAV_DROPDOWN[0].navPath} element={<ResidentialProject />} />
        <Route path={NAV_DROPDOWN[1].navPath} element={<ShoppingProject />} />
        <Route path={NAV_DROPDOWN[2].navPath} element={<GasStation />} />
        <Route path={NAV_DROPDOWN[3].navPath} element={<CompletedProject />} />
        <Route path={NAV_DATA[3].navPath} element={<ContactUs />} />
        <Route path='*' element={<Pg404/>}/>
      </Routes>
    </>
  )
}

