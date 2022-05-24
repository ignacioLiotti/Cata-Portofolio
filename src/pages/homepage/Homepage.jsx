import React from 'react'
import './homepage.css'
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