import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <div className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
              <img className="brand-logo-light" src="https://images.unsplash.com/photo-1522856339183-9a8b06b05937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="cat relaxing" width="100"/>
                <p>The professionals at Stillwater Calm Care provide complete, customized wellness services designed to help you relax, restore and recuperate. We offer massage therapy for individuals, couples, and friends. We also offer life coaching, small support groups, workshops, events and several other modalities. Our offices are housed in a beautiful boutique office setting in downtown Stillwater, MN.</p>
                {/* Rights */}
                <p className="rights"><span>©  </span><span className="copyright-year">2022</span><span> </span><span>Col-R</span><span> - </span><span>All Rights Reserved.</span></p>
                <p className="rights"><span>Made by <a href="https://github.com/Col-R/calm_care">Cole Robinson</a></span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Visit Us!</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                    <dd>Stillwater Calm Care</dd>
                    <dd>275 3rd Street South, Suite 103</dd>
                    <dd>Stillwater, Minnesota 55082</dd>
              </dl>
              <h5>For Scheduling: </h5>
              <dl className="contact-list">
                <dt>Write:</dt>
                <dd><a href="mailto:Susan@stillwatercalmcare.com">Susan@stillwatercalmcare.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>Call or Text:</dt>
                <dd><a href="tel:#">123-555-6789</a>
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Hours</h5>
              <ul className="nav-list">
                <li>Monday 9:00 am - 4:00 pm</li>
                <li>Tuesday 9:00 am - 4:00 pm</li>
                <li>Wednesday 9:00 am - 7:00 pm</li>
                <li>Thursday 9:00 am - 7:00 pm</li>
                <li>Friday 9:00 am - 7:00 pm</li>
                <li>Saturday 9:00 am - 4:00 pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Social Links */}
        { /* Not using in current version 
        <div className"row no-gutters social-container">
          <div className"col"><a className"social-inner" href="#"><span className"icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className"col"><a className"social-inner" href="#"><span className"icon mdi mdi-instagram"></span><span>Instagram</span></a></div>
          <div className"col"><a className"social-inner" href="#"><span className"icon mdi mdi-twitter"></span><span>Twitter</span></a></div>
          <div className"col"><a className"social-inner" href="#"><span className"icon mdi mdi-youtube-play"></span><span>Youtube</span></a></div>
        </div>
        */}
      </div>
  )
}

export default Footer