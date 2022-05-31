/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PermissionToken,
  PermissionTokenInterface,
} from "../PermissionToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_entityName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_entityAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "badgeRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entityAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntityAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getPermStatusForUser",
    outputs: [
      {
        internalType: "enum PermLevel",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "enum PermLevel",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintAsEntity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permissionTokenHolders",
    outputs: [
      {
        internalType: "enum PermLevel",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200364638038062003646833981810160405281019062000037919062000231565b816040516020016200004a919062000310565b604051602081830303815290604052826040516020016200006c919062000336565b604051602081830303815290604052816000908051906020019062000093929190620000f8565b508060019080519060200190620000ac929190620000f8565b50505080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000582565b82805462000106906200043b565b90600052602060002090601f0160209004810192826200012a576000855562000176565b82601f106200014557805160ff191683800117855562000176565b8280016001018555821562000176579182015b828111156200017557825182559160200191906001019062000158565b5b50905062000185919062000189565b5090565b5b80821115620001a45760008160009055506001016200018a565b5090565b6000620001bf620001b98462000385565b6200035c565b905082815260208101848484011115620001d857600080fd5b620001e584828562000405565b509392505050565b600081519050620001fe8162000568565b92915050565b600082601f8301126200021657600080fd5b815162000228848260208601620001a8565b91505092915050565b600080604083850312156200024557600080fd5b600083015167ffffffffffffffff8111156200026057600080fd5b6200026e8582860162000204565b92505060206200028185828601620001ed565b9150509250929050565b60006200029882620003bb565b620002a48185620003c6565b9350620002b681856020860162000405565b80840191505092915050565b6000620002d1601383620003c6565b9150620002de8262000516565b601382019050919050565b6000620002f8600a83620003c6565b915062000305826200053f565b600a82019050919050565b60006200031e82846200028b565b91506200032b82620002c2565b915081905092915050565b60006200034482846200028b565b91506200035182620002e9565b915081905092915050565b6000620003686200037b565b905062000376828262000471565b919050565b6000604051905090565b600067ffffffffffffffff821115620003a357620003a2620004d6565b5b620003ae8262000505565b9050602081019050919050565b600081519050919050565b600081905092915050565b6000620003de82620003e5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200042557808201518184015260208101905062000408565b8381111562000435576000848401525b50505050565b600060028204905060018216806200045457607f821691505b602082108114156200046b576200046a620004a7565b5b50919050565b6200047c8262000505565b810181811067ffffffffffffffff821117156200049e576200049d620004d6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f202d205065726d697373696f6e20746f6b656e00000000000000000000000000600082015250565b7f5045524d5f544f4b454e00000000000000000000000000000000000000000000600082015250565b6200057381620003d1565b81146200057f57600080fd5b50565b6130b480620005926000396000f3fe6080604052600436106101145760003560e01c806370a08231116100a0578063c87b56dd11610064578063c87b56dd146103da578063cdb055cc14610417578063e985e9c514610442578063ea3e7cef1461047f578063fd1a9f1a146104aa57610114565b806370a08231146102e357806393b2b8a11461032057806395d89b411461035d578063a22cb46514610388578063b88d4fde146103b157610114565b806323b872dd116100e757806323b872dd146101e75780633c0514f11461021057806342842e0e1461024d578063547acc7d146102765780636352211e146102a657610114565b806301ffc9a71461011957806306fdde0314610156578063081812fc14610181578063095ea7b3146101be575b600080fd5b34801561012557600080fd5b50610140600480360381019061013b919061202d565b6104d5565b60405161014d9190612465565b60405180910390f35b34801561016257600080fd5b5061016b6105b7565b604051610178919061249b565b60405180910390f35b34801561018d57600080fd5b506101a860048036038101906101a3919061207f565b610649565b6040516101b591906123fe565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e09190611ff1565b6106ce565b005b3480156101f357600080fd5b5061020e60048036038101906102099190611e84565b6107e6565b005b34801561021c57600080fd5b5061023760048036038101906102329190611e1f565b610846565b6040516102449190612480565b60405180910390f35b34801561025957600080fd5b50610274600480360381019061026f9190611e84565b610866565b005b610290600480360381019061028b9190611f8a565b610886565b60405161029d91906126dd565b60405180910390f35b3480156102b257600080fd5b506102cd60048036038101906102c8919061207f565b6109b8565b6040516102da91906123fe565b60405180910390f35b3480156102ef57600080fd5b5061030a60048036038101906103059190611e1f565b610a6a565b60405161031791906126dd565b60405180910390f35b34801561032c57600080fd5b5061034760048036038101906103429190611e1f565b610b22565b6040516103549190612480565b60405180910390f35b34801561036957600080fd5b50610372610b78565b60405161037f919061249b565b60405180910390f35b34801561039457600080fd5b506103af60048036038101906103aa9190611f4e565b610c0a565b005b3480156103bd57600080fd5b506103d860048036038101906103d39190611ed3565b610d8b565b005b3480156103e657600080fd5b5061040160048036038101906103fc919061207f565b610ded565b60405161040e919061249b565b60405180910390f35b34801561042357600080fd5b5061042c610f3f565b60405161043991906123fe565b60405180910390f35b34801561044e57600080fd5b5061046960048036038101906104649190611e48565b610f65565b6040516104769190612465565b60405180910390f35b34801561048b57600080fd5b50610494610ff9565b6040516104a191906123fe565b60405180910390f35b3480156104b657600080fd5b506104bf61101f565b6040516104cc91906123fe565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105a057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105b057506105af82611049565b5b9050919050565b6060600080546105c690612958565b80601f01602080910402602001604051908101604052809291908181526020018280546105f290612958565b801561063f5780601f106106145761010080835404028352916020019161063f565b820191906000526020600020905b81548152906001019060200180831161062257829003601f168201915b5050505050905090565b6000610654826110b3565b610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068a9061261d565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106d9826109b8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561074a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107419061267d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661076961111f565b73ffffffffffffffffffffffffffffffffffffffff16148061079857506107978161079261111f565b610f65565b5b6107d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ce9061255d565b60405180910390fd5b6107e18383611127565b505050565b6107f76107f161111f565b826111e0565b610836576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d9061269d565b60405180910390fd5b6108418383836112be565b505050565b600a6020528060005260406000206000915054906101000a900460ff1681565b61088183838360405180602001604052806000815250610d8b565b505050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610918576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090f906126bd565b60405180910390fd5b82600a60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360028111156109a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506109af848361151a565b90509392505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a589061259d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad29061257d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b606060018054610b8790612958565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb390612958565b8015610c005780601f10610bd557610100808354040283529160200191610c00565b820191906000526020600020905b815481529060010190602001808311610be357829003601f168201915b5050505050905090565b610c1261111f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c779061251d565b60405180910390fd5b8060056000610c8d61111f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610d3a61111f565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d7f9190612465565b60405180910390a35050565b610d9c610d9661111f565b836111e0565b610ddb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd29061269d565b60405180910390fd5b610de784848484611552565b50505050565b6060610df8826110b3565b610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2e906125fd565b60405180910390fd5b6000600660008481526020019081526020016000208054610e5790612958565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8390612958565b8015610ed05780601f10610ea557610100808354040283529160200191610ed0565b820191906000526020600020905b815481529060010190602001808311610eb357829003601f168201915b505050505090506000610ee16115ae565b9050600081511415610ef7578192505050610f3a565b600082511115610f2c578082604051602001610f149291906123da565b60405160208183030381529060405292505050610f3a565b610f35846115c5565b925050505b919050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661119a836109b8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006111eb826110b3565b61122a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112219061253d565b60405180910390fd5b6000611235836109b8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806112a457508373ffffffffffffffffffffffffffffffffffffffff1661128c84610649565b73ffffffffffffffffffffffffffffffffffffffff16145b806112b557506112b48185610f65565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112de826109b8565b73ffffffffffffffffffffffffffffffffffffffff1614611334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161132b9061263d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139b906124fd565b60405180910390fd5b6113af83838361166c565b6113ba600082611127565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461140a9190612849565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461146191906127c2565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006115266007611671565b60006115326007611687565b905061153e8482611695565b6115488184611863565b8091505092915050565b61155d8484846112be565b611569848484846118d7565b6115a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159f906124bd565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606115d0826110b3565b61160f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116069061265d565b60405180910390fd5b60006116196115ae565b905060008151116116395760405180602001604052806000815250611664565b8061164384611a6e565b6040516020016116549291906123da565b6040516020818303038152906040525b915050919050565b505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611705576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116fc906125dd565b60405180910390fd5b61170e816110b3565b1561174e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611745906124dd565b60405180910390fd5b61175a6000838361166c565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117aa91906127c2565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61186c826110b3565b6118ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118a2906125bd565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906118d2929190611c2e565b505050565b60006118f88473ffffffffffffffffffffffffffffffffffffffff16611c1b565b15611a61578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261192161111f565b8786866040518563ffffffff1660e01b81526004016119439493929190612419565b602060405180830381600087803b15801561195d57600080fd5b505af192505050801561198e57506040513d601f19601f8201168201806040525081019061198b9190612056565b60015b611a11573d80600081146119be576040519150601f19603f3d011682016040523d82523d6000602084013e6119c3565b606091505b50600081511415611a09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a00906124bd565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a66565b600190505b949350505050565b60606000821415611ab6576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611c16565b600082905060005b60008214611ae8578080611ad1906129bb565b915050600a82611ae19190612818565b9150611abe565b60008167ffffffffffffffff811115611b2a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611b5c5781602001600182028036833780820191505090505b5090505b60008514611c0f57600182611b759190612849565b9150600a85611b849190612a04565b6030611b9091906127c2565b60f81b818381518110611bcc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611c089190612818565b9450611b60565b8093505050505b919050565b600080823b905060008111915050919050565b828054611c3a90612958565b90600052602060002090601f016020900481019282611c5c5760008555611ca3565b82601f10611c7557805160ff1916838001178555611ca3565b82800160010185558215611ca3579182015b82811115611ca2578251825591602001919060010190611c87565b5b509050611cb09190611cb4565b5090565b5b80821115611ccd576000816000905550600101611cb5565b5090565b6000611ce4611cdf8461271d565b6126f8565b905082815260208101848484011115611cfc57600080fd5b611d07848285612916565b509392505050565b6000611d22611d1d8461274e565b6126f8565b905082815260208101848484011115611d3a57600080fd5b611d45848285612916565b509392505050565b600081359050611d5c81613012565b92915050565b600081359050611d7181613029565b92915050565b600081359050611d8681613040565b92915050565b600081519050611d9b81613040565b92915050565b600082601f830112611db257600080fd5b8135611dc2848260208601611cd1565b91505092915050565b600081359050611dda81613057565b92915050565b600082601f830112611df157600080fd5b8135611e01848260208601611d0f565b91505092915050565b600081359050611e1981613067565b92915050565b600060208284031215611e3157600080fd5b6000611e3f84828501611d4d565b91505092915050565b60008060408385031215611e5b57600080fd5b6000611e6985828601611d4d565b9250506020611e7a85828601611d4d565b9150509250929050565b600080600060608486031215611e9957600080fd5b6000611ea786828701611d4d565b9350506020611eb886828701611d4d565b9250506040611ec986828701611e0a565b9150509250925092565b60008060008060808587031215611ee957600080fd5b6000611ef787828801611d4d565b9450506020611f0887828801611d4d565b9350506040611f1987828801611e0a565b925050606085013567ffffffffffffffff811115611f3657600080fd5b611f4287828801611da1565b91505092959194509250565b60008060408385031215611f6157600080fd5b6000611f6f85828601611d4d565b9250506020611f8085828601611d62565b9150509250929050565b600080600060608486031215611f9f57600080fd5b6000611fad86828701611d4d565b9350506020611fbe86828701611dcb565b925050604084013567ffffffffffffffff811115611fdb57600080fd5b611fe786828701611de0565b9150509250925092565b6000806040838503121561200457600080fd5b600061201285828601611d4d565b925050602061202385828601611e0a565b9150509250929050565b60006020828403121561203f57600080fd5b600061204d84828501611d77565b91505092915050565b60006020828403121561206857600080fd5b600061207684828501611d8c565b91505092915050565b60006020828403121561209157600080fd5b600061209f84828501611e0a565b91505092915050565b6120b18161287d565b82525050565b6120c08161288f565b82525050565b60006120d18261277f565b6120db8185612795565b93506120eb818560208601612925565b6120f481612b20565b840191505092915050565b61210881612904565b82525050565b60006121198261278a565b61212381856127a6565b9350612133818560208601612925565b61213c81612b20565b840191505092915050565b60006121528261278a565b61215c81856127b7565b935061216c818560208601612925565b80840191505092915050565b60006121856032836127a6565b915061219082612b31565b604082019050919050565b60006121a8601c836127a6565b91506121b382612b80565b602082019050919050565b60006121cb6024836127a6565b91506121d682612ba9565b604082019050919050565b60006121ee6019836127a6565b91506121f982612bf8565b602082019050919050565b6000612211602c836127a6565b915061221c82612c21565b604082019050919050565b60006122346038836127a6565b915061223f82612c70565b604082019050919050565b6000612257602a836127a6565b915061226282612cbf565b604082019050919050565b600061227a6029836127a6565b915061228582612d0e565b604082019050919050565b600061229d602e836127a6565b91506122a882612d5d565b604082019050919050565b60006122c06020836127a6565b91506122cb82612dac565b602082019050919050565b60006122e36031836127a6565b91506122ee82612dd5565b604082019050919050565b6000612306602c836127a6565b915061231182612e24565b604082019050919050565b60006123296029836127a6565b915061233482612e73565b604082019050919050565b600061234c602f836127a6565b915061235782612ec2565b604082019050919050565b600061236f6021836127a6565b915061237a82612f11565b604082019050919050565b60006123926031836127a6565b915061239d82612f60565b604082019050919050565b60006123b56022836127a6565b91506123c082612faf565b604082019050919050565b6123d4816128fa565b82525050565b60006123e68285612147565b91506123f28284612147565b91508190509392505050565b600060208201905061241360008301846120a8565b92915050565b600060808201905061242e60008301876120a8565b61243b60208301866120a8565b61244860408301856123cb565b818103606083015261245a81846120c6565b905095945050505050565b600060208201905061247a60008301846120b7565b92915050565b600060208201905061249560008301846120ff565b92915050565b600060208201905081810360008301526124b5818461210e565b905092915050565b600060208201905081810360008301526124d681612178565b9050919050565b600060208201905081810360008301526124f68161219b565b9050919050565b60006020820190508181036000830152612516816121be565b9050919050565b60006020820190508181036000830152612536816121e1565b9050919050565b6000602082019050818103600083015261255681612204565b9050919050565b6000602082019050818103600083015261257681612227565b9050919050565b600060208201905081810360008301526125968161224a565b9050919050565b600060208201905081810360008301526125b68161226d565b9050919050565b600060208201905081810360008301526125d681612290565b9050919050565b600060208201905081810360008301526125f6816122b3565b9050919050565b60006020820190508181036000830152612616816122d6565b9050919050565b60006020820190508181036000830152612636816122f9565b9050919050565b600060208201905081810360008301526126568161231c565b9050919050565b600060208201905081810360008301526126768161233f565b9050919050565b6000602082019050818103600083015261269681612362565b9050919050565b600060208201905081810360008301526126b681612385565b9050919050565b600060208201905081810360008301526126d6816123a8565b9050919050565b60006020820190506126f260008301846123cb565b92915050565b6000612702612713565b905061270e828261298a565b919050565b6000604051905090565b600067ffffffffffffffff82111561273857612737612af1565b5b61274182612b20565b9050602081019050919050565b600067ffffffffffffffff82111561276957612768612af1565b5b61277282612b20565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127cd826128fa565b91506127d8836128fa565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561280d5761280c612a35565b5b828201905092915050565b6000612823826128fa565b915061282e836128fa565b92508261283e5761283d612a64565b5b828204905092915050565b6000612854826128fa565b915061285f836128fa565b92508282101561287257612871612a35565b5b828203905092915050565b6000612888826128da565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60008190506128d582612ffe565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061290f826128c7565b9050919050565b82818337600083830152505050565b60005b83811015612943578082015181840152602081019050612928565b83811115612952576000848401525b50505050565b6000600282049050600182168061297057607f821691505b6020821081141561298457612983612ac2565b5b50919050565b61299382612b20565b810181811067ffffffffffffffff821117156129b2576129b1612af1565b5b80604052505050565b60006129c6826128fa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129f9576129f8612a35565b5b600182019050919050565b6000612a0f826128fa565b9150612a1a836128fa565b925082612a2a57612a29612a64565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4f6e6c7920656e746974792063616e206163636573732074686973206d65746860008201527f6f64000000000000000000000000000000000000000000000000000000000000602082015250565b6003811061300f5761300e612a93565b5b50565b61301b8161287d565b811461302657600080fd5b50565b6130328161288f565b811461303d57600080fd5b50565b6130498161289b565b811461305457600080fd5b50565b6003811061306457600080fd5b50565b613070816128fa565b811461307b57600080fd5b5056fea2646970667358221220bb741852fe450da43886a6986f8cf77e2f28851dafd57371abcd1ca12a3884b764736f6c63430008040033";

export class PermissionToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _entityName: string,
    _entityAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PermissionToken> {
    return super.deploy(
      _entityName,
      _entityAddress,
      overrides || {}
    ) as Promise<PermissionToken>;
  }
  getDeployTransaction(
    _entityName: string,
    _entityAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entityName,
      _entityAddress,
      overrides || {}
    );
  }
  attach(address: string): PermissionToken {
    return super.attach(address) as PermissionToken;
  }
  connect(signer: Signer): PermissionToken__factory {
    return super.connect(signer) as PermissionToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionTokenInterface {
    return new utils.Interface(_abi) as PermissionTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionToken {
    return new Contract(address, _abi, signerOrProvider) as PermissionToken;
  }
}
