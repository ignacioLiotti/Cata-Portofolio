import React from 'react'
import Styled, {keyframes} from 'styled-components'
import wipImg from '../../img/wipImage.png'

const WIP = () => {
  const StyledWipContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    padding: 10%;
  `
  const StyledWip = Styled.img`
    margin-bottom: 2rem;
`
  const WipText = Styled.p`
    font-size: 2rem;
    font-weight: 800;
    font-family: var(--font-secondary);
    text-align:center;
`
  return (
    <StyledWipContainer>
        <StyledWip src={wipImg}/>
        <WipText>
            Hola! esta pagina todavia se encuentra en construccion! Este proyecto aun no esta terminado
        </WipText>
    </StyledWipContainer>
  )
}


export default WIP