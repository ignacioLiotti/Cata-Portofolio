import React from 'react'
import Form from '../form/Form'
import {FaLinkedin,FaTwitterSquare} from 'react-icons/fa'
import DoubleBoop from '../doubleBoop.jsx'

import './contact.css'

const Contact = () => {

  return (
    <div className="contact__container">
      <div className="contact_left">
        <h1>Estemos en contacto!</h1>
        <Form/>
      </div>
      <div className="contact_right">
        <h2>Buscame en mis redes!</h2>
        <div className='contact__socials'>

          <div className='socials'>
            <DoubleBoop timing='300' rotation='10'>
              <a href='https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w' target="_blank" rel="noreferrer" >
                <FaTwitterSquare/>
              </a>
              <a href="https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w"><p>@CataMGalindez</p></a>
            </DoubleBoop>
          </div>

          <div className='socials'>
            <DoubleBoop timing='300' rotation='10'>
              <a href='https://www.linkedin.com/in/catalina-maría-galíndez-552562209/' target="_blank" rel="noreferrer" >
                <FaLinkedin/>
              </a>
            <a href="https://www.linkedin.com/in/catalina-maría-galíndez-552562209/"><p>/catalinagalindez</p></a>
            </DoubleBoop>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact