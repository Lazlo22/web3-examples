// Retrieving account balance
const Web3 = require('web3');
const {rpcURL} = require('../config/index');

const web3 = new Web3(rpcURL);
const address = '0x8025e7549D7194d76D04bDc72B4e57ab3e2e4d59';

web3.eth.getBalance(address, (err, wei) => { console.log(web3.utils.fromWei(wei, 'ether')); });
