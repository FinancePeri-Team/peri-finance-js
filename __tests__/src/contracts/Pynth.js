import { PeriFinanceJs } from '../../../src/index.node.js';
import ContractSettings from '../../../src/contractSettings';
import * as peri from '@perifinance/peri-finance';
import { providers } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

const contract = 'Pynth';

describe(`src/contracts/${contract}`, () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    if (['rinkeby', 'goerli', 'ropsten'].includes(network)) return;
    let perijs;
    beforeAll(() => {
      perijs = new PeriFinanceJs({ networkId });
    });

    ['pUSD'].forEach(pynth => {
      describe(pynth, () => {
        test(`${network} Should have correct address and ABI`, () => {
          () => {
            expect(perijs[pynth].contract.address).toEqual(
              peri.getTarget({ network, contract: `ProxyERC20${pynth}` }).address
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
