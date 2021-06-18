'use strict';

const { PeriFinanceJs } = require('../dist/main.node.js');

const { getDefaultProvider, Wallet, ethers } = require('ethers');
const wallet = Wallet.createRandom();

const mumbaiNetwork = {
  networkId: 80001,
  networkName: 'mumbai',
};

const mumbaiProvider = new ethers.providers.JsonRpcProvider(
  'https://rpc-mumbai.maticvigil.com/v1/c5e88b495fa51a03f110ec4b047f2802933d625d'
);

const perijs = new PeriFinanceJs({
  provider: mumbaiProvider,
  signer: new PeriFinanceJs.signers.PrivateKey(mumbaiProvider, mumbaiNetwork, wallet.privateKey),
  networkId: mumbaiNetwork.networkId, // kovan
});

(async function() {
  const totalPERI = await perijs.PeriFinance.totalSupply();
  const periTotalSupply = perijs.utils.formatEther(totalPERI);
  console.log(
    'PERITotalSupply on ',
    perijs.contractSettings.network.toUpperCase(),
    periTotalSupply
  );
  const pynths = perijs.contractSettings.pynths.map(({ name }) => name).join(',');
  console.log('Supported pynths: ', pynths);
})();
