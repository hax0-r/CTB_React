import React from 'react'
import './ResidentialProject.css'
import SlickSlider from '../../Components/SlickSlider/MainSlider/SlickSlider'

export default function ResidentialProject() {
  return (
    <>
      <div className="ResidentialProject">
        <div className="page1">
          <div class="hero">
            <h1 class="">Projects</h1>
          </div>
        </div>
        <div className="page2">
          <SlickSlider/>
        </div>
      </div>
    </>
  )
}
