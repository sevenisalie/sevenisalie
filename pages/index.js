import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState, useRef} from "react"
import styled, {keyframes} from "styled-components"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from 'react-spring'
import useIntersectionObserver from "../hooks/useInterSectionObserver"
import SpaceHeader from "/public/SpaceHeader.png"


const HomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 200vh;
  min-height: 200vh;
  margin: 0px;
  padding 0px;



`
const HomeHeaderParallax = styled(ParallaxLayer)`
display: flex;
flex-direction: row;
width: 100%;
height: auto;

margin: 0px;
padding 0px;


// @media (max-width: 1024px) {
//   background: url(/MobileSpaceHeader.png) no-repeat center center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// }
`

const BodyContainer = styled(ParallaxLayer)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding-top: 12em;
  padding-bottom: 12em;
  column-gap: 2em;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: url(/BodyBackground.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 25px;
    height: 100%;
  }
`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`
const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.9em;
  height: 20em;
  justify-content: space-evenly;
  border-radius: 22px;
  align-items: center;
  align-content: center;
 
  background: url(/IphoneMockup.png) no-repeat ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: rgba(242, 242, 242, 0.98);
  box-shadow: var(--shadow-elevation-medium);

  @media (max-width: 768px) {
    width: 6.45em;
    height: 10em;
    border-radius: 15px;
`
const BodyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  row-gap: 9px;
  justify-content: center;
  align-content: center;
  align-items: center;


`
const BodyCardImage = styled.img`
  height: auto;
  width: 100%;
  border-radius: 22px;
  padding: 15px
`

const ParallaxImage = styled.img`
  height: auto;
  width: 100%;
`
const ParallaxHeaderText = styled.h2`
  font-size: 3.23em;
  font-weight: 800;
  align-self: center;
  color: rgba(242, 242, 242, 1);
`
const BodyCardText = styled(ParallaxHeaderText)`
@media (max-width: 768px) {
  font-size: 1.5em;
}
  `
const HeaderTextAnimation = keyframes`
  0% { opacity: 0; }
  30% { opacity: 0.3; }
  60% { opacity: 0.6; }
  100% { opacity: 1; }
`
const TextGradientAnimation = keyframes`
  to {
    background-position: 200%;
  }
`
const HeaderText = styled.pre`
font-size: 1em;
font-weight: 800;
align-self: center;
color: rgba(80, 56, 166, 1);


animation-name: ${HeaderTextAnimation} 7s ease-in-out infinite alternate;

@media (max-width: 768px) {
  font-size: 8px;
}
@media (max-width: 468px) {
  font-size: 6px;
}

`
const MainParallax = styled(Parallax)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: hsla(266,100%,64%,1);
`
export const HeaderButton = styled.button`
  width: auto;
  height: auto;
  border-radius: 25px;
  background-color: rgba(80, 56, 166, 1);
  border: 1px solid rgba(80, 56, 166, 1);
  margin-right: auto;
  margin-left: 3em;
  padding: 1em 1em 1em 1em;
  font-size: 1em;
  font-weight: 800;
  color: #fbfbfb;
  align-self: center;
  box-shadow: var(--shadow-elevation-medium);
  cursor: pointer;

  &:active {
    box-shadow: var(--shadow-elevation-low)
  }

  &:hover {
    background-color: rgba(85, 56, 146, 1);
    border: 1px solid rgba(80, 56, 166, 0.6);
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 468px) {
    font-size: 6px;
  }

  
`


const BodyTriangleContainerStyle= {
  backgroundColor: "hsla(266,100%,64%,1)",
  clipPath: "polygon(0 0, 53% 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
  backgroundImage: "radial-gradient(at 40% 20%, hsla(260,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(264,65%,52%,1) 0px, transparent 50%), radial-gradient(at 20% 44%, hsla(256,58%,62%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(269,75%,72%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(251,63%,56%,1) 0px, transparent 50%)"
}



