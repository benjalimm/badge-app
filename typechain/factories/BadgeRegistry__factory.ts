/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadgeRegistry, BadgeRegistryInterface } from "../BadgeRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgePriceCalculator",
        type: "address",
      },
    ],
    name: "BadgePriceCalculatorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgeTokenFactory",
        type: "address",
      },
    ],
    name: "BadgeTokenFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "badgeXPToken",
        type: "address",
      },
    ],
    name: "BadgeXPTokenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entityFactory",
        type: "address",
      },
    ],
    name: "EntityFactorySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "entityAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "genesisTokenHolder",
        type: "address",
      },
    ],
    name: "EntityRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "permissionTokenFactory",
        type: "address",
      },
    ],
    name: "PermissionTokenFactorySet",
    type: "event",
  },
  {
    inputs: [],
    name: "badgeGnosisSafe",
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
    name: "badgePriceCalculator",
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
    name: "badgeTokenEntityReverseRecord",
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
    name: "badgeTokenFactory",
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
    name: "badgeXPToken",
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
    name: "entities",
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
    name: "entityFactory",
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
        internalType: "enum IBadgeRegistry.EntityReverseRecordType",
        name: "tokenType",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "filterAddressesForEntityReverseRecord",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
    ],
    name: "getBadgePrice",
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
    name: "getBadgeTokenFactory",
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
    name: "getBadgeXPToken",
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
    name: "getEntityFactory",
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
    name: "getLevelMultiplierX1000",
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
    name: "getPermissionTokenFactory",
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
    name: "getSafe",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "isRegistered",
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
    name: "levelMultiplierX1000",
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
    name: "owner",
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
    name: "permTokenEntityReverseRecord",
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
    name: "permissionContract",
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
    name: "permissionTokenFactory",
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
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        internalType: "string",
        name: "genesisTokenURI",
        type: "string",
      },
    ],
    name: "registerEntity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgePriceCalculator",
        type: "address",
      },
    ],
    name: "setBadgePriceCalculator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgeTokenFactory",
        type: "address",
      },
    ],
    name: "setBadgeTokenFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgeXPToken",
        type: "address",
      },
    ],
    name: "setBadgeXPToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_entityFactory",
        type: "address",
      },
    ],
    name: "setEntityFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_permissionTokenFactory",
        type: "address",
      },
    ],
    name: "setPermissionTokenFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526109c46001556000600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005857600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ae5806100a96000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80638da5cb5b116100f9578063cb6e390c11610097578063df19420811610071578063df194208146104c0578063eab15067146104de578063ec700190146104fc578063eeccbda81461051a576101a9565b8063cb6e390c14610456578063d53cb71814610486578063d6b66c58146104a4576101a9565b8063a4714b9a116100d3578063a4714b9a146103ce578063a59cf7e1146103ea578063bd8cdfd514610408578063c3c5a54714610426576101a9565b80638da5cb5b146103765780639d1c1b8214610394578063a1311ae7146103b2576101a9565b80632e8603151161016657806350ed05221161014057806350ed0522146102da5780635b4146c1146102f85780635f74981f1461032857806368bc573e14610358576101a9565b80632e860315146102845780632ff19780146102a05780633a439fa1146102bc576101a9565b806309c33619146101ae5780631d8ee48a146101cc5780631e93e397146101fc57806327a462fe1461021a5780632af7ca6d146102385780632e7fdc9414610268575b600080fd5b6101b6610538565b6040516101c391906117d9565b60405180910390f35b6101e660048036038101906101e1919061153d565b61055e565b6040516101f39190611856565b60405180910390f35b61020461057e565b60405161021191906117d9565b60405180910390f35b6102226105a8565b60405161022f91906117d9565b60405180910390f35b610252600480360381019061024d919061153d565b6105d2565b60405161025f91906117d9565b60405180910390f35b610282600480360381019061027d919061153d565b610605565b005b61029e6004803603810190610299919061153d565b610710565b005b6102ba60048036038101906102b59190611610565b61081b565b005b6102c4610b6c565b6040516102d191906117d9565b60405180910390f35b6102e2610b92565b6040516102ef91906117d9565b60405180910390f35b610312600480360381019061030d919061153d565b610bb8565b60405161031f91906117d9565b60405180910390f35b610342600480360381019061033d91906115b8565b610beb565b60405161034f9190611834565b60405180910390f35b610360610e94565b60405161036d91906117d9565b60405180910390f35b61037e610ebe565b60405161038b91906117d9565b60405180910390f35b61039c610ee4565b6040516103a991906117d9565b60405180910390f35b6103cc60048036038101906103c7919061153d565b610f0a565b005b6103e860048036038101906103e3919061153d565b611037565b005b6103f2611142565b6040516103ff91906117d9565b60405180910390f35b61041061116c565b60405161041d91906118da565b60405180910390f35b610440600480360381019061043b919061153d565b611172565b60405161044d9190611856565b60405180910390f35b610470600480360381019061046b9190611685565b6111c8565b60405161047d91906118da565b60405180910390f35b61048e61127c565b60405161049b91906117d9565b60405180910390f35b6104be60048036038101906104b9919061153d565b6112a0565b005b6104c86113ab565b6040516104d591906118da565b60405180910390f35b6104e66113b5565b6040516104f391906117d9565b60405180910390f35b6105046113df565b60405161051191906117d9565b60405180910390f35b610522611405565b60405161052f91906117d9565b60405180910390f35b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600b6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068c906118ba565b60405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd75b0d57b8863424158f54997697446e271b782771a480bb68d5c07e4e621b0a8160405161070591906117d9565b60405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610797906118ba565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f427cc3b09f2f87091b4a69494cf8a431c71358f02fd5e92d3e4cf2a2600a7e368160405161081091906117d9565b60405180910390a150565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d08f5b3686863387876040518663ffffffff1660e01b8152600401610880959493929190611871565b602060405180830381600087803b15801561089a57600080fd5b505af11580156108ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d2919061158f565b905060008190506001600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16635be0eefb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097757600080fd5b505afa15801561098b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109af9190611566565b600a60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1663dd75b3f66040518163ffffffff1660e01b815260040160206040518083038186803b158015610a7257600080fd5b505afa158015610a86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaa9190611566565b600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4a8632d3207d7cb50cfb7d972f4e76473b113c1801fab878aed2ee496ab0f5af81878733604051610b5c94939291906117f4565b60405180910390a1505050505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606000806001811115610c28577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b856001811115610c61577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610c6d57600b610c70565b600a5b905060008484905067ffffffffffffffff811115610cb7577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610ce55781602001602082028036833780820191505090505b50905060005b85859050811015610e87576000868683818110610d31577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610d46919061153d565b905060008460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600960008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610e725781848481518110610e37577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b50508080610e7f906119a8565b915050610ceb565b8193505050509392505050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f91906118ba565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f6fc6641b494073f8486f645d2fc7fe5fd68dfb8179518a8007e37bf1efaca972600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161102c91906117d9565b60405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110be906118ba565b60405180910390fd5b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb2d56f4b4eea93889fa4525a42644fcfddf8ad3b2f542e09ae44265209c32c198160405161113791906117d9565b60405180910390a150565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60015481565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e85b6125836040518263ffffffff1660e01b815260040161122591906118da565b60206040518083038186803b15801561123d57600080fd5b505afa158015611251573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127591906116ae565b9050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611330576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611327906118ba565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff561f468c3daae4b32557967fe0c9a47259b806b9419c8c056d3f129194976d6816040516113a091906117d9565b60405180910390a150565b6000600154905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061143a81611a5a565b92915050565b60008151905061144f81611a5a565b92915050565b60008083601f84011261146757600080fd5b8235905067ffffffffffffffff81111561148057600080fd5b60208301915083602082028301111561149857600080fd5b9250929050565b6000815190506114ae81611a71565b92915050565b6000813590506114c381611a88565b92915050565b60008083601f8401126114db57600080fd5b8235905067ffffffffffffffff8111156114f457600080fd5b60208301915083600182028301111561150c57600080fd5b9250929050565b60008135905061152281611a98565b92915050565b60008151905061153781611a98565b92915050565b60006020828403121561154f57600080fd5b600061155d8482850161142b565b91505092915050565b60006020828403121561157857600080fd5b600061158684828501611440565b91505092915050565b6000602082840312156115a157600080fd5b60006115af8482850161149f565b91505092915050565b6000806000604084860312156115cd57600080fd5b60006115db868287016114b4565b935050602084013567ffffffffffffffff8111156115f857600080fd5b61160486828701611455565b92509250509250925092565b6000806000806040858703121561162657600080fd5b600085013567ffffffffffffffff81111561164057600080fd5b61164c878288016114c9565b9450945050602085013567ffffffffffffffff81111561166b57600080fd5b611677878288016114c9565b925092505092959194509250565b60006020828403121561169757600080fd5b60006116a584828501611513565b91505092915050565b6000602082840312156116c057600080fd5b60006116ce84828501611528565b91505092915050565b60006116e383836116ef565b60208301905092915050565b6116f88161193f565b82525050565b6117078161193f565b82525050565b600061171882611905565b611722818561191d565b935061172d836118f5565b8060005b8381101561175e57815161174588826116d7565b975061175083611910565b925050600181019050611731565b5085935050505092915050565b61177481611951565b82525050565b6000611786838561192e565b9350611793838584611999565b61179c83611a20565b840190509392505050565b60006117b460188361192e565b91506117bf82611a31565b602082019050919050565b6117d38161198f565b82525050565b60006020820190506117ee60008301846116fe565b92915050565b600060608201905061180960008301876116fe565b818103602083015261181c81858761177a565b905061182b60408301846116fe565b95945050505050565b6000602082019050818103600083015261184e818461170d565b905092915050565b600060208201905061186b600083018461176b565b92915050565b6000606082019050818103600083015261188c81878961177a565b905061189b60208301866116fe565b81810360408301526118ae81848661177a565b90509695505050505050565b600060208201905081810360008301526118d3816117a7565b9050919050565b60006020820190506118ef60008301846117ca565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061194a8261196f565b9050919050565b60008115159050919050565b60006119688261193f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60006119b38261198f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119e6576119e56119f1565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4f6e6c79206f776e65722063616e2063616c6c20746869730000000000000000600082015250565b611a638161193f565b8114611a6e57600080fd5b50565b611a7a8161195d565b8114611a8557600080fd5b50565b60028110611a9557600080fd5b50565b611aa18161198f565b8114611aac57600080fd5b5056fea2646970667358221220c03f340daf3c20838e52c3cc2e3d54424b9f5611b0a6933b3b4a5802c9caeeb964736f6c63430008040033";

export class BadgeRegistry__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadgeRegistry> {
    return super.deploy(overrides || {}) as Promise<BadgeRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadgeRegistry {
    return super.attach(address) as BadgeRegistry;
  }
  connect(signer: Signer): BadgeRegistry__factory {
    return super.connect(signer) as BadgeRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadgeRegistryInterface {
    return new utils.Interface(_abi) as BadgeRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadgeRegistry {
    return new Contract(address, _abi, signerOrProvider) as BadgeRegistry;
  }
}
