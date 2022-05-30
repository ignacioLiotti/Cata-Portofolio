import React from 'react'
import './heroSection.css'
import { Link } from 'react-router-dom'
import rectangle from '../../img/heroRectangle.png'

const HeroSection = () => {
  return (
    <div className='hero__container'>
      <div className='hero__container-text'>
        <img className='hero__container-rect' src={rectangle} alt="" />
        <h1>Hola! Bienvenidos a mi blog.</h1>
        <div className='hero__container-items'>
          <div>
            <p>Mi nombre es Catalina Galíndez soy estudiante de Ciencias Sociales en la Universidad Torcuato Di Tella, apasionada por la escritura, el marketing, la programación y los libros.</p>
            <Link className='button' to='/'>LINK A ALGO</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection