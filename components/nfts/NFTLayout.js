import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { animated, useSpring} from "react-spring"

import {useWeb3React} from "@web3-react/core"
import NFTCard from "./NFTCard"

import { getRandomInt } from '../../utils/functions'
import {BsArrowLeftCircle} from "react-icons/bs"
import {FaFileContract, FaGithub} from "react-icons/fa"

const DisplayCard = styled(animated.div)`
    display: flex;
    flex-direction: row;
    padding: 0.4em;
    margin-top: 6em;
    margin-bottom: 3em;
    margin-right: auto;
    margin-left: auto;
    align-content: space-around;
    box-shadow: var(--shadow-elevation-medium);
    background-color: rgba(106, 12, 228, 0.97);
    border: 1px solid rgba(242, 242, 242, 0.12);
    border-radius: 8px;
    width: 90%;
    height: auto;
`
const DisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 1em;
    align-content: center;
    align-items: center;
    justify-content: center;
`
const NFTDisplayImage = styled.img`
    width: auto;
    height: 15em;
`
const InfoDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 1em;
    align-content: center;
    align-items: flex-start;
    justify-content: center;
    row-gap: 0.2em;
`
const CollectionNameText = styled.p`
    font-size: 1.1em;
    font-weight: 600;
    color: #fbdb37;
`
const CollectionTokenIDText = styled.p`
    font-size: 2.7em;
    font-weight: 800;
    color: rgba(242, 242, 242, 1);
`
const CollectionDescription = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: rgba(242, 242, 242, 1);
`
const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
`
const PriceTokenSymbol = styled.img`
    width: 3em;
    height: auto;
`
const PriceText = styled.p`
    font-weight: 800;
    font-size: 1.4em;
    color: rgba(242, 242, 242, 1);
`
const PriceInfoText = styled.p`
    font-size: 1em;
    font-weight: 400;
    color: rgba(242, 242, 242, 0.8);
`
const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: solid 2px #fbdb37;;
    border-radius: 24px;
    width: auto;
    height: auto;
    align-content: center;
    align-items: center;
    justify-content: center;
`
const InfoLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #fbdb37;
    margin-left: 1em;
    margin-right: 1em;
    &:hover {
        color: rgba(242, 242, 242, 0.9);
    }
`
const Github = styled(FaGithub)`
    font-size: 1.8em;
    margin: 0.5em;
    color: #fbdb37;
`
const ContractIcon = styled(FaFileContract)`
    font-size: 1.8em;
    margin: 0.5em;
    color: #fbdb37;
`
const NFTLayout = ({ collection, id }) => {
    const [collectionAnime, setCollectionAnime] = useState(false)

    const collectionAnimeStyle = useSpring({
        marginLeft: collectionAnime ? `3em` : `-500px`,
        opacity: collectionAnime  ? `100%` : `0%`,
        // config: {
        //     tension: 100,
        //     friction: 3
        // }
    })

    useEffect(() => {
        setCollectionAnime(true)
    }, [])

    return (
        <>

        <DisplayCard  style={collectionAnimeStyle}>
            <InfoDisplayContainer>
                <CollectionNameText>{collection.collectionName}</CollectionNameText>
                <CollectionTokenIDText>{collection.collectionName + ' ' + '#' + getRandomInt(1, 100)}</CollectionTokenIDText>
                <CollectionDescription>
                    {collection.collectionDescription}
                </CollectionDescription>
    
                    <PriceInfoText>Price</PriceInfoText>
                    <PriceContainer>
                        <PriceTokenSymbol src={"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png"}/>
                        <PriceText>{`0.042`}</PriceText>
                        <PriceInfoText>{`(~0.03 USD)`}</PriceInfoText>
                    </PriceContainer>
                    <LinkContainer>
                        <Github />
                        <InfoLink>Code</InfoLink>
                        <BsArrowLeftCircle style={{fontSize: "1.25em", alignSelf: "center", marginRight: "0.42em", color: "#fbdb37"}}/>
                    </LinkContainer>
                    <LinkContainer style={{marginTop: "0.42em"}}>
                        <ContractIcon />
                        <InfoLink>Verified Contract</InfoLink>
                        <BsArrowLeftCircle style={{fontSize: "1.25em", alignSelf: "center", marginRight: "0.42em", color: "#fbdb37"}}/>
                    </LinkContainer>
            </InfoDisplayContainer>
            <DisplayContainer>
                <NFTCard collection={collection} />
                {/* <NFTDisplayImage src={collection.displayImage.url}/> */}
            </DisplayContainer>
        </DisplayCard>
        </>
    )
}

export default NFTLayout
