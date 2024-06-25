import { ethers } from "./ethers-5.6.esm.min.js"
import {abi, contractAddress} from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
const balanceButton = document.getElementById("balanceButton")
const withdrawButton = document.getElementById("withdrawButton")
connectButton.onclick = connect
balanceButton.onclick = getBalance
fundButton.onclick = fund
withdrawButton.onclick = withdraw
console.log(ethers)
//connect with provider function
async function connect() {
    if(typeof window.ethereum !== "undefined"){
        await window.ethereum.request({method: "eth_requestAccounts"})
        connectButton.innnerHTML = "connected!!"
    }else{
        connectButton.innnerHTML = "install metamask"
    }
}

//get balance function
async function getBalance() {
    if(typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const balance = await provider.getBalance(contractAddress)
        console.log(ethers.utils.formatEther(balance))
    }
}

//fund function
async function fund() {
    const ethAmount = document.getElementById("ethAmount").value
    console.log(`Funding with ${ethAmount}.....`)
    if(typeof window.ethereum !== "undefined"){
        //provider / connection to the blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        //signer / wallet /someone with gas
        const signer = provider.getSigner()
        console.log(signer);

        //contract that we are interacting with
        //ABI, ^ Address
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
        const transactionResponse = await contract.fund({value: ethers.utils.parseEther(ethAmount)})
        //listen for tx for be  mined
        //listed for an event << we have'nt learned about 

        await listenForTransactionMine(transactionResponse, provider)
        console.log("done")
        }catch(error){
            console.log(error)
        }
    }
}
function listenForTransactionMine(transactionResponse, provider) {
    console.log(`mining${transactionResponse.hash}....`)
    //listen for this transaction to finish
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(`Completed with ${transactionReceipt.confirmations} comfirmations`)
            resolve()
        })
    })
    
}


//withdraw function
async function withdraw(){
    if(typeof window.ethereum != "undefined") {
        console.log("withdrawing...")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.withdraw()
            await listenForTransactionMine(transactionResponse, provider)
        }catch(error){
            console.log(error)
        }     
    }
}