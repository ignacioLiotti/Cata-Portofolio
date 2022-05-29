import React from 'react'
import './heroSection.css'
import { Link } from 'react-router-dom'
import rectangle from '../../img/heroRectangle.png'

const HeroSection = () => {
  return (
    <div className='hero__container'>
      <div className='hero__container-text'>
        <img className='hero__container-rect' src={rectangle} alt="" />
        <h1>Mucho Texto bienvenida, palabras</h1>
        <div className='hero__container-items'>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a tempore itaque illum quibusdam cumque, fuga magni. Dolor fugit distinctio deserunt praesentium esse laboriosam sit, mollitia et dignissimos at impedit?</p>
            <Link className='button' to='/'>LINK A ALGO</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection