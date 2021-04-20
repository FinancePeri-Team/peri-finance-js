import { utils } from 'ethers';
import Util from '../../src/util';

describe('util', () => {
  const toUtf8Bytes4 = Util.prototype.toUtf8Bytes4.bind(Util.prototype);

  describe('toUtf8Bytes4', () => {
    test('Converts a string <4 long to a right padded one', () => {
      expect(toUtf8Bytes4('P').toString()).toEqual('80,0,0,0');
      expect(toUtf8Bytes4('PE').toString()).toEqual('80,69,0,0');
      expect(toUtf8Bytes4('PER').toString()).toEqual('80,69,82,0');
      expect(toUtf8Bytes4('PERI').toString()).toEqual('80,69,82,73');
    });

    test('Converts a string 4 long to a right padded one', () => {
      expect(toUtf8Bytes4('pETH')).toEqual(utils.toUtf8Bytes('pETH'));
      expect(toUtf8Bytes4('iBTC')).toEqual(utils.toUtf8Bytes('iBTC'));
    });

    test('Throws for a longer string', () => {
      expect(() => toUtf8Bytes4('pETHs')).toThrow(/cannot convert string/i);
      expect(() => toUtf8Bytes4('     ')).toThrow(/cannot convert string/i);
    });
  });
});
