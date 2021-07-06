import * as peri from '@perifinance/peri-finance';
import { PeriFinanceJs } from '../../src/index.node.js';
import ContractSettings from '../../src/contractSettings';
import { contracts } from '../../tools/abitojs';
import { providers } from 'ethers';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('auto-generated contracts', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    if (['rinkeby', 'goerli', 'ropsten'].includes(network)) return;
    describe(network, () => {
      let perijs;
      beforeAll(() => {
        perijs = new PeriFinanceJs({ networkId });
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
