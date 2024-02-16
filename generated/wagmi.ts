import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PromoFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const promoFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'promotion',
        internalType: 'struct Promotion',
        type: 'tuple',
        components: [
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'promoAddr', internalType: 'address', type: 'address' },
          { name: 'streams', internalType: 'address[]', type: 'address[]' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'createPromo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'stream', internalType: 'address', type: 'address' }],
    name: 'getAvailablePromotions',
    outputs: [
      {
        name: '',
        internalType: 'struct Promotion[]',
        type: 'tuple[]',
        components: [
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'promoAddr', internalType: 'address', type: 'address' },
          { name: 'streams', internalType: 'address[]', type: 'address[]' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPaymentRecipientAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPaymentTokenAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPromoCreationPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'paymentToken', internalType: 'address', type: 'address' },
      { name: 'paymentRecipient', internalType: 'address', type: 'address' },
      { name: 'promoCreationPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'setPaymentRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'setPaymentToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'price', internalType: 'uint256', type: 'uint256' }],
    name: 'setPromoCreationPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PaymentRecipientSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PaymentTokenSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PromoCreationPriceSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'marketer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'promotion',
        internalType: 'struct Promotion',
        type: 'tuple',
        components: [
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'promoAddr', internalType: 'address', type: 'address' },
          { name: 'streams', internalType: 'address[]', type: 'address[]' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
        indexed: false,
      },
    ],
    name: 'PromotionCreated',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const;

export const promoFactoryAddress =
  '0x3d3E2D37151a812418FB075190f959a6C90C3A38' as const;

export const promoFactoryConfig = {
  address: promoFactoryAddress,
  abi: promoFactoryAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TicketFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ticketFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_PROTOCOL_FEE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'sale',
        internalType: 'struct SaleParams',
        type: 'tuple',
        components: [
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'endTime', internalType: 'uint256', type: 'uint256' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'paymentToken', internalType: 'address', type: 'address' },
        ],
      },
      {
        name: 'ticket',
        internalType: 'struct TicketParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'baseUri', internalType: 'string', type: 'string' },
          { name: 'cap', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    name: 'createTicketSale',
    outputs: [
      { name: 'ticketSaleAddr', internalType: 'address', type: 'address' },
      { name: 'ticketAddr', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getImplementations',
    outputs: [
      { name: 'sale', internalType: 'address', type: 'address' },
      { name: 'ticket', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getMaxSalePeriod',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProtocolFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'ticketSaleImplementation',
        internalType: 'address',
        type: 'address',
      },
      {
        name: 'ticketImplementation',
        internalType: 'address',
        type: 'address',
      },
      {
        name: 'protocolFeeRecipient',
        internalType: 'address',
        type: 'address',
      },
      { name: 'protocolFee', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSalePeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newMaxPeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMaxSalePeriod',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newProtocolFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setProtocolFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newRecipient', internalType: 'address', type: 'address' },
    ],
    name: 'setProtocolFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'setTicketImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'setTicketSaleImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newMaxPeriod',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MaxSalePeriodSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ProtocolFeeRecipientSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newProtocolFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolFeeSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TicketImplementationSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'ticketSaleAddr',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'ticketAddr',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TicketSaleCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newImplementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TicketSaleImplementationSet',
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  {
    type: 'error',
    inputs: [{ name: 'maxPeriod', internalType: 'uint256', type: 'uint256' }],
    name: 'MaxSalePeriodExceeded',
  },
  { type: 'error', inputs: [], name: 'MaxSalePeriodIsTooLow' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'maxProtocolFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ProtocolFeeIsTooHigh',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const;

export const ticketFactoryAddress =
  '0x42C593A0F50321EA473b5fAe6a4b76c212a26F54' as const;

export const ticketFactoryConfig = {
  address: ticketFactoryAddress,
  abi: ticketFactoryAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__
 */
export const useReadPromoFactory = /*#__PURE__*/ createUseReadContract({
  abi: promoFactoryAbi,
  address: promoFactoryAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"getAvailablePromotions"`
 */
export const useReadPromoFactoryGetAvailablePromotions =
  /*#__PURE__*/ createUseReadContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'getAvailablePromotions',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"getPaymentRecipientAddress"`
 */
export const useReadPromoFactoryGetPaymentRecipientAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'getPaymentRecipientAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"getPaymentTokenAddress"`
 */
export const useReadPromoFactoryGetPaymentTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'getPaymentTokenAddress',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"getPromoCreationPrice"`
 */
export const useReadPromoFactoryGetPromoCreationPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'getPromoCreationPrice',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPromoFactoryOwner = /*#__PURE__*/ createUseReadContract({
  abi: promoFactoryAbi,
  address: promoFactoryAddress,
  functionName: 'owner',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__
 */
export const useWritePromoFactory = /*#__PURE__*/ createUseWriteContract({
  abi: promoFactoryAbi,
  address: promoFactoryAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"createPromo"`
 */
export const useWritePromoFactoryCreatePromo =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'createPromo',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePromoFactoryInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePromoFactoryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPaymentRecipient"`
 */
export const useWritePromoFactorySetPaymentRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPaymentRecipient',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPaymentToken"`
 */
export const useWritePromoFactorySetPaymentToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPaymentToken',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPromoCreationPrice"`
 */
export const useWritePromoFactorySetPromoCreationPrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPromoCreationPrice',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePromoFactoryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__
 */
export const useSimulatePromoFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: promoFactoryAbi,
  address: promoFactoryAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"createPromo"`
 */
export const useSimulatePromoFactoryCreatePromo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'createPromo',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePromoFactoryInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePromoFactoryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPaymentRecipient"`
 */
export const useSimulatePromoFactorySetPaymentRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPaymentRecipient',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPaymentToken"`
 */
export const useSimulatePromoFactorySetPaymentToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPaymentToken',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"setPromoCreationPrice"`
 */
export const useSimulatePromoFactorySetPromoCreationPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'setPromoCreationPrice',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link promoFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePromoFactoryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__
 */
export const useWatchPromoFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchPromoFactoryInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPromoFactoryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'OwnershipTransferred',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"PaymentRecipientSet"`
 */
export const useWatchPromoFactoryPaymentRecipientSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'PaymentRecipientSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"PaymentTokenSet"`
 */
export const useWatchPromoFactoryPaymentTokenSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'PaymentTokenSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"PromoCreationPriceSet"`
 */
export const useWatchPromoFactoryPromoCreationPriceSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'PromoCreationPriceSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link promoFactoryAbi}__ and `eventName` set to `"PromotionCreated"`
 */
export const useWatchPromoFactoryPromotionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: promoFactoryAbi,
    address: promoFactoryAddress,
    eventName: 'PromotionCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__
 */
export const useReadTicketFactory = /*#__PURE__*/ createUseReadContract({
  abi: ticketFactoryAbi,
  address: ticketFactoryAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"MAX_PROTOCOL_FEE"`
 */
export const useReadTicketFactoryMaxProtocolFee =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'MAX_PROTOCOL_FEE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"getImplementations"`
 */
export const useReadTicketFactoryGetImplementations =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'getImplementations',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"getMaxSalePeriod"`
 */
export const useReadTicketFactoryGetMaxSalePeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'getMaxSalePeriod',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"getProtocolFee"`
 */
export const useReadTicketFactoryGetProtocolFee =
  /*#__PURE__*/ createUseReadContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'getProtocolFee',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"owner"`
 */
export const useReadTicketFactoryOwner = /*#__PURE__*/ createUseReadContract({
  abi: ticketFactoryAbi,
  address: ticketFactoryAddress,
  functionName: 'owner',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__
 */
export const useWriteTicketFactory = /*#__PURE__*/ createUseWriteContract({
  abi: ticketFactoryAbi,
  address: ticketFactoryAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"createTicketSale"`
 */
export const useWriteTicketFactoryCreateTicketSale =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'createTicketSale',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteTicketFactoryInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteTicketFactoryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setMaxSalePeriod"`
 */
export const useWriteTicketFactorySetMaxSalePeriod =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setMaxSalePeriod',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setProtocolFee"`
 */
export const useWriteTicketFactorySetProtocolFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setProtocolFee',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setProtocolFeeRecipient"`
 */
export const useWriteTicketFactorySetProtocolFeeRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setProtocolFeeRecipient',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setTicketImplementation"`
 */
export const useWriteTicketFactorySetTicketImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setTicketImplementation',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setTicketSaleImplementation"`
 */
export const useWriteTicketFactorySetTicketSaleImplementation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setTicketSaleImplementation',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteTicketFactoryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__
 */
export const useSimulateTicketFactory = /*#__PURE__*/ createUseSimulateContract(
  { abi: ticketFactoryAbi, address: ticketFactoryAddress },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"createTicketSale"`
 */
export const useSimulateTicketFactoryCreateTicketSale =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'createTicketSale',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateTicketFactoryInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateTicketFactoryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setMaxSalePeriod"`
 */
export const useSimulateTicketFactorySetMaxSalePeriod =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setMaxSalePeriod',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setProtocolFee"`
 */
export const useSimulateTicketFactorySetProtocolFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setProtocolFee',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setProtocolFeeRecipient"`
 */
export const useSimulateTicketFactorySetProtocolFeeRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setProtocolFeeRecipient',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setTicketImplementation"`
 */
export const useSimulateTicketFactorySetTicketImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setTicketImplementation',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"setTicketSaleImplementation"`
 */
export const useSimulateTicketFactorySetTicketSaleImplementation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'setTicketSaleImplementation',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ticketFactoryAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateTicketFactoryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__
 */
export const useWatchTicketFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchTicketFactoryInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"MaxSalePeriodSet"`
 */
export const useWatchTicketFactoryMaxSalePeriodSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'MaxSalePeriodSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchTicketFactoryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'OwnershipTransferred',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"ProtocolFeeRecipientSet"`
 */
export const useWatchTicketFactoryProtocolFeeRecipientSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'ProtocolFeeRecipientSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"ProtocolFeeSet"`
 */
export const useWatchTicketFactoryProtocolFeeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'ProtocolFeeSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"TicketImplementationSet"`
 */
export const useWatchTicketFactoryTicketImplementationSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'TicketImplementationSet',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"TicketSaleCreated"`
 */
export const useWatchTicketFactoryTicketSaleCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'TicketSaleCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ticketFactoryAbi}__ and `eventName` set to `"TicketSaleImplementationSet"`
 */
export const useWatchTicketFactoryTicketSaleImplementationSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ticketFactoryAbi,
    address: ticketFactoryAddress,
    eventName: 'TicketSaleImplementationSet',
  });
