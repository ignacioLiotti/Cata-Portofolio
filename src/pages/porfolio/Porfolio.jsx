import React, { useEffect, useState } from 'react'
import { HeroSection,Projects } from '../../sections'
import { PorfolioHeader } from '../../components'
import { notionCall } from '../../api'
import axios from '../../axios.js'

import './porfolio.css'

const Porfolio = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const req = await axios.get('/62b7073e412a48cfa18d4ff5c2b1079c');
    setBooks(req.data);
    }
    fetchData();
    }, [])

console.log(books)
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
      <Projects projects={books} title='Periodismo'/>
    </div>
  )
}

export default Porfolio