import React, { useEffect, useState } from 'react'
import { HeroSection,Projects } from '../../sections'
import { PorfolioHeader } from '../../components'
import axios from '../../axios.js'

import './porfolio.css'

const Porfolio = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const req = await axios.get('/62b7073e412a48cfa18d4ff5c2b1079c').then(res => {return res?.data?.filter(item => item.Status === 'Live');
    })
    
    setBooks(req)}
    fetchData();
    }, [])

  return (
    <div>
      <PorfolioHeader/>
      <HeroSection/>
      <Projects projects={books} title='Periodismo'/>
    </div>
  )
}

export default Porfolio