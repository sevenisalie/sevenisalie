import '../styles/globals.css'
import Layout from "../components/layout"
import NavBar from "../components/elements/nav/NavBar"
import Footer from "../components/elements/footer/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//styled next.js stuff
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    font-family: 'Ubuntu', sans-serif;
    background: url(/BodyBackground.png) no-repeat center center fixed; 
    color: #242424;
    width: 100vw;
    height: auto;
    max-width: 100vw;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
//web3 stuff
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";

  const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100%;
    height: auto;
    background: url(/BodyBackground.png) no-repeat center center fixed; 
    // -webkit-background-size: cover;
    // -moz-background-size: cover;
    // -o-background-size: cover;
    // background-size: cover;

`

const getLibrary = (provider, connector)  => {
  return new ethers.providers.Web3Provider(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Web3ReactProvider getLibrary={getLibrary}>
    <GlobalStyle />

      <NavBar />
      <ToastContainer></ToastContainer>
        <Component {...pageProps} />
      <Footer />

  </Web3ReactProvider>
 
    </>
  ) 
}

export default MyApp
