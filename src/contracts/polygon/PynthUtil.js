import { Contract } from 'ethers';
import ContractSettings from '../../contractSettings';
import abi from '../../../lib/abis/polygon/PynthUtil';

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function PynthUtil(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['PynthUtil'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns String<EthAddress>
   **/
  this.addressResolverProxy = async () => {
    return await this.contract.addressResolverProxy();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns bytes32[]
   **/
  this.frozenPynths = async () => {
    return await this.contract.frozenPynths();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @returns Object
   **/
  this.pynthsBalances = async account => {
    return await this.contract.pynthsBalances(account);
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.pynthsRates = async () => {
    return await this.contract.pynthsRates();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @returns Object
   **/
  this.pynthsTotalSupplies = async () => {
    return await this.contract.pynthsTotalSupplies();
  };

  /**
   * Call (no gas consumed, doesn't require signer)
   * @param account {String<EthAddress>}
   * @param currencyKey {bytes32}
   * @returns BigNumber
   **/
  this.totalPynthsInKey = async (account, currencyKey) => {
    return await this.contract.totalPynthsInKey(account, currencyKey);
  };
}

export default PynthUtil;
