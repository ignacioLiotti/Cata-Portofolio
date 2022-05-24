import React from 'react'
import { Link } from 'react-router-dom'
import line from '../../img/rectangleShort.png'
import './porfolioHeader.css'

const PorfolioHeader = () => {
  return (
    <div className='porfolioHeader__container'>
        <div className="porfolioHeader__container-title">
            <h1>My Porfolio</h1>
            <img src={line} alt="" />
        </div>
        <ul>
            <li><Link to='/'>Categoria 1</Link></li>
            <li><Link to='/'>Categoria 2</Link></li>
            <li><Link to='/'>Categoria 3</Link></li>
            <li><Link to='/'>Categoria 4</Link></li>
        </ul>
    </div>
  )
}

export default PorfolioHeader