import React from 'react'
import './NewRoom.css'
import new1 from '../../assets/NewRoom/news1.jpg'
// import new3 from '../../assets/NewRoom/news3.jpg'
import new2 from '../../assets/Home/pg4img2.png'
import new3 from '../../assets/Home/pg4img2.png'
// import new2 from '../../assets/NewRoom/news2.jpg'

export default function NewRoom() {
  return (
    <>
      <div className="newRoom">
        <div className="page1">
          <div className="hero">
            <h1>NEWS ROOM</h1>
          </div>
        </div>
        <div className="page2">
          <div className="Newsroom">
            <div className="Newsroom_head">
              <h4>News Room</h4>
              <p>At its core, our newsroom focuses on
                accuracy and speed.</p>
            </div>
            <div className="imgbox_container">
              <div className="imgbox">
                <img src={new1} />
                <div className="content">
                  <p className="meta">March 28, 2023</p>
                  <div className="titlebox">
                    <a href className="title">
                      <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgbox">
                <img src={new2} />
                <div className="content">
                  <p className="meta">March 28, 2023</p>
                  <div className="titlebox">
                    <a href className="title">
                      <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="imgbox">
                <img src={new3} />
                <div className="content">
                  <p className="meta">March 28, 2023</p>
                  <div className="titlebox">
                    <a href className="title">
                      <p>10 Things You Need to Know Before Starting Your Construction and Development Project</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
