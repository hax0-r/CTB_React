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

export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='/newRoom' element={ <NewRoom/> }/>
        <Route path='/project' element={ <Projects/> }/>
        <Route path='/residential' element={ <ResidentialProject/> }/>
        <Route path='/shopping' element={ <ShoppingProject/> }/>
        <Route path='/gasstation' element={ <GasStation/> }/>
        <Route path='/completed' element={ <CompletedProject/> }/>
        <Route path='/contact' element={ <ContactUs/> }/>
    </Routes>
    </>
  )
}
