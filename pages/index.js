import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import styled from "styled-components"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import SpaceHeader from "/public/SpaceHeader.png"


const HomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  margin: 0px;
  padding 0px;



`
const HomeHeaderParallax = styled(ParallaxLayer)`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;

margin: 0px;
padding 0px;


// @media (max-width: 1024px) {
//   background: url('/MobileSpaceHeader.png') no-repeat center center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// }
`

const BodyContainer = styled.div`
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
  background: url('/BodyBackground.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 25px;
  }
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
  background-color: rgba(148, 105, 255, 0.66);
  background: url('/IphoneMockup.png') no-repeat ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: covre;
  color: rgba(242, 242, 242, 0.98);
  box-shadow: var(--shadow-elevation-medium);
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
const MainParallax = styled(Parallax)`
  display: flex;
  width: 100%;
  height: auto;
`

const SubParallaxLayer = styled(ParallaxLayer)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`
const BodyTriangleContainerStyle= {
  backgroundColor: "hsla(266,100%,64%,1)",
  clipPath: "polygon(0 0, 53% 0, 100% 0, 100% 50%, 50% 100%, 0 50%)",
  backgroundImage: "radial-gradient(at 40% 20%, hsla(260,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(264,65%,52%,1) 0px, transparent 50%), radial-gradient(at 20% 44%, hsla(256,58%,62%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(269,75%,72%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(251,63%,56%,1) 0px, transparent 50%)"
}



export default function Home() {
  return (
    <>
   
      <MainParallax pages={10}>

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
            <ParallaxImage src={"/SpaceHeaderAnimation-04.png"} />          
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0.3} speed={0.8} >
            <ParallaxImage src={"/SpaceHeaderAnimation-06.png"} />          
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={0.3} speed={0.8} >
            <ParallaxImage src={"/SpaceHeaderAnimation-05.png"} />          
        </HomeHeaderParallax>

        <HomeHeaderParallax offset={1} speed={0} style={BodyTriangleContainerStyle} >
            {/* <ParallaxImage src={"/SpaceHeaderAnimation-07.png"} />           */}
        </HomeHeaderParallax>

          <HomeHeaderParallax offset={1.1} speed={0}>
                <ParallaxHeaderText>DESIGNED.</ParallaxHeaderText>
              </HomeHeaderParallax>

              <HomeHeaderParallax offset={1.2} speed={0}>
                <ParallaxHeaderText>ENGINEERED.</ParallaxHeaderText>
              </HomeHeaderParallax>

              <HomeHeaderParallax offset={1.3} speed={0}>
                <ParallaxHeaderText>PUBLISHED.</ParallaxHeaderText>
              </HomeHeaderParallax>

      </MainParallax>
     

      <BodyContainer >
        <BodyCardContainer>
        <ParallaxHeaderText style={{padding: "1em"}}>MULTILINGUAL.</ParallaxHeaderText>
        </BodyCardContainer>


        <BodyCardContainer>
          <BodyCard horizontal={true} offset={1} speed={1}>
            <BodyCardImage src={`/onlyfurlsss.png`}>
            </BodyCardImage>
          </BodyCard>
          <ParallaxHeaderText>django</ParallaxHeaderText>
        </BodyCardContainer>

        <BodyCardContainer>
          <BodyCard horizontal={true} offset={1} speed={1}>
          <BodyCardImage src={`/ltcss.png`}>
            </BodyCardImage>
          </BodyCard>
          <ParallaxHeaderText>javascript</ParallaxHeaderText>
        </BodyCardContainer>

        <BodyCardContainer>
          <BodyCard horizontal={true} offset={1} speed={1}>
          <BodyCardImage src={`/cornss.png`}>
            </BodyCardImage>
          </BodyCard >
          <ParallaxHeaderText>react</ParallaxHeaderText>
        </BodyCardContainer>


      </BodyContainer>



    </>
  )
}
