import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BiMenu,BiX} from 'react-icons/bi'

import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

    const [stuck, setStuck] = useState(false)
    const ref = React.createRef()
  
    const styles = stuck ? {padding:'0.5rem 2rem'} : {transition: 'all 0.7s ease-out'}
  
    const inlineStyles = {
      position: "sticky",
      top:-1,
      ...styles
    }
  
    useEffect(() => {
      const cachedRef = ref.current
      const observer = new IntersectionObserver(
        ([e]) => setStuck(e.intersectionRatio < 1),
        { threshold: [1] }
      )
      observer.observe(cachedRef)
      return () => observer.unobserve(cachedRef)
    }, [ref])

  return (
    <nav style={inlineStyles} ref={ref}>
      <h1>Catalina Maria Galindez</h1>
      <div className='btn_container'>
        <div className='navBtn'>
          {isOpen ? <BiX onClick={()=>setIsOpen(false)}/> :  <BiMenu onClick={()=>setIsOpen(true)}/>}
        </div>
        <ul id={isOpen ? 'shown' : ''} >
          <li><NavLink to='/' className={({ isActive }) => isActive ? "inpage" : undefined}>Home</NavLink></li>
          <li><NavLink to='/porfolio' className={({ isActive }) => isActive ? "inpage" : undefined}>Porfolio</NavLink></li>
          <li><NavLink to='/curriculum' className={({ isActive }) => isActive ? "inpage" : undefined}>Curriculum</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? "inpage" : undefined}>About</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? "inpage" : undefined}>contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar