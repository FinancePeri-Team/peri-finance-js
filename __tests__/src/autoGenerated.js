import * as peri from '@perifinance/peri-finance';
import { PeriFinanceJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';
import { providers } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    if (network === 'rinkeby' || network === 'goerli' || network === 'ropsten') return;
    describe(network, () => {
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

      Object.entries(contracts).forEach(([contract, settings]) => {
        describe(contract, () => {
          test(`${network} Should have correct address `, () => {
            () => {
              const targetContract =
                typeof settings === 'object' ? settings.target || contract : contract;

              expect(perijs[contract].contract.address).toEqual(
                peri.getTarget({ network, contract: targetContract }).address
              );
            };
          });

          test(`${network} Should have correct ABI`, () => {
            () => {
              const source = typeof settings === 'object' ? settings.source || contract : contract;

              expect(perijs[contract].contract.interface.abi).toEqual(
                peri.getSource({ network, contract: source }).abi
              );
            };
          });
        });
      });
    });
  });
});
