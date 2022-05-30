import '../styles/globals.css'
import Layout from "../components/layout"
import NavBar from "../components/elements/nav/NavBar"
import Footer from "../components/elements/footer/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
      <Component {...pageProps} />
    <Footer />
    </>
  ) 
}

export default MyApp
