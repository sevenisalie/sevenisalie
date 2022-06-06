import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import {HiChevronDoubleUp, HiChevronDoubleDown} from "react-icons/hi"
import {FaTicketAlt, FaCoins} from "react-icons/fa"

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

const NFTFooterBadge = styled(MultiplierBadge)`
    width: 100%;
    height: 100%;
    padding: 0.5em;
    margin-bottom: 0px;
    margin-top: 0px;
`

const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: #fbdb37;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }
  & > svg {
    margin-left: 4px;
  }
`

const DetailsButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 12px;
`

const DetailsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const DetailsGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;

    place-items: center;
    column-gap: 2px;
    row-gap: 3px;

`

const DetailsDropDownGrid = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
 
    place-items: center;
    column-gap: 2px;
    row-gap: 12px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        flex-direction: column;
        grid-template-columns: auto;
        grid-template-rows: auto;
    }

`

export const NFTFooter = ({ count, collection}) => {
    const [isOpen, setIsOpen] = useState(false)



    const handleDetailsOnClick = () => {
        setIsOpen( prev => !prev)
    }
    return (
        <>
             
        <DetailsButtonWrapper>
            <StyledDetailsButton style={{justifyContent: "flex-end"}} onClick={handleDetailsOnClick}>
                Details{isOpen ? <HiChevronDoubleUp/> : <HiChevronDoubleDown/>}
            </StyledDetailsButton>
        </DetailsButtonWrapper>

        { isOpen
            ?
            <DetailsDropDownGrid>
            

          
            
                <DetailsGrid>
                    <NFTFooterBadge><p style={{fontSize: "1.2em", marginBottom: "0.3em", marginTop: "0.3em"}}>{`42%`} Reinvestment</p></NFTFooterBadge>
                    <NFTFooterBadge><p style={{fontSize: "1.2em", marginBottom: "0.3em", marginTop: "0.3em"}}>artist: sevenisalie</p></NFTFooterBadge>
                    <NFTFooterBadge><p style={{fontSize: "1.2em", marginBottom: "0.3em", marginTop: "0.3em"}}>Remaining: {count}/42</p></NFTFooterBadge>
                    <FaTicketAlt style={{color: "#fbdb37", fontSize: "200%"}}></FaTicketAlt>
                </DetailsGrid>

            

            </DetailsDropDownGrid>
            :
            null
          
        }

        </>
    )
}

export default NFTFooter
