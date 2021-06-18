import { PeriFinanceJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as peri from '@perifinance/peri-finance';
import { providers } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Pynth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    if (network === 'rinkeby' || network === 'goerli' || network === 'ropsten') return;
    let perijs;
    beforeAll(() => {
      let provider;
      if (network === 'mumbai') {
        provider = new providers.JsonRpcProvider(
          'https://rpc-mumbai.maticvigil.com/v1/c5e88b495fa51a03f110ec4b047f2802933d625d'
        );
      }
      perijs = new PeriFinanceJs({ networkId, provider });
    });

    ['pUSD', 'pBTC', 'iBTC', 'pETH', 'iETH', 'pAUD'].forEach(pynth => {
      describe(pynth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(perijs[pynth].contract.address).toEqual(
              peri.getTarget({ network, contract: `Proxy${pynth}` }).address
            );
          };
        });

        test(`${network} Should have correct ABI`, () => {
          () => {
            expect(perijs[pynth].contract.interface.abi).toEqual(
              peri.getSource({ network, contract }).abi
            );
          };
        });
      });
    });
  });
});
