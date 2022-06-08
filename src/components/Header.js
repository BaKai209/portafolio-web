import { Close, MenuOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
  return (
    <div className='header'>

      <div className='header__logo'>
        <h1>BaKai209</h1>
      </div>
      
        <nav className='navbar'>

          <ul>

            <div className="closed">
              <Close className='close' />
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
              <Link to='/'>Contact Me</Link>
            </li>

          </ul>

        </nav>

        <div className="changer">
        <MenuOutlined className='menu'/>       
        </div>


    </div>
  )
}

export default Header