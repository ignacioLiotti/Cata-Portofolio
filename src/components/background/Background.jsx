import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import Sparkle from '../sparkle/Sparkle'
import './background.css'

const Background = () => {
  const StyledLink = Styled(Link)`
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 800;
      font-family: var(--font-secondary);
      &:hover {
        color: var(--color-secondary);
      }
  `
  return (
    <div className='background'>
        <div className='background__card'>
            <h1>Background</h1>
            <p>Me considero una persona curiosa así que en los últimos años desarrollé un interes por el copywriting y la programación. Actualmente trabajo como freelancer para una start-up de marketing digital (podes chequear mis trabajos  <Sparkle><StyledLink to='/notas'>aquí</StyledLink></Sparkle>)</p>
        </div>
    </div>
  )
}



export default Background