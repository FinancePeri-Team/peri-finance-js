export default [
  {
    inputs: [
      {
        internalType: 'contract IPeriFinanceEscrow',
        name: '_esc',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'checkAccountSchedule',
    outputs: [{ internalType: 'uint256[16]', name: '', type: 'uint256[16]' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x449d0eb1',
  },
  {
    constant: true,
    inputs: [],
    name: 'periFinance_escrow',
    outputs: [
      {
        internalType: 'contract IPeriFinanceEscrow',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x59bd8976',
  },
];
