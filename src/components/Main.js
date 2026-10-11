import { AlternateEmail, GitHub, LinkedIn, WhatsApp } from '@material-ui/icons'
import React from 'react'
import man from '../assets/portada.jpg'

import '../styles/Main.scss'


const Main = () => {
  return (
    <div className='main'>

      <div className="main__container">

        <div className="main__content">
          <div className='text'>
            <p>¡ Greetings, visitor !</p>
            <h1>My Name is Johan Mora. </h1>
            <p>Front-End Developer & Tech Support Specialist</p>
            <p>Desarrollador Front-End y Especialista en Soporte Técnico</p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/johan-mora-dev/?locale=en-US" target="_blank" rel="noreferrer"> </a> <LinkedIn className='icon' />
              <a href="https://github.com/BaKai209" target="_blank" rel="noreferrer"></a><GitHub className='icon' />
              <WhatsApp className='icon' />
              <AlternateEmail className='icon' />
            </div>

            <div className="buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>

          </div>
        </div>

        <div className="main__img">
          <img src={man} alt="imagen perfil" />
        </div>



      </div>
    </div>
  )
}

export default Main