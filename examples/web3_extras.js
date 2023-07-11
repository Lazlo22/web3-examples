const {rpcURL} = require('../config/index');
const Web3 = require('web3');

const web3 = new Web3(rpcURL);

// Get average gas price in wei from last few blocks median gas price
web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, 'ether'));
});

// Use sha256 Hashing function
console.log(web3.utils.sha3('Hello world!'));

// Use keccak256 Hashing function (alias)
console.log(web3.utils.keccak256('Hello world!'));

// Get a Random Hex
console.log(web3.utils.randomHex(32));
