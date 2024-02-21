import React from 'react'
import './About.css'
import pg2Big from '../../assets/About/pg2Big.jpg'
import pg2Small from '../../assets/About/pg2Small.jpg'
import grid1 from '../../assets/About/grid1.jpg'
import grid2 from '../../assets/About/grid2.jpg'
import grid3 from '../../assets/About/grid3.jpg'
import grid4 from '../../assets/About/grid4.jpg'
import grid5 from '../../assets/About/grid5.jpg'
import grid6 from '../../assets/About/grid6.jpg'
import pg4img1 from '../../assets/About/pg4img1.jpg'
import pg4img2 from '../../assets/About/pg4img2.jpg'

export default function About() {
  return (
    <>
      <div className="about">
        <div className="page1">
          <div className="hero">
            <h1 className>About Us</h1>
          </div>
        </div>
        <div className="page2">
          <div className="section1About">
            <div className="section1_left">
              <h2>CTB Construction</h2>
              <p>Chap The Builder is a highly experienced turnkey construction company with over 20 years of collective
                industry expertise. We specialize in multi-million dollar ground-up construction and development
                projects, catering to clients with discerning requirements. With a skilled team comprising architects,
                engineers, and project managers, Chap The Builder consistently delivers exceptional results.
                <br /><br />
                In summary, Chap The Builder is a turnkey construction company with a proven track record in
                multi-million dollar projects. With our extensive experience in residential, commercial, and gas station
                construction, we consistently deliver high-quality results, earning the trust and satisfaction of our
                clients.
              </p>
            </div>
            <div className="section1_right">
              <img className="img1" src={pg2Big} />
              <img className="img2" src={pg2Small} />
            </div>
          </div>
        </div>
        <div className="page3">
          <div className="section2">
            <div className="section2_top">
              <h2>Our Portfolio</h2>
              <p>Our portfolio showcases our proficiency in constructing luxury single-family homes, multi-family
                apartment complexes, commercial spaces such as restaurants and retail centers, and gas stations with
                convenience stores and state-of-the-art pump systems. From architectural design to interior finishes,
                Our team pays meticulous attention to detail, creating exquisite living spaces and functional commercial
                environments while prioritizing budget limitations.</p>
            </div>
            {/* <div class="section2_bottom">
            <div class="row UPPER">
                <img class="col-4" src="/assets/Rectangle-10.png">
                <img class="col-4" src="/assets/Rectangle-10.png">
                <img class="col-4" src="/assets/Rectangle-10.png">
            </div>
            <div class="row LOWER">
                <img class="col-4" src="/assets/Rectangle-10.png">
                <img class="col-4" src="/assets/Rectangle-10.png">
                <img class="col-4" src="/assets/Rectangle-10.png">
            </div>

        </div>
         */}
            <div className="section2_bottom">
              <div className="row gy-2 gx-2 grid">
                <img className="col" src={grid1} />
                <img className="col" src={grid2} />
                <img className="col" src={grid3} />
              </div>
              <div className="row gy-2 gx-2 grid">
                <img className="col" src={grid4} />
                <img className="col" src={grid5} />
                <img className="col" src={grid6} />
              </div>
            </div>
            <div className="resslider">
              <div className="multiple-items">
                <div><img src="/assets/grid1.jpg" /></div>
                <div><img src="/assets/grid2.jpg" /></div>
                <div><img src="/assets/grid3.jpg" /></div>
                <div><img src="/assets/grid4.jpg" /></div>
                <div><img src="/assets/grid5.jpg" /></div>
                <div><img src="/assets/grid6.jpg" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="page4">
          <div className="section3">
            <div className="section3_top">
              <div className="image">
                <img src={pg4img2} />
              </div>
              <div className="content_top">
                <h2>Our Vision</h2>
                <p>Our team’s expertise extends to navigating regulatory requirements and safety standards associated
                  with gas station construction, making us a reliable choice for turnkey gas station projects. Clients
                  trust Chap The Builder for our attention to compliance and seamless operations.</p>
              </div>
            </div>
            <div className="section3_bottom">
              <div className="content_bottom">
                <h2>Our Mission</h2>
                <p>What sets Chap The Builder apart is our commitment to quality construction, clear communication, and
                  customer satisfaction. We value transparency throughout the project lifecycle, ensuring clients are
                  involved in decision-making and well-informed. With a focus on timely delivery and staying within
                  budget, Chap The Builder has built a strong reputation and established long-term partnerships in the
                  industry.
                </p>
              </div>
              <div className="image">
                <img src={pg4img1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
