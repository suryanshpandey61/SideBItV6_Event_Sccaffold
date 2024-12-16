import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    17000:{
        SideBitV6:{
            address:"0x247e36Ca470d2e9f9C327F68Da1225FA7BF0772C",
            abi:[
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "cancelSideBet",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "enum TeamIndex",
                            "name": "index",
                            "type": "uint8"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "deposit",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "name": "SafeERC20FailedOperation",
                    "type": "error"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "internalType": "enum TeamIndex",
                            "name": "teamIndex",
                            "type": "uint8"
                        },
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "token",
                            "type": "address"
                        }
                    ],
                    "name": "Deposited",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startIndex",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endIndex",
                            "type": "uint256"
                        }
                    ],
                    "name": "distributeReward",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "endSaleNow",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "teamNameA",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "teamNameB",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "standardToken",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "saleStart",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "saleEnd",
                            "type": "uint256"
                        }
                    ],
                    "name": "initializeSideBet",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "wallet",
                            "type": "address"
                        }
                    ],
                    "name": "NewUniqueWallet",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "ownerCut",
                            "type": "uint256"
                        }
                    ],
                    "name": "OwnerCutTransferred",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "ownerAddress",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipRenounced",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256[]",
                            "name": "userRefunds",
                            "type": "uint256[]"
                        },
                        {
                            "indexed": false,
                            "internalType": "address[]",
                            "name": "users",
                            "type": "address[]"
                        }
                    ],
                    "name": "RefundDistributed",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startIndex",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endIndex",
                            "type": "uint256"
                        }
                    ],
                    "name": "refundTokens",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256[]",
                            "name": "userRewards",
                            "type": "uint256[]"
                        },
                        {
                            "indexed": false,
                            "internalType": "address[]",
                            "name": "winningUsers",
                            "type": "address[]"
                        }
                    ],
                    "name": "RewardDistributed",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "enum TeamIndex",
                            "name": "index",
                            "type": "uint8"
                        }
                    ],
                    "name": "selectWinningTeam",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "SideBetCancelled",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "teamA",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "teamB",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "standardToken",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "startTime",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "endTime",
                            "type": "uint256"
                        }
                    ],
                    "name": "SideBetEventInitialized",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "transferOwnerCut",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "start",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "end",
                            "type": "uint256"
                        }
                    ],
                    "name": "updateSale",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "internalType": "enum TeamIndex",
                            "name": "teamIndex",
                            "type": "uint8"
                        }
                    ],
                    "name": "WinningTeamSelected",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "calculateTotalRewardAndOwnerCut",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "totalReward",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ownerCut",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "maxCount",
                            "type": "uint256"
                        }
                    ],
                    "name": "getAllUniqueWallets",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "",
                            "type": "address[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "getSideBetData",
                    "outputs": [
                        {
                            "internalType": "string[2]",
                            "name": "teamNames",
                            "type": "string[2]"
                        },
                        {
                            "internalType": "address",
                            "name": "standardTokenAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "bool",
                            "name": "winnerSet",
                            "type": "bool"
                        },
                        {
                            "internalType": "enum TeamIndex",
                            "name": "winningIndex",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bool",
                            "name": "ownerCutWithdrawn",
                            "type": "bool"
                        },
                        {
                            "internalType": "bool",
                            "name": "cancelled",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxUsers",
                            "type": "uint256"
                        }
                    ],
                    "name": "getSideBetDepositData",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "allUsers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "address[][2]",
                            "name": "eventUsers",
                            "type": "address[][2]"
                        },
                        {
                            "internalType": "uint256[][2]",
                            "name": "userTokens",
                            "type": "uint256[][2]"
                        },
                        {
                            "internalType": "uint256[2]",
                            "name": "totalTokensDeposited",
                            "type": "uint256[2]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "tokenAddress",
                            "type": "address"
                        }
                    ],
                    "name": "getTotalTokenSpent",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getUniqueWalletCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "maxSideBets",
                            "type": "uint256"
                        }
                    ],
                    "name": "getUserSideBetData",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "eventCode",
                                    "type": "string"
                                },
                                {
                                    "internalType": "address",
                                    "name": "tokenAddress",
                                    "type": "address"
                                },
                                {
                                    "internalType": "string[2]",
                                    "name": "teamNames",
                                    "type": "string[2]"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "winnerSet",
                                    "type": "bool"
                                },
                                {
                                    "internalType": "enum TeamIndex",
                                    "name": "winningIndex",
                                    "type": "uint8"
                                },
                                {
                                    "internalType": "uint256[2]",
                                    "name": "userTokensDeposited",
                                    "type": "uint256[2]"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "userReward",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct UserSideBetData[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        }
                    ],
                    "name": "getUserSideBets",
                    "outputs": [
                        {
                            "internalType": "bytes32[]",
                            "name": "",
                            "type": "bytes32[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startIndex",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endIndex",
                            "type": "uint256"
                        }
                    ],
                    "name": "getUsersRewardsClaimedStatuses",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "users",
                            "type": "address[]"
                        },
                        {
                            "internalType": "bool[]",
                            "name": "usersRewardsClaimed",
                            "type": "bool[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address"
                        }
                    ],
                    "name": "getUserTokensDeposited",
                    "outputs": [
                        {
                            "internalType": "uint256[2]",
                            "name": "",
                            "type": "uint256[2]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startIndex",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "endIndex",
                            "type": "uint256"
                        }
                    ],
                    "name": "getWinningUsersAndUserRewards",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "winningUsers",
                            "type": "address[]"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "userRewards",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "eventCode",
                            "type": "string"
                        }
                    ],
                    "name": "isSaleOn",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "saleActive",
                            "type": "bool"
                        },
                        {
                            "internalType": "uint256",
                            "name": "saleStart",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "saleEnd",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        }
    }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;