import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/mainnet/Depot';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Depot(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Depot'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForPERI = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForPERI(txParams);
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
   * @returns BigNumber
   **/
  this.minimumDepositAmount = async () => {
    return await this.contract.minimumDepositAmount();
  };

  /**
   * Exchange ETH to pUSD while insisting on a particular rate. This allows a user to exchange while protecting against frontrunning by the contract owner on the exchange rate.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForPynthsAtRate = async (guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForPynthsAtRate(guaranteedRate, txParams);
  };

  /**
   * Calculate how many pynths you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.pynthsReceivedForEther = async amount => {
    return await this.contract.pynthsReceivedForEther(amount);
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
   * Transaction (consumes gas, requires signer)
   * @param _paused {boolean}
   * @param txParams {TxParams}
  
   **/
  this.setPaused = async (_paused, txParams) => {
    txParams = txParams || {};
    return await this.contract.setPaused(_paused, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * Exchange ETH to pUSD.<br>
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForPynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForPynths(txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _beneficiary {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setSelfDestructBeneficiary = async (_beneficiary, txParams) => {
    txParams = txParams || {};
    return await this.contract.setSelfDestructBeneficiary(_beneficiary, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.fundsWallet = async () => {
    return await this.contract.fundsWallet();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.terminateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.terminateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.totalSellableDeposits = async () => {
    return await this.contract.totalSellableDeposits();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _resolver {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setResolver = async (_resolver, txParams) => {
    txParams = txParams || {};
    return await this.contract.setResolver(_resolver, txParams);
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
   * @returns boolean
   **/
  this.paused = async () => {
    return await this.contract.paused();
  };

  /**
   * Set the funds wallet where ETH raised is held.<br>
   * Transaction (consumes gas, requires signer)
   * @param _fundsWallet {String<EthAddress>}
   * @param txParams {TxParams}
  
   **/
  this.setFundsWallet = async (_fundsWallet, txParams) => {
    txParams = txParams || {};
    return await this.contract.setFundsWallet(_fundsWallet, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositStartIndex = async () => {
    return await this.contract.depositStartIndex();
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
   * Allows a user to withdraw all of their previously deposited pynths from this contract if needed. Developer note: We could keep an index of address to deposits to make this operation more efficient but then all the other operations on the queue become less efficient. It's expected that this function will be very rarely used, so placing the inefficiency here is intentional. The usual use case does not involve a withdrawal.<br>
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.withdrawMyDepositedPynths = async txParams => {
    txParams = txParams || {};
    return await this.contract.withdrawMyDepositedPynths(txParams);
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
   * @returns BigNumber
   **/
  this.lastPauseTime = async () => {
    return await this.contract.lastPauseTime();
  };

  /**
   * Transaction (consumes gas, requires signer)
<br>Payable (to enter ETH amount set txParams.value)
   * @param guaranteedEtherRate {BigNumber}
   * @param guaranteedPeriFinanceRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangeEtherForPERIAtRate = async (
    guaranteedEtherRate,
    guaranteedPeriFinanceRate,
    txParams
  ) => {
    txParams = txParams || {};
    return await this.contract.exchangeEtherForPERIAtRate(
      guaranteedEtherRate,
      guaranteedPeriFinanceRate,
      txParams
    );
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.selfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.selfDestruct(txParams);
  };

  /**
   * Calculate how many PERI you will receive if you transfer an amount of pynths.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.periFinanceReceivedForPynths = async amount => {
    return await this.contract.periFinanceReceivedForPynths(amount);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * Set the minimum deposit amount required to depoist pUSD into the FIFO queue.<br>
   * Transaction (consumes gas, requires signer)
   * @param _amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMinimumDepositAmount = async (_amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMinimumDepositAmount(_amount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {BigNumber}
   * @returns Object
   **/
  this.deposits = async uint256_1 => {
    return await this.contract.deposits(uint256_1);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param pynthAmount {BigNumber}
   * @param guaranteedRate {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangePynthsForPERIAtRate = async (pynthAmount, guaranteedRate, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangePynthsForPERIAtRate(pynthAmount, guaranteedRate, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.maxEthPurchase = async () => {
    return await this.contract.maxEthPurchase();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param _maxEthPurchase {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.setMaxEthPurchase = async (_maxEthPurchase, txParams) => {
    txParams = txParams || {};
    return await this.contract.setMaxEthPurchase(_maxEthPurchase, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param txParams {TxParams}
  
   **/
  this.initiateSelfDestruct = async txParams => {
    txParams = txParams || {};
    return await this.contract.initiateSelfDestruct(txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param  {String<EthAddress>}
   * @returns BigNumber
   **/
  this.smallDeposits = async address_1 => {
    return await this.contract.smallDeposits(address_1);
  };

  /**
   * Calculate how many PERI you will receive if you transfer an amount of ether.<br>
   * Call (no gas consumed, doesn't require signer)
   * @param amount {BigNumber}
   * @returns BigNumber
   **/
  this.periFinanceReceivedForEther = async amount => {
    return await this.contract.periFinanceReceivedForEther(amount);
  };

  /**
   * DepositPynths: Allows users to deposit pynths via the approve / transferFrom workflow if they'd like. You can equally just transfer pynths to this contract and it will work exactly the same way but with one less call (and therefore cheaper transaction fees).<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.depositPynths = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.depositPynths(amount, txParams);
  };

  /**
   * Allows the owner to withdraw PERI from this contract if needed.<br>
   * Transaction (consumes gas, requires signer)
   * @param amount {BigNumber}
   * @param txParams {TxParams}
  
   **/
  this.withdrawPeriFinance = async (amount, txParams) => {
    txParams = txParams || {};
    return await this.contract.withdrawPeriFinance(amount, txParams);
  };

  /**
   * Transaction (consumes gas, requires signer)
   * @param pynthAmount {BigNumber}
   * @param txParams {TxParams}
   * @returns BigNumber
   **/
  this.exchangePynthsForPERI = async (pynthAmount, txParams) => {
    txParams = txParams || {};
    return await this.contract.exchangePynthsForPERI(pynthAmount, txParams);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns BigNumber
   **/
  this.depositEndIndex = async () => {
    return await this.contract.depositEndIndex();
  };
}

export default Depot;
