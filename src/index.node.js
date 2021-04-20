import { utils, providers } from 'ethers';

import PeriFinanceJsBase from './PeriFinanceJsBase';
import PrivateKey from '../lib/signers/privateKeySigner';

const signers = {
  PrivateKey,
};

export class PeriFinanceJs extends PeriFinanceJsBase {
  /**
   * Creates instances of PeriFinance contracts based on ContractSettings.
   * Usage example:
   * const {PeriFinanceJs} = require('PeriFinanceJs');
   * const perijs = new PeriFinanceJs(); //uses default ContractSettings - ethers.js default provider, mainnet
   * const totalSupply = await perijs.PeriFinance.totalSupply();
   * @constructor
   * @param contractSettings {ContractSettings}
   */
  constructor(contractSettings) {
    super(contractSettings, signers);
  }
}

PeriFinanceJs.signers = signers;
PeriFinanceJs.utils = utils; // shortcut to ethers utils without having to create instance
PeriFinanceJs.providers = providers;
