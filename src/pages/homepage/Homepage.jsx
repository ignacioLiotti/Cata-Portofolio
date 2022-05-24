import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
import rectangle from '../../img/heroRectangle.png'
import line from '../../img/heroLine.png'
import {Curriculum, HeroSection} from '../../sections'
import { Datos, Contact} from '../../components'

const Homepage = () => {

  return (
    <>
      <HeroSection/>
      <Curriculum/>
      <Datos/>
      <Contact/>
    </>
  )
}

export default Homepage