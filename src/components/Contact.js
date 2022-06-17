import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>

      <Link to='/'>
        <ArrowBackOutlined className='arrow' />
      </Link>

      {/* <div className="inputs"> */}
        
      {/* </div> */}
      <div className="inputs">
      <h1>Contact With Me</h1>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='message' className='message'/>
        <button>Send</button>
      </div>

    </div>
    
  )
}

export default Contact