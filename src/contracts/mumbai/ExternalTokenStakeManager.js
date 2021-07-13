import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mumbai/ExternalTokenStakeManager';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function ExternalTokenStakeManager(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['ExternalTokenStakeManager'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32
   **/
  this.CONTRACT_NAME = async () => {
    return await this.contract.CONTRACT_NAME();
  };

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
   * @param _user {String<EthAddress>}
   * @param _unitCurrency {bytes32}
   * @returns BigNumber
   **/
  this.combinedStakedAmountOf = async (_user, _unitCurrency) => {
    return await this.contract.combinedStakedAmountOf(_user, _unitCurrency);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns bytes32
   **/
  this.currencyKeyOrder = async uint256_1 => {
    return await this.contract.currencyKeyOrder(uint256_1);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.getCurrencyKeyOrder = async () => {
    return await this.contract.getCurrencyKeyOrder();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _currencyKey {bytes32}
   * @returns boolean
   **/
  this.getTokenActivation = async _currencyKey => {
    return await this.contract.getTokenActivation(_currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _currencyKey {bytes32}
   * @returns Number
   **/
  this.getTokenDecimals = async _currencyKey => {
    return await this.contract.getTokenDecimals(_currencyKey);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.getTokenList = async () => {
    return await this.contract.getTokenList();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.isResolverCached = async () => {
    return await this.contract.isResolverCached();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _accounts {address[]}
   * @param txParams {TxParams}
  
   **/
  this.migrateStakedAmounts = async (_accounts, txParams) => {
    txParams = txParams || {};
    return await this.contract.migrateStakedAmounts(_accounts, txParams);
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
   * @param txParams {TxParams}
  
   **/
  this.rebuildCache = async txParams => {
    txParams = txParams || {};
    return await this.contract.rebuildCache(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.resolver = async () => {
    return await this.contract.resolver();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.resolverAddressesRequired = async () => {
    return await this.contract.resolverAddressesRequired();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _stakingState {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setStakingState = async (_stakingState, txParams) => {
    txParams = txParams || {};
    return await this.contract.setStakingState(_stakingState, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _stakingStateUSDC {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setStakingStateUSDC = async (_stakingStateUSDC, txParams) => {
    txParams = txParams || {};
    return await this.contract.setStakingStateUSDC(_stakingStateUSDC, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _order {bytes32[]}
   * @param txParams {TxParams}
  
   **/
  this.setUnstakingOrder = async (_order, txParams) => {
    txParams = txParams || {};
    return await this.contract.setUnstakingOrder(_order, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.setupExpiryTime = async () => {
    return await this.contract.setupExpiryTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _staker {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param _targetCurrency {bytes32}
   * @param _inputCurrency {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.stake = async (_staker, _amount, _targetCurrency, _inputCurrency, txParams) => {
    txParams = txParams || {};
    return await this.contract.stake(_staker, _amount, _targetCurrency, _inputCurrency, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param _user {String<EthAddress>}
   * @param _currencyKey {bytes32}
   * @param _unitCurrency {bytes32}
   * @returns BigNumber
   **/
  this.stakedAmountOf = async (_user, _currencyKey, _unitCurrency) => {
    return await this.contract.stakedAmountOf(_user, _currencyKey, _unitCurrency);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.stakingState = async () => {
    return await this.contract.stakingState();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.stakingStateUSDC = async () => {
    return await this.contract.stakingStateUSDC();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _unstaker {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param _targetCurrency {bytes32}
   * @param _inputCurrency {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.unstake = async (_unstaker, _amount, _targetCurrency, _inputCurrency, txParams) => {
    txParams = txParams || {};
    return await this.contract.unstake(
      _unstaker,
      _amount,
      _targetCurrency,
      _inputCurrency,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _unstaker {String<EthAddress>}
   * @param _amount {BigNumber}
   * @param _inputCurrency {bytes32}
   * @param txParams {TxParams}
  
   **/
  this.unstakeMultipleTokens = async (_unstaker, _amount, _inputCurrency, txParams) => {
    txParams = txParams || {};
    return await this.contract.unstakeMultipleTokens(_unstaker, _amount, _inputCurrency, txParams);
  };
}

export default ExternalTokenStakeManager;
