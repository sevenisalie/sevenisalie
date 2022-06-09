import React, {useState, useEffect} from 'react'
import styled from "styled-components"

import useGraphQuery from "../hooks/useGraphQuery"

import NFTCard from "../components/nfts/NFTCard"
import dynamic from 'next/dynamic'
const NFTLayout = dynamic(() => import("../components/nfts/NFTLayout"), {
ssr: false,
});

import {fetchAllCollections} from "../queries/nftqueries"

const PageContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background: url(/BodyBackground.png) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @media (max-width: 525px) {
        padding: 0.62em;
      }
`
export const getStaticProps = async () => {
    const collections = await fetchAllCollections()
    return {
        props: {
            ...collections
        }
    }
}

const NFTs = ({ nftCollections }) => {

    return (
        <>
        <PageContainer>
            <NFTLayout id={"PolyDoughnuts"} collection={nftCollections[0]}></NFTLayout>
        </PageContainer>
        </>
    )
}

export default NFTs