export default function Home() {
  const [styles, api] = useSpring(() => ({ opacity: 1 }))
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    api.start({ 
      opacity: toggle ? 1 : 0,
    })
    setToggle(prev => !prev)
    api.stop()
  }

  // Update spring with new props

  // Stop animation


  console.log("BROBBY")
  console.log(toggle)



  return (
    <>

     
      <MainParallax pages={7}>

        <HomeHeaderParallax offset={0} speed={0} >
            <ParallaxImage src={"/SpaceHeaderAnimation-01.png"} />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0} speed={0} >
          <ParallaxImage src={"/SpaceHeaderAnimation-02.png"} />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0} speed={0.2} >
           <ParallaxImage src={"/SpaceHeaderAnimation-03.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0} speed={0.6} >
            <ParallaxImage style={{width: "auto", height: "100%"}} src={"/SpaceHeaderAnimation-04.png"} />          
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0.3} speed={0.8} >
            <ParallaxImage style={{width: "auto", height: "100%"}} src={"/SpaceHeaderAnimation-06.png"} />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0.3}  speed={0.8} >       
            <ParallaxImage style={{width: "auto", height: "100%"}} src={"/SpaceHeaderAnimation-05.png"} /> 
        </HomeHeaderParallax>

          <HomeHeaderParallax offset={1} speed={0} style={BodyTriangleContainerStyle} >
          </HomeHeaderParallax>


          <HomeHeaderParallax offset={1.1} speed={0.2}>
                <ParallaxHeaderText>DESIGNED.</ParallaxHeaderText>
          </HomeHeaderParallax>

          <HomeHeaderParallax offset={1.2} speed={0.21}>
            <ParallaxHeaderText>ENGINEERED.</ParallaxHeaderText>
          </HomeHeaderParallax>

          <HomeHeaderParallax offset={1.3} speed={0.22}>
         
            <ParallaxHeaderText>PUBLISHED.</ParallaxHeaderText>
          </HomeHeaderParallax>

          <HomeHeaderParallax offset={1.8} speed={0.9}>
            <ParallaxHeaderText style={{fontSize: "4.6em"}}>FULL STACK.</ParallaxHeaderText>
          </HomeHeaderParallax>

          <HomeHeaderParallax offset={0.6}  speed={2.5} >
            <div style={{display: "flex", flexDirection: "column", rowGap: "3em"}}>
            <div style={{display: "flex", width: "50%", marginLeft: "5em"}}>
          <HeaderButton>
              {`
              contact                                                                       
              `}
          </HeaderButton>
          <HeaderButton>
              {`
              support                                                                       
              `}
          </HeaderButton>
          <HeaderButton>
              {`
              merch                                                                       
              `}
          </HeaderButton>

          </div>
            <HeaderText >

