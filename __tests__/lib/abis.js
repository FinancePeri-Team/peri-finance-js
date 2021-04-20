import ContractSettings from '../../src/contractSettings';
import abis from '../../lib/abis';
import * as peri from '@financeperi-team/peri-finance';

const { SUPPORTED_NETWORKS } = ContractSettings;
describe('lib/abis', () => {
  Object.values(SUPPORTED_NETWORKS).forEach(network => {
    test(`${network} all found ABIs exist in PERI package`, () => {
      Object.entries(abis[network]).forEach(([contract, abiEntry]) => {
        expect(abiEntry).toEqual(peri.getSource({ network, contract }).abi);
      });
    });
  });
});
