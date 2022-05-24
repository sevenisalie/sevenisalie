import React from 'react'

import NavBar from "../components/elements/nav/NavBar"
import Footer from "../components/elements/footer/Footer"

const Layout = ({children}) => {
    return (
        <>
        <NavBar />
            <main>{children}</main>
        <Footer /> 
        </>
    )
}

export default Layout
