import React from 'react'

import man2 from '../assets/aboutMe.png'
import '../styles/AboutMe.scss'


const AboutMe = () => {
  return (
    <div className='section'>
      <div className="section__container">

        <div className="section__img">
          <img src={man2} alt="" />
        </div>

        <div className="section__content">
          <h1>Who is Johan</h1>
          <p>5 years experience in Web Development</p>
          <p>Professional UI & UX Designer</p>
          <p>Project Manager at Google</p>
          <p>8 years experience in Programming</p>
          <p>Javascript Developer</p>
          <p>React js Developer</p>
        </div>

      </div>

    </div>
  )
}

export default AboutMe