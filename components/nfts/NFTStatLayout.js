import React, {useState, useEffect} from 'react'
import {ethers} from "ethers"
import styled from "styled-components"
import {useWeb3React} from "@web3-react/core"
import {animated, useSpring} from "react-spring"
import {HeaderButton} from "../../pages/index"
import {AiFillSetting} from "react-icons/ai"
import {truncateAddress, getRandomInt} from "../../utils/functions"
import useFetchContract from "../../hooks/useFetchContract"
import ConnectButton from "../elements/connect/ConnectButton"
import {MintButton} from "./NFTCard"
import NFTCONTRACT from "../../config/contracts/PolyDoughnuts.json"


const DisplayContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.4em;
    margin-top: 6em;
    margin-bottom: 3em;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-evenly;
    border-radius: 8px;
    width: 90%;
    height: auto;

    @media (max-width: 612px) {
        flex-direction: column;
        row-gap: 4em;
    }
`
const MyCollectionCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.42em;
    width: max-content;
    min-width: 40%;
    height: max-content;
    min-height: 14em;
    margin-right: 0.5em;
    box-shadow: var(--shadow-elevation-medium);
    background-color: rgba(242, 242, 242, 0.17);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 26px;
    align-self: center;

    @media (max-width: 612px) {
        align-self: center;
    }
`
const CollectionDisplayGrid = styled(animated.div)`
    width: 100%;
    height: auto;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 3em 0.3em; 
    place-items: center;
    margin-bottom: 2em;
`
const CollectionItemCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.42em;
    width: 10em;
    height: auto;
    box-shadow: var(--shadow-elevation-medium);
    background-color: rgba(106, 12, 228, 0.97);
    border: 1px solid rgba(242, 242, 242, 0.12);
    border-radius: 10px;
`
const NFTImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 9em;
    width: auto;
    background-color: rgba(5, 5 , 5, 1);
    border-radius: 8px;
`
const NFTImage = styled.img`
    width: 9em;
    height: auto;
    border-radius: 9px;
    border: 3px solid black;
    border-radius: 8px;
    align-self: center;
`
const NFTTitle = styled.h2`
    font-size: 0.8em;
    font-weight: 800;
    color: rgba(242, 242, 242, 0.96);
`
const NFTOwner = styled.a`
    font-size: 0.8em;
    color: #fbdb37;
    text-decoration: none;
    cursor: pointer;
`
const OpenSeaButton = styled(animated.button)`
    height: auto;
    width: 100%;
    align-self: center;
    text-decoration: none;
    cursor: pointer;
    color: #fbfbfb;
    font-size: 0.8em;
    font-weight: 600;
    margin: 0.2em;
    margin-top: 0.6em;
    box-shadow: var(--shadow-elevation-low);
    background-color: rgba(80, 56, 166, 0.2);
    border: 1px solid rgba(80, 56, 166, 1);
    border: 4px solid #f7931e;
    border-radius: 12px;
    background: rgba(247, 147, 30, 0.3);
    padding: 4px;

    &:select {
        box-shadow: 0;
    }
`
const UserNFTRow = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 0.5em 0.5em;
    height: auto;
    width: auto; 
    place-items: center;
`
const ViewButton = styled(MintButton)`
    font-size: 2em;
