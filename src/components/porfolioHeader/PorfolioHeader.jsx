import React from 'react'
import { Link } from 'react-router-dom'
import line from '../../img/rectangleShort.png'
import Typing from '../typing/Typing'
import './porfolioHeader.css'

const PorfolioHeader = () => {
  return (
    <div className='porfolioHeader__container'>
        <div className="porfolioHeader__container-title">
            <h1>Mi Portfolio</h1>
            {/* <Typing>hola tipeo</Typing> */}
            <img src={line} alt="" />
        </div>
        <ul>
            <li><a href='#periodismo'>Periodismo</a></li>
            <li><Link to='/'>Categoria 2</Link></li>
            <li><Link to='/'>Categoria 3</Link></li>
        </ul>
    </div>
  )
}

export default PorfolioHeader