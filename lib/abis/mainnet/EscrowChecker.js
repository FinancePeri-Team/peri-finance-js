export default [
  {
    constant: true,
    inputs: [{ name: 'account', type: 'address' }],
    name: 'checkAccountSchedule',
    outputs: [{ name: '', type: 'uint256[16]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x449d0eb1',
  },
  {
    constant: true,
    inputs: [],
    name: 'periFinance_escrow',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x59bd8976',
  },
  {
    inputs: [{ name: '_esc', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
];