{`                                             d8b                   888 d8b          
                                             Y8P                   888 Y8P          
                                                                   888              
.d8888b   .d88b.  888  888  .d88b.  88888b.  888 .d8888b   8888b.  888 888  .d88b.  
88K      d8P  Y8b 888  888 d8P  Y8b 888 "88b 888 88K          "88b 888 888 d8P  Y8b 
"Y8888b. 88888888 Y88  88P 88888888 888  888 888 "Y8888b. .d888888 888 888 88888888 
     X88 Y8b.      Y8bd8P  Y8b.     888  888 888      X88 888  888 888 888 Y8b.     
 88888P'  "Y8888    Y88P    "Y8888  888  888 888  88888P' "Y888888 888 888  "Y8888 `}
          </HeaderText> 

          <HeaderText>
{`
                       888                              888                   d8b                   
                       888                              888                   Y8P                   
                       888                              888                                         
888  888  888  .d88b.  88888b.       888  888       .d88888  .d88b.  .d8888b  888  .d88b.  88888b.  
888  888  888 d8P  Y8b 888 "88b      'Y8bd8P'      d88" 888 d8P  Y8b 88K      888 d88P"88b 888 "88b 
888  888  888 88888888 888  888        X88K        888  888 88888888 "Y8888b. 888 888  888 888  888 
Y88b 888 d88P Y8b.     888 d88P      .d8""8b.      Y88b 888 Y8b.          X88 888 Y88b 888 888  888 
 "Y8888888P"   "Y8888  88888P"       888  888       "Y88888  "Y8888   88888P' 888  "Y88888 888  888 
                                                                                       888          
                                                                                  Y8b d88P          
                                                                                   "Y88P"                   
                                                      
`}
          </HeaderText>
            </div>   



        </HomeHeaderParallax>
          


        <BodyContainer  offset={2} speed={0.3}>
    
            <ParallaxHeaderText style={{padding: "1em"}}>MULTILINGUAL.</ParallaxHeaderText>

        <CardsContainer>
          <BodyCardContainer>
          <BodyCard >
            <BodyCardImage src={`/onlyfurlsss.png`}>
            </BodyCardImage>
          </BodyCard>
          <BodyCardText>django</BodyCardText>
          </BodyCardContainer>

          <BodyCardContainer>
          <BodyCard >
          <BodyCardImage src={`/ltcss.png`}>
            </BodyCardImage>
          </BodyCard>
          <BodyCardText>javascript</BodyCardText>
          </BodyCardContainer>

          <BodyCardContainer>
          <BodyCard>
          <BodyCardImage src={`/cornss.png`}>
            </BodyCardImage>
          </BodyCard >
          <BodyCardText>react</BodyCardText>
          </BodyCardContainer>
          </CardsContainer>
        </BodyContainer>


     
        <HomeHeaderParallax style={{backgroundColor: "rgba(109, 67, 251, 1)"}} offset={3} factor={4} speed={-0.2} >    
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={3} factor={3} speed={0.3} >
           <ParallaxImage src={"/SpaceHeaderAnimation-03.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={3.5} factor={3} speed={0.6} >
           <ParallaxImage style={{width: "70%", height: "200%"}}  src={"/SpaceHeaderAnimation-03.png"}  />
        </HomeHeaderParallax>
        <HomeHeaderParallax offset={4} factor={3} speed={0.6} >
           <ParallaxImage style={{width: "70%", height: "200%"}}  src={"/SpaceHeaderAnimation-03.png"}  />
        </HomeHeaderParallax>
        <HomeHeaderParallax offset={3} factor={2} speed={1} >
            <ParallaxImage style={{width: "auto", height: "100%"}} src={"/SpaceHeaderAnimation-04.png"} />          
        </HomeHeaderParallax>
        <HomeHeaderParallax offset={4} factor={3} speed={0.6} >
           <ParallaxImage style={{width: "100%", height: "auto"}}  src={"/SpaceHeaderAnimation-03.png"}  />
        </HomeHeaderParallax>

        {/* Languages */}

        <HomeHeaderParallax offset={4.5} speed={1.4} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "11em", marginLeft: "auto"}}  src={"/Languages-01.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={4.8} speed={3} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "32em", marginLeft: "auto"}}  src={"/Languages-02.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5.3} speed={2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "7em"}}  src={"/Languages-03.png"}  />
        </HomeHeaderParallax>    

        {/* Satellites */}
        <HomeHeaderParallax offset={4.8} speed={1.8} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "12em"}}  src={"/Languages-04.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5.99} speed={3} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "5em", marginLeft: "auto"}}  src={"/Languages-05.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5.9} speed={1.2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "34em"}}  src={"/Languages-06.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5.9} speed={3} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "12em"}}  src={"/Languages-07.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={4} speed={1.2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "19em", marginLeft: "auto"}}  src={"/Languages-08.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5.3} speed={2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "19em", marginLeft: "auto"}}  src={"/Languages-09.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={4.1} speed={0.8} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "30em"}}  src={"/Languages-10.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5} speed={2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "7em", marginLeft: "auto"}}  src={"/Languages-11.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={5} speed={1.2} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "auto", marginLeft: "14em"}}  src={"/Languages-12.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={6.4} speed={1.6} >
           <ParallaxImage style={{width: "auto", height: "100%"}}  src={"/Earth-Sattelite-01.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={6.3} speed={2.3} >
           <ParallaxImage style={{width: "auto", height: "15%", marginRight: "8em", marginLeft: "auto"}}  src={"/Earth-Sattelite-02.png"}  />
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={6.3} speed={2.3} >
           <ParallaxImage style={{width: "auto", height: "18%", transform: "rotate(45deg)", marginRight: "auto", marginLeft: "7em"}}  src={"/Earth-Sattelite-02.png"}  />
        </HomeHeaderParallax>


      </MainParallax>

          
  



    </>
  )
}
