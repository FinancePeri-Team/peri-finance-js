import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/kovan/PeriFinanceState';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function PeriFinanceState(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['PeriFinanceState'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.acceptOwnership = async txParams => {
    txParams = txParams || {};
    return await this.contract.acceptOwnership(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendDebtLedgerValue = async (value, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendDebtLedgerValue(value, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param value {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.appendPeriDebtLedgerValue = async (value, txParams) => {
    txParams = txParams || {};
    return await this.contract.appendPeriDebtLedgerValue(value, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.clearIssuanceData = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.clearIssuanceData(account, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.clearPeriIssuanceData = async (account, txParams) => {
    txParams = txParams || {};
    return await this.contract.clearPeriIssuanceData(account, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.debtLedger = async uint256_1 => {
    return await this.contract.debtLedger(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.debtLedgerLength = async () => {
    return await this.contract.debtLedgerLength();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.decrementTotalIssuerCount(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.decrementTotalPeriIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.decrementTotalPeriIssuerCount(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.hasIssued = async account => {
    return await this.contract.hasIssued(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns boolean
   **/
  this.hasPeriIssued = async account => {
    return await this.contract.hasPeriIssued(account);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.incrementTotalIssuerCount(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.incrementTotalPeriIssuerCount = async txParams => {
    txParams = txParams || {};
    return await this.contract.incrementTotalPeriIssuerCount(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.issuanceData = async address_1 => {
    return await this.contract.issuanceData(address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastDebtLedgerEntry = async () => {
    return await this.contract.lastDebtLedgerEntry();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.lastPeriDebtLedgerEntry = async () => {
    return await this.contract.lastPeriDebtLedgerEntry();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _owner {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.nominateNewOwner = async (_owner, txParams) => {
    txParams = txParams || {};
    return await this.contract.nominateNewOwner(_owner, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns BigNumber
   **/
  this.periDebtLedger = async uint256_1 => {
    return await this.contract.periDebtLedger(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.periDebtLedgerLength = async () => {
    return await this.contract.periDebtLedgerLength();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.periIssuanceData = async address_1 => {
    return await this.contract.periIssuanceData(address_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _associatedContract {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setAssociatedContract = async (_associatedContract, txParams) => {
    txParams = txParams || {};
    return await this.contract.setAssociatedContract(_associatedContract, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param initialDebtOwnership {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentIssuanceData = async (account, initialDebtOwnership, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCurrentIssuanceData(account, initialDebtOwnership, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param account {String<EthAddress>}
   * @param initialDebtOwnership {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setCurrentPeriIssuanceData = async (account, initialDebtOwnership, txParams) => {
    txParams = txParams || {};
    return await this.contract.setCurrentPeriIssuanceData(account, initialDebtOwnership, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalIssuerCount = async () => {
    return await this.contract.totalIssuerCount();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalPeriIssuerCount = async () => {
    return await this.contract.totalPeriIssuerCount();
  };
}

export default PeriFinanceState;
