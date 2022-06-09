import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { FaGithub, FaGithubAlt, FaTwitter } from "react-icons/fa"
import { AiFillTwitterSquare } from "react-icons/ai"
import { FiLinkedin } from "react-icons/fi"
import { ImOffice } from "react-icons/im"

import { animated, useSpring } from "react-spring"

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
const LinkContainer = styled(animated.a)`
    height: max-content:
    width: max-content;
    cursor: pointer;
`
const Github = styled(FaGithubAlt)`
    font-size: 1.42em;
    color: rgba(242, 242, 242, 0.98);
`
const Twitter = styled(FaTwitter)`
    font-size: 1.42em;
    color: rgba(242, 242, 242, 0.98);
`
const LinkedIn = styled(FiLinkedin)`
    font-size: 1.42em;
    color: rgba(242, 242, 242, 0.98);
`
const Business = styled(ImOffice)`
    font-size: 1.42em;
    color: rgba(242, 242, 242, 0.98);
`
const LinkImage = styled.img`
    width: 11em;
    height: auto;
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: max-content;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding: 0.2em;
    column-gap: 2.82em;
`

const Footer = () => {
    const [linkContainerAnime, setLinkContainerAnime] = useState(false)

    const linkContainerAnimeStyleEnter = useSpring({
        transform: linkContainerAnime ? "scale(1.2) rotate(66deg)" : "scale(1) rotate(0deg)",
        config: {
            tension: 170,
            friction: 10
        }

    })
    const linkContainerAnimeStyleExit = useSpring({
        opacity: linkContainerAnime ? "0%" : "100%",
        config: {
            tension: 170,
            friction: 10
        }

    })
    const handleLinkContainerAnimeTrigger = () => {
        setLinkContainerAnime(prev => !prev)
    }


    
    return (
        <>
            <FooterContainer>
                <FooterContentContainer>


              
                        <LinksContainer>
                            <LinkContainer target="_blank" href={"https://github.com/sevenisalie"} onMouseEnter={handleLinkContainerAnimeTrigger} onMouseLeave={handleLinkContainerAnimeTrigger} style={linkContainerAnimeStyleEnter}>
                                <Github />
                            </LinkContainer>

                            <LinkContainer target="_blank" href={"https://twitter.com/evensevensevens"} onMouseEnter={handleLinkContainerAnimeTrigger} onMouseLeave={handleLinkContainerAnimeTrigger} style={linkContainerAnimeStyleEnter}>
                                <Twitter />
                            </LinkContainer>

                            <LinkContainer target="_blank" href={"https://www.linkedin.com/in/nolan-terry-a519b7104/"} onMouseEnter={handleLinkContainerAnimeTrigger} onMouseLeave={handleLinkContainerAnimeTrigger} style={linkContainerAnimeStyleEnter}>
                                <LinkedIn />
                            </LinkContainer>

                            <LinkContainer target="_blank" href={"https://lld.llc/"} onMouseEnter={handleLinkContainerAnimeTrigger} onMouseLeave={handleLinkContainerAnimeTrigger} style={linkContainerAnimeStyleEnter}>
                                <Business />
                            </LinkContainer>
                        </LinksContainer>
            
                       
                </FooterContentContainer>
            </FooterContainer> 
        </>
    )
}

export default Footer
