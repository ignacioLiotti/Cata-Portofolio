import React from "react";
import styled, {keyframes} from "styled-components";

const Typing = ({children}) => {

    const typing = keyframes`
        from {
            width: 0;
        }`

    const Wrapper = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        `
    const TypeingElement = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${children.length}ch;
        white-space: nowrap;
        overflow: hidden;
        transform-origin: 0 0;
        animation: ${typing} 2s steps(${children.length}) 1s infinite;
    ` 


    return(
        <Wrapper>
            <TypeingElement>{children}</TypeingElement>
        </Wrapper>
    )
}

export default Typing;