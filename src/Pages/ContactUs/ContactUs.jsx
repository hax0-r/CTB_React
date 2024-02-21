import React from 'react'
import './ContactUS.css'
import pg2 from '../../assets/Contact/pg2.jpg'

export default function ContactUs() {
  return (
    <>
      <div className="contact">
        <div className="page1">
          <div className="hero">
            <h1 className>Contact Us</h1>
          </div>
        </div>
        <div className="rightOrange">
        </div>
        <div className="page2">
          <div className="contact">
            <div className="contact_form">
              <h2>Get In Touch</h2>
              <p>Feel free to get in touch with us</p>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="number" placeholder="Phone number*" required />
              <textarea type="text" placeholder="Comment Or Message*" rows={6} required draggable="false" defaultValue={""} />
              <button>Send</button>
            </div>
            <div className="contact_right">
              <div className="imgbox">
                <img src={pg2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
