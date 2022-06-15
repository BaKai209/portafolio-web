import { Facebook, GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import man from '../assets/portada.png'

import '../styles/Main.scss'


const Main = () => {
  return (
    <div className='main'>

      <div className="main__container">

        <div className="main__content">
          <div className='text'>
            <p>Hey There !</p>
            <h1>I Am Johan A. Mora</h1>
            <p>Frond-end developer & Web designer.</p>

            <div className="icons">
              <LinkedIn className='icon' />
              <GitHub className='icon' />
              <Facebook className='icon' />
              <Instagram className='icon' />
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