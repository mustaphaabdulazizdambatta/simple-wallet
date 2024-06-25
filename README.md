yarn add --dev http-server

you need smart-contract-with-hardhat first

go to smart-contract-with-hardhat / artifacts / contracts / SimpleStorage.sol 

copy this `
"inputs": [],
      "name": "add",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "favoriteNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "people",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "favoriteNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "retrieve",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_favoriteNumber",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  `
  save it as constants.js
  constants.js contains your contract address and abi data
  you also need to smart-contract-with-hardhat with this command `yarn hardhat node`
(http://127.0.0.1:8545/) , chainId(31337), Currency symbol(ETH) and the your account privatekey and your metamask network secretkey
