import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Navbar,Footer} from './components'
import {Homepage, Porfolio,Curriculum,BlogPost, Notas} from './pages'

import './app.css'



const App = () => {

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Homepage/>}/>
            <Route exact path='/porfolio' element={<Porfolio/>}/>
            <Route exact path='/curriculum' element={<Curriculum/>}/>
            <Route exact path='/blog/:id' element={<BlogPost/>}/>
            <Route exact path='/notas' element={<Notas/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App