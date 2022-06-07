import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {ethers} from "ethers"
import { useWeb3React } from '@web3-react/core';
import { useSpring, animated} from "react-spring"
import useFetchContract from "../../hooks/useFetchContract"
import ADDRESSES from "../../config/addresses"
import POLYDOUGHNUTS from "../../config/contracts/PolyDoughnuts.json"
import {handleMint} from "../../utils/functions"

import {NFTFooter} from "./NFTFooter"
import {GiCupcake} from "react-icons/gi"
import { HeaderButton } from '../../pages/index';



export const MyNFTCard = styled.div`
    border: none;
    // margin-bottom: 100px;
    border-radius: 25px;
    height: auto;
    width: 70%;
    min-width: 312px;
    max-width: 312px;
    background-color: rgba(242, 242, 242, 0.17);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: var(--shadow-elevation-low);
`
const MyNFTCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: space-around;
    gap: 8px;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`
const MultiplierBadge = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    font-size: 60%;
    font-weight: 400;


    padding-left: 0.8em;
    padding-right: 0.8em;
    padding-bottom: 0.3em;
    background-color: transparent !important;
    color: ${props => props.borderColor ? props.borderColor : "#fbdb37"};
    background: none;
    border: 2px solid ${props => props.borderColor ? props.borderColor : "#fbdb37"};
    border-radius: 14px;
    margin: 4px;
    
` 
const NFTImageWrapper = styled.img`
    border-radius: 5px;
    border: 5px solid #141516;
    background: #4c4e54;
    width: 90%;
    height: auto;
    align-self: center;
`
const NFTBrandName = styled.p`
    font-size: 70%;
    color: #fbdb37;
`
const NFTTitle = styled.h3`
    font-size: 120%;
    font-weight: 600;
    color: #fbfbfb;
`
const NFTLineBreak = styled.hr`
      border: 3px solid #fbdb37;
      width: 100%;
`
const PriceRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-left: 0px;
    padding: 0.42em;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    gap: 12px;
`

const ButtonWrapper = styled.div`
      display: flex;
      flex-direction: row;
      width: 40%;
      height: auto;
`

export const MintButton = styled(animated.button)`
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

const MaticImageWrapper = styled.img`
    height: auto;
    width: 20px;

`

export const NFTCard = ({collection}) => {
    const [ contract ] = useFetchContract(collection.contractAddress, POLYDOUGHNUTS.abi)
    const {account, active, library} = useWeb3React()
    const [mintAnimeTrigger, setMintAnimeTrigger] = useState(false)

    const mintButtonStyle = useSpring({
        transform: mintAnimeTrigger ? `scale(1.2)` : `scale(1)`,
        config: {
            tension: 300,
            friction: 10
        }
    })


    const handleMintAnime = () => {
        setMintAnimeTrigger( prev => !prev )
    }





    return (
        <>
           <MyNFTCard>
                <MyNFTCardContainer>
                <NFTImageWrapper src={collection.displayImage.url}></NFTImageWrapper>
                <NFTBrandName>Sevenisalie</NFTBrandName>
                <NFTTitle>{collection.collectionName}</NFTTitle>
                <NFTLineBreak size="8"/>
                <PriceRow>
                    <MintButton
                     style={mintButtonStyle} 
                     onMouseEnter={handleMintAnime}
                     onMouseLeave={handleMintAnime}
                     onClick={() => handleMint(contract)}
                     >
                         {`MINT`}
                    </MintButton>
                    <MultiplierBadge >
                        <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "center", paddingTop: "0.12em", paddingBottom: "0.12em"}}>
                        <p style={{fontSize: "1.6em", fontWeight: "800", margin: "0px", marginBottom: "1px"}}>{collection.price}</p>
                        <MaticImageWrapper src={"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png"} /> 
                        </div>
                    </MultiplierBadge>

                    <MultiplierBadge>
                    <GiCupcake style={{ color: "rgba(254, 205, 255, 1)", fontSize: "2.8em", margin: "0px"}} />
                    </MultiplierBadge>
                </PriceRow>


                <NFTFooter count={32} collection={collection}></NFTFooter>  
                </MyNFTCardContainer>
            </MyNFTCard> 
        </>
    )
}

export default NFTCard
