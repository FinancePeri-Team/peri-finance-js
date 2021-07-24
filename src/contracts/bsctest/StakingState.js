import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/bsctest/StakingState';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function StakingState(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['StakingState'],
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
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.associatedContract = async () => {
    return await this.contract.associatedContract();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.getTokenCurrencyKeys = async () => {
    return await this.contract.getTokenCurrencyKeys();
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
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _account {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
   * @returns boolean
   **/
  this.refund = async (_currencyKey, _account, _amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.refund(_currencyKey, _account, _amount, txParams);
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
   * @param _currencyKey {bytes32}
   * @param _tokenAddress {String<EthAddress>}
   * @param _decimals {Number}
   * @param txParams {TxParams}
  
   **/
  this.setTargetToken = async (_currencyKey, _tokenAddress, _decimals, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTargetToken(_currencyKey, _tokenAddress, _decimals, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _activate {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setTokenActivation = async (_currencyKey, _activate, txParams) => {
    txParams = txParams || {};
    return await this.contract.setTokenActivation(_currencyKey, _activate, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _account {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.stake = async (_currencyKey, _account, _amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.stake(_currencyKey, _account, _amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.stakedAmountOf = async (bytes32_1, address_1) => {
    return await this.contract.stakedAmountOf(bytes32_1, address_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns Object
   **/
  this.targetTokens = async bytes32_1 => {
    return await this.contract.targetTokens(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _currencyKey {bytes32}
   * @returns boolean
   **/
  this.tokenActivated = async _currencyKey => {
    return await this.contract.tokenActivated(_currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _currencyKey {bytes32}
   * @returns String<EthAddress>
   **/
  this.tokenAddress = async _currencyKey => {
    return await this.contract.tokenAddress(_currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _currencyKey {bytes32}
   * @returns Number
   **/
  this.tokenDecimals = async _currencyKey => {
    return await this.contract.tokenDecimals(_currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.tokenList = async uint256_1 => {
    return await this.contract.tokenList(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns BigNumber
   **/
  this.totalStakedAmount = async bytes32_1 => {
    return await this.contract.totalStakedAmount(bytes32_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {bytes32}
   * @returns BigNumber
   **/
  this.totalStakerCount = async bytes32_1 => {
    return await this.contract.totalStakerCount(bytes32_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _currencyKey {bytes32}
   * @param _account {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.unstake = async (_currencyKey, _account, _amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.unstake(_currencyKey, _account, _amount, txParams);
  };
}

export default StakingState;
