import React, { useEffect, useState } from 'react'
import { HeroSection,Projects } from '../../sections'
import { PorfolioHeader } from '../../components'
import comingSoon from '../../img/comingSoon.png'
import { useParams } from 'react-router-dom'
import { notionCall } from '../../server'

import './porfolio.css'

const Porfolio = () => {
  const [notionData, setNotionData]= useState('empty')

  useEffect (() => {
    notionCall().then(data => {
      setNotionData(data)
    })
  },[])
  return (
    <div>
      <PorfolioHeader/>
      <HeroSection/>
      <Projects projects={notionData?.results} title='Periodismo'/>
    </div>
  )
}

export default Porfolio