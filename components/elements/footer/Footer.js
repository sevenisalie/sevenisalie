import React from 'react'
import styled from "styled-components"

//make react icon links for your shit dumbass

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5em;
    width: 100%;
    height: auto;
    max-height: 312px;
    background-color: rgba(163, 102, 255, .99);
`
const FooterContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    padding: 0.42em;
    justify-content: space-evenly;
    border-radius: 12px;
    align-items: center;
    align-content: center;
    background-color: rgb(163, 102, 255);
    color: rgba(242, 242, 242, 0.98);
`


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterContentContainer>
                    <p>poop</p>
                    <p>copyright 2022</p>
                </FooterContentContainer>
            </FooterContainer> 
        </>
    )
}

export default Footer
