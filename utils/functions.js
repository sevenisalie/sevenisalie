import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";

import GoodToast from "../components/elements/toast/toast"


export const dateToHumanReadable = (_Date) => {
    const raw = new Date(_Date)
    const human = raw.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
    return human 
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const truncateAddress = (_account, active) => {
    let shortAddress = ""
    if (active) {
        shortAddress = _account.substring(0,7);
    } else {
        shortAddress = "Connect"
    }
    return shortAddress    
}

//web3 reusables

export const writeContract = async (active, _signer, _account, _address, _abi) => {
    if (active) {
        try {
            const ctr = new ethers.Contract(_address, _abi, _signer)
            if (ctr.address) {
                return ctr
            } 
        } catch (err) {console.log(err)}
    }
}

export const handleMint = async (_contract) => {
    GoodToast(`Confirm Transaction`)
    const mintAmount = 1
    const tx = await _contract.mint(mintAmount, {value: ethers.utils.parseUnits("0.0042", 18)})
    const receipt = await tx.wait()

    if (receipt.status === 1) {
        GoodToast(`Congrats! 🎉 \n https://opensea.io/account 👈`)
        return 
    }
}

export const fetchUserNFTs = async (_contract, _account) => {
    const data = await _contract.walletOfOwner(_account)
    return data
}



export const fetchAllNFTs = async (_contract, _account) => {
    const supply = await _contract.totalSupply()
    const supplyInt = parseInt(supply._hex) + 1 //shift index to the right cuz nft 0 doesnt exist
    const mintedArray = [...Array(supplyInt).keys()]
    const mintedNFTs = mintedArray.slice(1, supplyInt)
    const minted = mintedNFTs.map( async ( nft ) => {
        const _owner = await _contract.ownerOf(nft)

        return {
            id: nft,
            owner: _owner
        }
    })
    const data = await Promise.all(minted)

    return data
}

export const fetchNFTCount = async (_contract) => {
    try {
        const rawSupply = await _contract.totalSupply()
        const supply = parseInt(rawSupply._hex)
        return supply
    } catch (err) {
        console.log(err)
        return null
    }
}