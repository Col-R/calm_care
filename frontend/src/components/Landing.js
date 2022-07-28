import React from 'react'
import './Landing.css'

const Landing = () => {
  return (
    <div className="container">
      <div className="landing__main">
        <div className="landing__text">
          <div>
          <span id = "landing_text_title">All about the calm. . .</span><br></br>
            <br></br>
            The professionals at Stillwater Calm Care provide complete, customized wellness services designed to help you relax, restore and recuperate. We offer massage therapy for individuals, couples, and friends. We also offer life coaching, small support groups, workshops, events and several other modalities . Our offices are housed in a beautiful boutique office setting in downtown Stillwater, MN.
            <br></br><br></br>
            NEW: More individual and couples massage appointments now available. Please call or email for availability.
            <br></br><br></br>
            For more information about Stillwater Calm Care services and to schedule appointments please call or text: 651-472-4430 or email: info@StillwaterCalmCare.com
          </div>

        </div>
        <div className="hero__img">
            <img src="https://images.unsplash.com/photo-1602459831426-7f1bd5b4339a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVsYXh8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="rocks" height = "75%"/>
        </div>

      </div>
    </div>
    
  )
}

export default Landing