`

function CollectionCard({ collection, id }) {
    const [openSeaAnimeTrigger, setOpenSeaAnimeTrigger] = useState(false)
    const openSeaAnimeStyle = useSpring({
        transform: openSeaAnimeTrigger ? `scale(1.08)` : `scale(1)`,
        background: openSeaAnimeTrigger  ? `rgba(247, 147, 30, 0.6)` : `rgba(247, 147, 30, 0.3)`,
        config: {
            tension: 180,
            friction: 15
        }
    })
    const handleButtonTrigger = () => {
        setOpenSeaAnimeTrigger( prev => !prev )
    }

    return (
        <>
        <CollectionItemCard>
                <NFTImage src={collection.displayImage.url} />
                <NFTTitle>{collection.collectionName + ' ' + '#' + id}</NFTTitle>
            <NFTOwner target="_blank" href={`https://polygonscan.com/address/${'0x395977E98105A96328357f847Edc75333015b8f4'}`}>{`Owner: ${truncateAddress("0x0x395977E98105A96328357f847Edc75333015b8f4", true)}`}</NFTOwner>
            <OpenSeaButton
                style={openSeaAnimeStyle}
                onMouseEnter={handleButtonTrigger}
                onMouseLeave={handleButtonTrigger}
            >
                OpenSea
            </OpenSeaButton>
        </CollectionItemCard>
        </>
    )
}


const NFTStatLayout = ({ collection }) => {
    const {account, active} = useWeb3React()
    const [contract] = useFetchContract(collection.contractAddress, NFTCONTRACT.abi)
    const [userNFTs, setUserNFTs] = useState([])
    const [loadAll, setLoadAll] = useState(false)
    const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    
    useEffect(() => {
        if (contract && account) {
            const fetchUserNFTs = async (_contract, _account) => {
                try {
                    const data = await _contract.walletOfOwner(_account)
                    const cleaned = data.map( (nft) => {
                        console.log("IM RON BURG")
                        console.log(nft)
                        const int = parseInt(nft._hex)
                        return int
                    })
                    setUserNFTs(cleaned)
                } catch ( err ) {console.log(err)}
            }

            fetchUserNFTs(contract, account)

        }

     
    }, [contract, account])

    //animation
    const [loadAnimeTrigger, setLoadAnimeTrigger] = useState(false)

    const loadButtonStyle = useSpring({
        transform: loadAnimeTrigger ? `scale(1.2)` : `scale(1)`,
        config: {
            tension: 300,
            friction: 10
        }
    })


    const handleLoadAnime = () => {
        setLoadAnimeTrigger( prev => !prev )
    }

    const [gridAnimeTrigger, setGridAnimeTrigger] = useState(false)

    const gridButtonStyle = useSpring({
        opacity: gridAnimeTrigger ? `100%` : `0%`,

    })


    const handleGridAnime = () => {
        setGridAnimeTrigger( prev => !prev )
    }


    const handleLoadAll = () => {
        setLoadAll(true)
        handleGridAnime()
    }

    //mappings

    const NFTs = fakeData.map( (nft, id) => {
        return (
            <CollectionCard collection={collection} id={id}/>
        )
    })

    let UserNFTs;
    if (userNFTs.length > 0) {
        UserNFTs = userNFTs.map( ( nft, id ) => (
            <CollectionCard collection={collection} id={nft} />
        ))
    }

    return (
        <>
        <DisplayContainer>
            <MyCollectionCard>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", alignContent: "center", justifyContent: "center", width: "100%", height: "auto", marginBottom: "2em"}}>
                    <AiFillSetting style={{fontSize: "1.8em", color: "rgba(242, 242, 242, 0.8)", marginRight: "0.6em"}}></AiFillSetting>
                    <h2 style={{fontSize: "1.4em", color: "rgba(242, 242, 242, 0.8)", fontWeight: "800"}}>Manage Yours</h2>
                </div>
                {
                active && userNFTs.length > 0
                ? <UserNFTRow>{UserNFTs}</UserNFTRow>
                : <ConnectButton />
                }
            </MyCollectionCard>
            <ViewButton
            style={loadButtonStyle} 
            onMouseEnter={handleLoadAnime}
            onMouseLeave={handleLoadAnime}
            onClick={() => handleLoadAll()}
            >View Entire Collection</ViewButton>
        </DisplayContainer>
        {
            loadAll == true
            ? 
            <CollectionDisplayGrid>
            {NFTs}
            </CollectionDisplayGrid>
            :
            null
        }  

        </>
    )
}


export default NFTStatLayout
