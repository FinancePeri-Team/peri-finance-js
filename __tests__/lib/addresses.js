import ContractSettings from '../../src/contractSettings';
import addresses from '../../lib/addresses';
import * as peri from '@perifinance/peri-finance';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/addresses', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same addresses and those in PERI package`, () => {
      Object.entries(addresses[networkId]).forEach(([contract, address]) => {
        expect(address).toEqual(peri.getTarget({ network, contract }).address);
      });
    });
  });
});
