'use strict';

const { PeriFinanceJs } = require('../dist/main.node.js');

(async function() {
  const perijs = new PeriFinanceJs(); //uses default ContractSettings - ethers.js default provider, mainnet
  const periPrice = perijs.utils.formatEther(await perijs.utils.getPeriFinancePrice());
  console.log('-------------------');
  console.log(`PERI price: ${periPrice}`);
  console.log('-------------------');
  console.log('PYNTH SUPPLY');
  console.log('-------------------');
  const { pynths } = perijs.contractSettings;

  pynths.forEach(async ({ name, sign, desc }) => {
    const totalAmount = await perijs[name].totalSupply();
    const totalSupply = perijs.utils.formatEther(totalAmount);
    console.log(`${desc} (${name}) ${sign}${totalSupply}`);
  });
})();
