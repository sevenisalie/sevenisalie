import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import {useSpring, animated} from "react-spring"
import {truncateAddress} from "../../../utils/functions"
import GoodToast from "../toast/toast"


//web3 shit
import {InjectedConnector} from "@web3-react/injected-connector";
import { ethers, getSigner } from "ethers";
import {useWeb3React} from "@web3-react/core";
import WalletCard from './WalletCard';

export const injected = new InjectedConnector({
    supportedChainIds: [1, 137],
})


export const TheButton = styled(animated.button)`
    align-self: center;
    border: 4px solid #f7931e;
    border-radius: 12px;
    background: rgba(247, 147, 30, 0.3);
    padding: 4px;
    text-decoration: none;
    cursor: pointer;
    color: #fbfbfb;
    width: auto;
    height: auto;
    font-weight: 600;
    // -webkit-box-shadow: -2px 10px 26px -1px rgba(0,0,0,0.28);
    // -moz-box-shadow: -2px 10px 26px -1px rgba(0,0,0,0.28);
    // box-shadow: -2px 10px 26px -1px rgba(0,0,0,0.28);
    @media (max-width: 768px) {
        
     }
     @media (max-width: 300px) {
        
     }
    &:hover {
        border-width: 4px;
        border-color: #da7908;
        border-radius: 12px;
        font-weight: 600;
        color: #fbfbfb;
        background-color: #f7931e;
        background: linear-gradient(226deg, rgba(235,121,36, 0.3), rgba(224,80,60, 0.3), rgba(246,138,21, 0.3), rgba(224,80,60, 0.3), rgba(246,138,21, 0.3), rgba(239,161,15, 0.3), rgba(242,211,0, 0.3), rgba(242,126,0, 0.3));
        background-size: 800% 800%;
        -webkit-animation: ButtonGradient 8s ease infinite;
        -moz-animation: ButtonGradient 8s ease infinite;
        animation: ButtonGradient 8s ease infinite;
        }
        @-webkit-keyframes ButtonGradient {
        0%{background-position:0% 19%}
        50%{background-position:100% 82%}
        100%{background-position:0% 19%}
        }
        @-moz-keyframes ButtonGradient {
        0%{background-position:0% 19%}
        50%{background-position:100% 82%}
        100%{background-position:0% 19%}
        }
        @keyframes ButtonGradient {
        0%{background-position:0% 19%}
        50%{background-position:100% 82%}
        100%{background-position:0% 19%}
    } 
`

export const ConnectButton = () => {
    const { active, account, library, connector, provider, activate, deactivate } = useWeb3React();
    const [toggleModal, setToggleModal] = useState(false)
    const [shortAddress, setShortAddress] = useState("0x")

    useEffect(() => {
        if (account) {
            const brev = truncateAddress(account, true)
            setShortAddress(brev)
        }
    }, [account])

    useEffect( () => {
        if (account === undefined)  {
            handleEagerConnect(injected);
        }
    }, [])

    const isMetaMaskInstalled = async () => {
        const { ethereum } = window
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    const handleEagerConnect = async (connector) => {
        try {
            await activate(connector);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            // modalToggle()
            GoodToast(`Connected to ${account}`)

        } catch (err) {console.log(err)}
    }

    const handleConnect = async (connector) => {
        modalToggle()
        const isMetaMask = await isMetaMaskInstalled()

        if (isMetaMask === false) {
            GoodToast(`Please Install MetaMask 🦊`)
        }

        if (isMetaMask === true) {
            
            try {
                await activate(connector);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                // modalToggle()
                GoodToast(`Connected to ${account}`)
    
            } catch (err) {console.log(err)}
        }


    }

    const handleDisconnect = async () => {
        const leavingAccount = account

        try {
            deactivate(injected);
            GoodToast(`Disconnected from ${leavingAccount}`)
        } catch (err) {console.log(err)}
    }

    const modalToggle = () => {
        setToggleModal( prev => !prev)
    }

    return (
        <>
        <WalletCard handleConnect={handleConnect} showDepositModal={toggleModal} setShowDepositModal={modalToggle} />

        { !active ? 
        <>
        <TheButton onClick={() => modalToggle()} >Connect</TheButton>
        </>
        :
        <>
        <TheButton library={library} onClick={() => handleDisconnect()} >{shortAddress}</TheButton>
        </>
        }
        </>
    )
}

export default ConnectButton
