import React from 'react'
import './GasStation.css'
import SmallSlider from '../../Components/SlickSlider/smallSlider/SmallSlider'

export default function GasStation() {
  return (
    <>
      <div className="shopping">
        <div className="page1">
          <div className="hero">
            <h1 >Projects</h1>
          </div>
        </div>
        <div className="page2">
          <h1>Gas Station</h1>
          <div className="main">
            <div className="slider">
              <SmallSlider />
              <h1>Shopping Complex on Bissonnet Street</h1>
              <p>13646 Bissonnet St Houston, Texas 77083</p>
            </div>
            <div className="slider">
              <SmallSlider />
              <h1>Shopping Complex on Alief Clodine</h1>
              <p>13629 Alief Clodine Rd Houston, Texas 77082</p>
            </div>
            <div className="slider">
              <SmallSlider />
              <h1>Shopping Complex on Beechnut Street</h1>
              <p>17627 Beechnut St Houston, TX 77083</p>
            </div>
            <div className="slider">
              <SmallSlider />
              <h1>Shopping Complex On Synott Rd</h1>
              <p>10571 Synott Rd Houston, TX 77099</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
