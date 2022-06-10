import React, {useState, useEffect} from 'react'
import {ethers} from "ethers"
import styled from "styled-components"
import {useWeb3React} from "@web3-react/core"
import {animated, useSpring} from "react-spring"
import {HeaderButton} from "../../pages/index"
import {AiFillSetting} from "react-icons/ai"
import {truncateAddress, getRandomInt, fetchAllNFTs} from "../../utils/functions"
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
        padding: 0.8em;
    }
`
const CollectionDisplayGrid = styled(animated.div)`
    width: max-content;
    height: auto;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 0.8em 1.8em; 
    place-items: center;
    margin-bottom: 2em;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr; 
    }
    @media (max-width: 464px) {
        grid-template-columns: 1fr; 
    }
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
const DisplayCollectionItemCard = styled(CollectionItemCard)`
    width: max-content;
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
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: auto; 
    gap: 0.5em 0.5em;
    height: auto;
    width: auto; 
    place-items: center;

    @media (max-width: 540px) {
        grid-template-columns: 1fr 1fr; 
    }
`
const ViewButton = styled(MintButton)`
    font-size: 1em;
    align-self: flex-start;
    margin: 0;
`
const ViewButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;
    padding: 2em;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    column-gap: 3em;
`
const LoadButton = styled(MintButton)`
    width: 60%;
    background-opacity: 40%;
    background-color: rgba(80, 56, 166, 0.33);
    border: 2px solid rgba(255, 240, 135, 1);
    box-shadow: var(--shadow-elevation-high);
    margin-right: auto;
    margin-left: auto;

    &:hover {
        background-color: rgba(80, 56, 166, 0.65);
        border: 2px solid rgba(255, 240, 135, 1);
    }

    &:select {
        box-shadow: var(--shadow-elevation-low);
    }
`
function CollectionCard({ user, collection, nft, id, style }) {
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
        <CollectionItemCard style={style}>
                <NFTImage src={collection.displayImage.url} />
                <NFTTitle>{collection.collectionName + ' ' + '#' + nft}</NFTTitle>
                {user !== undefined &&
                <NFTOwner target="_blank" rel="noreferrer" href={`https://polygonscan.com/address/${user}`}>{`Owner: ${truncateAddress(user, true)}`}</NFTOwner>

                }
            <a target={"_blank"} rel="noreferrer" href={`https://opensea.io/assets/matic/0x5b5707bd04b74bd624692b75b6f1eeda5f4806ed/${nft}`} style={{width: "100%"}}>
                <OpenSeaButton
                    style={openSeaAnimeStyle}
                    onMouseEnter={handleButtonTrigger}
                    onMouseLeave={handleButtonTrigger}
                >
                    OpenSea
                </OpenSeaButton>
            </a>

        </CollectionItemCard>
        </>
    )
}

function DisplayCollectionCard({ collection, nft, style }) {
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
        <DisplayCollectionItemCard >
                <NFTImage style={{width: "12em"}} src={collection.displayImage.url} />
                <NFTTitle>{collection.collectionName + ' ' + '#' + nft.id}</NFTTitle>
                { nft.owner !== undefined &&
                <NFTOwner target="_blank" rel="noreferrer" href={`https://polygonscan.com/address/${nft.owner}`}>{`Owner: ${truncateAddress(nft.owner, true)}`}</NFTOwner>
                }
            <a target={"_blank"} rel="noreferrer" href={`https://opensea.io/assets/matic/0x5b5707bd04b74bd624692b75b6f1eeda5f4806ed/${nft.id}`} style={{width: "100%"}}>
            <OpenSeaButton
                style={openSeaAnimeStyle}
                onMouseEnter={handleButtonTrigger}
                onMouseLeave={handleButtonTrigger}
            >
                OpenSea
            </OpenSeaButton>
            </a>
        </DisplayCollectionItemCard>
        </>
    )
}


