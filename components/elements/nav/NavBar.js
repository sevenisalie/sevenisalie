import React from 'react'
import styled from "styled-components"
import Link from "next/link"

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2em;
    width: 100%;
    height: auto;
    max-height: 312px;
    position: absolute;
    z-index: 999;
    background-color: transparent;
    align-content: center;
    align-items: center;
    justify-content: center;

`
const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 22em;
    height: auto;
    padding: 0.42em;
    justify-content: space-evenly;
    border-radius: 12px;
    align-items: center;
    align-content: center;
    background-color: rgb(163, 102, 255);
    color: rgba(242, 242, 242, 0.98);
    box-shadow: var(--shadow-elevation-high);
`
const NavLink = styled.a`
    color: rgba(242, 242, 242, 0.98);
    cursor: pointer;
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    padding: 0.3em;
    margin: 0.1em;
    &:hover {
        animation: pulse 1s ease-out .8s;
        color: rgba(242, 242, 242, 0.42);
    }

`


const NavBar = () => {
    return (
        <>
            <NavContainer>
                <NavLinkContainer>

                    <Link href="/">
                        <NavLink>Home</NavLink>
                    </Link>
                    <Link href={"/blog"}>
                        <NavLink >Blog</NavLink>
                    </Link>


                        <NavLink>NFTs</NavLink>

                </NavLinkContainer>
            </NavContainer>
        </>
    )
}

export default NavBar
