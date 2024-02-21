import React from 'react'
import './ShoppingProject.css'
import SmallSlider from '../../Components/SlickSlider/smallSlider/SmallSlider'

export default function ShoppingProject() {
  return (
    <>
      <div className="shopping">
        <div className="page1">
          <div className="hero">
            <h1 >Projects</h1>
          </div>
        </div>
        <div className="page2">
          <div className="main">
            <div className="slider1">
              <SmallSlider />
            </div>
            <div className="slider2">
              <SmallSlider />
            </div>
            <div className="slider3">
              <SmallSlider />
            </div>
            <div className="slider4">
              <SmallSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
