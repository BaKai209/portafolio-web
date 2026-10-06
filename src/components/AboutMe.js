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
          <p>Front-End Developer</p>
          <p>Tech Support Specialist</p>
          <p>Desarrollador Front-End</p>
          <p>Especialista en Soporte Técnico</p>
          <p>React.js & JavaScript</p>
          <p>UI & Troubleshooting</p>
        </div>

      </div>

    </div>
  )
}

export default AboutMe