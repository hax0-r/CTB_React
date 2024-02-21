import React from 'react'
import './Projects.css'
import img1 from '../../assets/Projects/img1.jpg'
import img2 from '../../assets/Projects/img2.jpg'
import img3 from '../../assets/Projects/img3.jpg'

export default function Projects() {
  return (
    <>
      <div className="project">
        <div className="page1">
          <div className="hero">
            <h1>Projects</h1>
          </div>
        </div>
        <div className="page2">
          <div>
            <div className="text">
              <h2>
                Our Projects
              </h2>
              <p>
                CTB is proud of its diverse portfolio of exceptional constructions, reflecting expertise and commitment to
                excellence. Achievements include a Houston retail center at 17627 Beechnut Street and a luxury home on
                Horseshoe Drive in Sugar Land. As the development partner for Now and Forever, over 24 convenience stores
                were built in Houston. An upcoming 700-acre project in Sealy features the world's largest truck stop, a
                luxury residential community, indoor water park, and more. The Beechnut Apartments project in Houston also
                showcases modern urban living. Stay tuned for more remarkable projects from Chap The Builder, dedicated to
                exceeding expectations.
              </p>
            </div>
            <div className="allprojects">
              <div className="project">
                <img src={img1} />
                <p>Shopping Complex</p>
              </div>
              <div className="project">
                <img src={img2} />
                <p>Residential Projects</p>
              </div>
              <div className="project">
                <img src={img3}/>
                <p>Gas Stations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
