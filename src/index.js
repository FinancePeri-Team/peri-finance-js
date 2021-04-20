import { utils } from 'ethers';

import PeriFinanceJsBase from './PeriFinanceJsBase';
import Trezor from '../lib/signers/trezorSigner';
import Metamask from '../lib/signers/metamaskSigner';
import Ledger from '../lib/signers/ledgerSigner';
import Coinbase from '../lib/signers/coinbaseSigner';
import PrivateKey from '../lib/signers/privateKeySigner';
import WalletConnect from '../lib/signers/walletConnectSigner';
import Portis from '../lib/signers/portisSigner';

const signers = {
  Trezor,
  Ledger,
  Metamask,
  PrivateKey,
  Coinbase,
  WalletConnect,
  Portis,
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
