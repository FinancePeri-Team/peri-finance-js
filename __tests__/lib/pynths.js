import ContractSettings from '../../src/contractSettings';
import pynths from '../../lib/pynths';
import * as peri from '@financeperi-team/peri-finance';

const { SUPPORTED_NETWORKS } = ContractSettings;

describe('lib/pynths', () => {
  Object.entries(SUPPORTED_NETWORKS).forEach(([networkId, network]) => {
    test(`${network} has same pynths and those in PERI package`, () => {
      expect(pynths[networkId]).toEqual(peri.getPynths({ network }));
    });
  });
});
