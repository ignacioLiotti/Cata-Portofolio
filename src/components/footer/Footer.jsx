import React from 'react'
import './footer.css'
import {FaLinkedinIn,FaTwitter} from 'react-icons/fa'
import Boop from '../Boop.jsx'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer__container'>
      <Link to='/'>Catalina Maria Galindez</Link>
      <div className='socials'>
        <Boop timing='300' rotation='10'>
          <a href='https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w' target="_blank" >
            <FaTwitter/>
          </a>
        </Boop>
        <Boop timing='300' rotation='10'>
          <a href='https://twitter.com/CataMGalindez?s=20&t=tWE4P2y6CH3EeNHyrIYT-w' target="_blank" >
            <FaLinkedinIn/>
          </a>
        </Boop>
      </div>
    </div>
  )
}

export default Footer