const NFTStatLayout = ({ collection }) => {
    const {account, active} = useWeb3React()
    const [contract] = useFetchContract(collection.contractAddress, NFTCONTRACT.abi)
    const [userNFTs, setUserNFTs] = useState([])
    const [allNFTs, setAllNFTs] = useState([])
    const [loading, setLoading] = useState(true)

    const [loadAll, setLoadAll] = useState(false)
    const [displayData, setDisplayData] = useState([])
    const [page, setPage] = useState(0)
    const [resultsPerPage, setResultsPerPage] = useState(6)
    const [endPaginate, setEndPaginate] = useState(false)
    const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

    useEffect(() => {
        if (contract && account) {
            const fetchData = async () => {
                const data = await fetchAllNFTs(contract, account)

                return setAllNFTs(data)
            }
            try {
                fetchData()
            } catch (err) {console.log(err)}
        }
    }, [contract, account])
    
    useEffect(() => {
        if (contract && account) {
            const fetchUserNFTs = async (_contract, _account) => {
                try {
                    const data = await _contract.walletOfOwner(_account)
                    const cleaned = data.map( (nft) => {
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
    const paginateUp = (_allItems) => {
        const totalCount = _allItems.length //16
        const currentEnd = page * resultsPerPage
        const currentStart = currentEnd - resultsPerPage
        const shownItems = displayData
        const newPage = page + 1
        const newEnd = newPage * resultsPerPage
        const newStart = newEnd - resultsPerPage

        if (newEnd > totalCount) {
            const lastPage = parseInt(totalCount / resultsPerPage)
            const newDisplay = _allItems.slice(currentStart, totalCount)
            console.log("PROP")
            console.log(newDisplay)
            console.log("ERTY RIGHTS")
            setPage(lastPage)
            setDisplayData(newDisplay)
            console.log("REACHED END")
            console.log({
                pg: page,
                display: newDisplay
            })
            return setEndPaginate(true)
        } else {
            const newDisplay = _allItems.slice(newStart, newEnd)
            setPage(newPage)
            setDisplayData(newDisplay)
            return true
        }

    }

    const paginateDown = (_allItems) => {
        const totalCount = _allItems.length //16
        const currentEnd = page * resultsPerPage
        const currentStart = currentEnd - resultsPerPage
        const shownItems = displayData
        const newPage = page - 1
        const newEnd = newPage * resultsPerPage
        const newStart = newEnd - resultsPerPage

        if (newStart < 0) {
            const firstPage = parseInt(totalCount / resultsPerPage)
            const newDisplay = _allItems.slice(0, resultsPerPage)
            setPage(1)
            setDisplayData(newDisplay)
            console.log("REACHED END")
            console.log({
                pg: page,
                display: newDisplay
            })
            return setEndPaginate(false)
        } else {
            const newDisplay = _allItems.slice(newStart, newEnd)
            setPage(newPage)
            setDisplayData(newDisplay)
            setEndPaginate(false)
            return true
        }
    }

    const NFTs = displayData.map( (nft, id) => {

        return (
            <DisplayCollectionCard
             style={{rowGap: "1em"}} 
             collection={collection} 
             nft={nft}
             key={id}
             />
        )
    })

    let UserNFTs;
    if (userNFTs.length > 0) {
        UserNFTs = userNFTs.map( ( nft, id ) => (
            <CollectionCard user={account} collection={collection} nft={nft} key={id} />
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

        </DisplayContainer>

        <ViewButtonContainer>

        {
            page === 0
            ?
            <LoadButton
                onClick={() => paginateUp(allNFTs)}
            >
                View Entire Collection
            </LoadButton>
            :
            null
        }

        {
            page === 0
            ?
            null
            :
            <ViewButton
                style={loadButtonStyle} 
                onMouseEnter={handleLoadAnime}
                onMouseLeave={handleLoadAnime}
                onClick={() => paginateDown(allNFTs)}
            >previous
            </ViewButton>
        }
        {
            (endPaginate === true || page === 0)
            ?
            null
            :
            <ViewButton
                style={loadButtonStyle} 
                onMouseEnter={handleLoadAnime}
                onMouseLeave={handleLoadAnime}
                onClick={() => paginateUp(allNFTs)}
            >Next
            </ViewButton>
        }
        </ViewButtonContainer>

        {
            displayData.length > 0
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
