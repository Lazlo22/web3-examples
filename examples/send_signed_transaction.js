const {rpcURL} = require('../config/index');
const Tx = require('ethereumjs-tx');
const Web3 = require('web3');

const web3 = new Web3(rpcURL);

const senderAccountAddress = ''; // Sender account address
const receiverAccountAddress = ''; // Receiver account address
const senderPrivateKey = Buffer.from('YOUR_PRIVATE_KEY_1', 'hex'); // Sender private key

web3.eth.getTransactionCount(senderAccountAddress, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: receiverAccountAddress,
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  };

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(senderPrivateKey);

  const serializedTx = tx.serialize();
  const raw = '0x' + serializedTx.toString('hex');

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash);
  });
});
