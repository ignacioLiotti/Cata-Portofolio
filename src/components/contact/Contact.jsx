import React from 'react'
import Form from '../form/Form'
import {FaLinkedin,FaTwitterSquare} from 'react-icons/fa'
import DoubleBoop from '../doubleBoop.jsx'

import './contact.css'

const Contact = () => {

  return (
    <div className="contact__container">
      <div className="contact_left">
        <h1>Let's get in contact!</h1>
        <Form/>
      </div>
      <div className="contact_right">
        <h2>check my socials too!</h2>
        <div className='contact__socials'>

          <div className='socials'>
            <DoubleBoop timing='300' rotation='10'>
              <a href='https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w' target="_blank" rel="noreferrer" >
                <FaTwitterSquare/>
              </a>
            <p>@CataMGalindez</p>
            </DoubleBoop>
          </div>

          <div className='socials'>
            <DoubleBoop timing='300' rotation='10'>
              <a href='https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w' target="_blank" rel="noreferrer" >
                <FaLinkedin/>
              </a>
            <p>/catalinagalindez</p>
            </DoubleBoop>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact