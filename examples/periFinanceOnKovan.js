'use strict';

const { PeriFinanceJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet } = require('ethers');
const wallet = Wallet.createRandom();
const perijs = new PeriFinanceJs({
  signer: new PeriFinanceJs.signers.PrivateKey(getDefaultProvider('kovan'), 42, wallet.privateKey),
  networkId: 42, // kovan
});

(async function() {
  const totalPERI = await perijs.PeriFinance.totalSupply();
  const periTotalSupply = perijs.utils.formatEther(totalPERI);
  console.log('PERITotalSupply on ', perijs.contractSettings.network.toUpperCase(), periTotalSupply);
  const pynths = perijs.contractSettings.pynths.map(({ name }) => name).join(',');
  console.log('Supported pynths: ', pynths);
})();
