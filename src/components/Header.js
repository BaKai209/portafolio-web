import { Close, MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bakai from '../assets/logoBakai.png'

import '../styles/Header.scss'

const Header = () => {

  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className='header'>

      <div className='header__logo'>
        {/* <h1>Ba-Kai</h1> */}
        <img src={bakai} alt="bakai-logo" className='logo'/>
      </div>

        <nav className={active ? 'navbar active' : 'navbar'}>

          <ul>

            <div className="closed">
              <Close className='close'  onClick={showMenu}/>
            </div>

            <li>
              <Link to='/'>home</Link>
            </li>

            <li>
              <Link to='/'>About Me</Link>
            </li>

            <li>
              <Link to='/'>Portfolio</Link>
            </li>

            <li>
              <Link to='/'>Pages</Link>
            </li>

            <li>
              <Link to='/'>Blog</Link>
            </li>

            <li>
              <Link to='/Contact'>Contact Me</Link>
            </li>

          </ul>

        </nav>

        <div className="changer">
        <MenuOutlined className='menu' onClick={showMenu}/>       
        </div>


    </div>
  )
}

export default Header