/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PermissionTokenFactory,
  PermissionTokenFactoryInterface,
} from "../PermissionTokenFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "entityName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "entityAddress",
        type: "address",
      },
    ],
    name: "PermissionTokenDeployed",
    type: "event",
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
        internalType: "string",
        name: "_entityName",
        type: "string",
      },
    ],
    name: "createPermissionToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125ab806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634bad7fe71461003b578063ea3e7cef1461006b575b600080fd5b61005560048036038101906100509190610187565b610089565b6040516100629190610208565b60405180910390f35b61007361010b565b6040516100809190610208565b60405180910390f35b60008083833360405161009b9061012f565b6100a793929190610223565b604051809103906000f0801580156100c3573d6000803e3d6000fd5b5090507f7ea9c0e14ec967671a982f9caf0bbb88fcdbb40c88a19b8a3dd6aec22e7e96c98484836040516100f993929190610223565b60405180910390a18091505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6122bd80620002b983390190565b60008083601f84011261014f57600080fd5b8235905067ffffffffffffffff81111561016857600080fd5b60208301915083600182028301111561018057600080fd5b9250929050565b6000806020838503121561019a57600080fd5b600083013567ffffffffffffffff8111156101b457600080fd5b6101c08582860161013d565b92509250509250929050565b6101d581610266565b82525050565b60006101e78385610255565b93506101f4838584610298565b6101fd836102a7565b840190509392505050565b600060208201905061021d60008301846101cc565b92915050565b6000604082019050818103600083015261023e8185876101db565b905061024d60208301846101cc565b949350505050565b600082825260208201905092915050565b600061027182610278565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b6000601f19601f830116905091905056fe60806040523480156200001157600080fd5b50604051620022bd380380620022bd8339818101604052810190620000379190620002a9565b6200007e826040518060400160405280601381526020017f202d205065726d697373696f6e20746f6b656e000000000000000000000000008152506200014260201b60201c565b620000c5836040518060400160405280600b81526020017f5f5045524d5f544f4b454e0000000000000000000000000000000000000000008152506200014260201b60201c565b8160009080519060200190620000dd92919062000170565b508060019080519060200190620000f692919062000170565b50505080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000536565b60608282604051602001620001599291906200033a565b604051602081830303815290604052905092915050565b8280546200017e9062000441565b90600052602060002090601f016020900481019282620001a25760008555620001ee565b82601f10620001bd57805160ff1916838001178555620001ee565b82800160010185558215620001ee579182015b82811115620001ed578251825591602001919060010190620001d0565b5b509050620001fd919062000201565b5090565b5b808211156200021c57600081600090555060010162000202565b5090565b60006200023762000231846200038b565b62000362565b9050828152602081018484840111156200025057600080fd5b6200025d8482856200040b565b509392505050565b60008151905062000276816200051c565b92915050565b600082601f8301126200028e57600080fd5b8151620002a084826020860162000220565b91505092915050565b60008060408385031215620002bd57600080fd5b600083015167ffffffffffffffff811115620002d857600080fd5b620002e6858286016200027c565b9250506020620002f98582860162000265565b9150509250929050565b60006200031082620003c1565b6200031c8185620003cc565b93506200032e8185602086016200040b565b80840191505092915050565b600062000348828562000303565b915062000356828462000303565b91508190509392505050565b60006200036e62000381565b90506200037c828262000477565b919050565b6000604051905090565b600067ffffffffffffffff821115620003a957620003a8620004dc565b5b620003b4826200050b565b9050602081019050919050565b600081519050919050565b600081905092915050565b6000620003e482620003eb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200042b5780820151818401526020810190506200040e565b838111156200043b576000848401525b50505050565b600060028204905060018216806200045a57607f821691505b60208210811415620004715762000470620004ad565b5b50919050565b62000482826200050b565b810181811067ffffffffffffffff82111715620004a457620004a3620004dc565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200052781620003d7565b81146200053357600080fd5b50565b611d7780620005466000396000f3fe6080604052600436106101145760003560e01c80636cdbbc66116100a0578063b88d4fde11610064578063b88d4fde146103dc578063c87b56dd14610405578063e985e9c514610442578063f8c7a5651461047f578063ff200d2b146104a857610114565b80636cdbbc66146102e357806370a082311461030e57806393b2b8a11461034b57806395d89b4114610388578063a22cb465146103b357610114565b806323b872dd116100e757806323b872dd146101e75780633c0514f11461021057806342842e0e1461024d578063547acc7d146102765780636352211e146102a657610114565b806301ffc9a71461011957806306fdde0314610156578063081812fc14610181578063095ea7b3146101be575b600080fd5b34801561012557600080fd5b50610140600480360381019061013b91906114a1565b6104d3565b60405161014d919061169b565b60405180910390f35b34801561016257600080fd5b5061016b6105b5565b60405161017891906116d1565b60405180910390f35b34801561018d57600080fd5b506101a860048036038101906101a391906114ca565b610647565b6040516101b59190611680565b60405180910390f35b3480156101ca57600080fd5b506101e560048036038101906101e09190611465565b610684565b005b3480156101f357600080fd5b5061020e600480360381019061020991906112f3565b6106bf565b005b34801561021c57600080fd5b506102376004803603810190610232919061128e565b6106fa565b60405161024491906116b6565b60405180910390f35b34801561025957600080fd5b50610274600480360381019061026f91906112f3565b61071a565b005b610290600480360381019061028b91906113fe565b610755565b60405161029d91906117f3565b60405180910390f35b3480156102b257600080fd5b506102cd60048036038101906102c891906114ca565b610887565b6040516102da9190611680565b60405180910390f35b3480156102ef57600080fd5b506102f8610939565b6040516103059190611680565b60405180910390f35b34801561031a57600080fd5b506103356004803603810190610330919061128e565b61095f565b60405161034291906117f3565b60405180910390f35b34801561035757600080fd5b50610372600480360381019061036d919061128e565b610a17565b60405161037f91906116b6565b60405180910390f35b34801561039457600080fd5b5061039d610a6d565b6040516103aa91906116d1565b60405180910390f35b3480156103bf57600080fd5b506103da60048036038101906103d591906113c2565b610aff565b005b3480156103e857600080fd5b5061040360048036038101906103fe9190611342565b610b3a565b005b34801561041157600080fd5b5061042c600480360381019061042791906114ca565b610b75565b60405161043991906116d1565b60405180910390f35b34801561044e57600080fd5b50610469600480360381019061046491906112b7565b610c62565b604051610476919061169b565b60405180910390f35b34801561048b57600080fd5b506104a660048036038101906104a1919061128e565b610c6a565b005b3480156104b457600080fd5b506104bd610d3e565b6040516104ca9190611680565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061059e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105ae57506105ad82610d68565b5b9050919050565b6060600080546105c4906119b1565b80601f01602080910402602001604051908101604052809291908181526020018280546105f0906119b1565b801561063d5780601f106106125761010080835404028352916020019161063d565b820191906000526020600020905b81548152906001019060200180831161062057829003601f168201915b5050505050905090565b60006040517f7f82f5a700000000000000000000000000000000000000000000000000000000815260040161067b906117d3565b60405180910390fd5b6040517f7f82f5a70000000000000000000000000000000000000000000000000000000081526004016106b6906117d3565b60405180910390fd5b6040517f7f82f5a70000000000000000000000000000000000000000000000000000000081526004016106f1906117d3565b60405180910390fd5b60066020528060005260406000206000915054906101000a900460ff1681565b6040517f7f82f5a700000000000000000000000000000000000000000000000000000000815260040161074c906117d3565b60405180910390fd5b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107e7576040517f973d02cb0000000000000000000000000000000000000000000000000000000081526004016107de906117b3565b60405180910390fd5b82600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600281111561086f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555061087e8483610dd2565b90509392505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092790611733565b60405180910390fd5b80915050919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c790611713565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b606060018054610a7c906119b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa8906119b1565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b5050505050905090565b6040517f7f82f5a7000000000000000000000000000000000000000000000000000000008152600401610b31906117d3565b60405180910390fd5b6040517f7f82f5a7000000000000000000000000000000000000000000000000000000008152600401610b6c906117d3565b60405180910390fd5b6060610b8082610e0a565b610bbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb690611793565b60405180910390fd5b600460008381526020019081526020016000208054610bdd906119b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610c09906119b1565b8015610c565780601f10610c2b57610100808354040283529160200191610c56565b820191906000526020600020905b815481529060010190602001808311610c3957829003601f168201915b50505050509050919050565b600092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cfa576040517f973d02cb000000000000000000000000000000000000000000000000000000008152600401610cf1906117b3565b60405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000610dde6005610e76565b6000610dea6005610e8c565b9050610df68482610e9a565b610e00818461105c565b8091505092915050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0190611773565b60405180910390fd5b610f1381610e0a565b15610f53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4a906116f3565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fa39190611880565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b61106582610e0a565b6110a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109b90611753565b60405180910390fd5b806004600084815260200190815260200160002090805190602001906110cb9291906110d0565b505050565b8280546110dc906119b1565b90600052602060002090601f0160209004810192826110fe5760008555611145565b82601f1061111757805160ff1916838001178555611145565b82800160010185558215611145579182015b82811115611144578251825591602001919060010190611129565b5b5090506111529190611156565b5090565b5b8082111561116f576000816000905550600101611157565b5090565b600061118661118184611833565b61180e565b90508281526020810184848401111561119e57600080fd5b6111a984828561196f565b509392505050565b6000813590506111c081611cd5565b92915050565b6000813590506111d581611cec565b92915050565b6000813590506111ea81611d03565b92915050565b60008083601f84011261120257600080fd5b8235905067ffffffffffffffff81111561121b57600080fd5b60208301915083600182028301111561123357600080fd5b9250929050565b60008135905061124981611d1a565b92915050565b600082601f83011261126057600080fd5b8135611270848260208601611173565b91505092915050565b60008135905061128881611d2a565b92915050565b6000602082840312156112a057600080fd5b60006112ae848285016111b1565b91505092915050565b600080604083850312156112ca57600080fd5b60006112d8858286016111b1565b92505060206112e9858286016111b1565b9150509250929050565b60008060006060848603121561130857600080fd5b6000611316868287016111b1565b9350506020611327868287016111b1565b925050604061133886828701611279565b9150509250925092565b60008060008060006080868803121561135a57600080fd5b6000611368888289016111b1565b9550506020611379888289016111b1565b945050604061138a88828901611279565b935050606086013567ffffffffffffffff8111156113a757600080fd5b6113b3888289016111f0565b92509250509295509295909350565b600080604083850312156113d557600080fd5b60006113e3858286016111b1565b92505060206113f4858286016111c6565b9150509250929050565b60008060006060848603121561141357600080fd5b6000611421868287016111b1565b93505060206114328682870161123a565b925050604084013567ffffffffffffffff81111561144f57600080fd5b61145b8682870161124f565b9150509250925092565b6000806040838503121561147857600080fd5b6000611486858286016111b1565b925050602061149785828601611279565b9150509250929050565b6000602082840312156114b357600080fd5b60006114c1848285016111db565b91505092915050565b6000602082840312156114dc57600080fd5b60006114ea84828501611279565b91505092915050565b6114fc816118d6565b82525050565b61150b816118e8565b82525050565b61151a8161195d565b82525050565b600061152b82611864565b611535818561186f565b935061154581856020860161197e565b61154e81611ad0565b840191505092915050565b6000611566601c8361186f565b915061157182611ae1565b602082019050919050565b6000611589602a8361186f565b915061159482611b0a565b604082019050919050565b60006115ac60298361186f565b91506115b782611b59565b604082019050919050565b60006115cf602e8361186f565b91506115da82611ba8565b604082019050919050565b60006115f260208361186f565b91506115fd82611bf7565b602082019050919050565b6000611615602f8361186f565b915061162082611c20565b604082019050919050565b600061163860198361186f565b915061164382611c6f565b602082019050919050565b600061165b601b8361186f565b915061166682611c98565b602082019050919050565b61167a81611953565b82525050565b600060208201905061169560008301846114f3565b92915050565b60006020820190506116b06000830184611502565b92915050565b60006020820190506116cb6000830184611511565b92915050565b600060208201905081810360008301526116eb8184611520565b905092915050565b6000602082019050818103600083015261170c81611559565b9050919050565b6000602082019050818103600083015261172c8161157c565b9050919050565b6000602082019050818103600083015261174c8161159f565b9050919050565b6000602082019050818103600083015261176c816115c2565b9050919050565b6000602082019050818103600083015261178c816115e5565b9050919050565b600060208201905081810360008301526117ac81611608565b9050919050565b600060208201905081810360008301526117cc8161162b565b9050919050565b600060208201905081810360008301526117ec8161164e565b9050919050565b60006020820190506118086000830184611671565b92915050565b6000611818611829565b905061182482826119e3565b919050565b6000604051905090565b600067ffffffffffffffff82111561184e5761184d611aa1565b5b61185782611ad0565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061188b82611953565b915061189683611953565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118cb576118ca611a14565b5b828201905092915050565b60006118e182611933565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600081905061192e82611cc1565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061196882611920565b9050919050565b82818337600083830152505050565b60005b8381101561199c578082015181840152602081019050611981565b838111156119ab576000848401525b50505050565b600060028204905060018216806119c957607f821691505b602082108114156119dd576119dc611a72565b5b50919050565b6119ec82611ad0565b810181811067ffffffffffffffff82111715611a0b57611a0a611aa1565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4f6e6c7920656e746974792063616e2063616c6c207468697300000000000000600082015250565b7f42616467657320617265206e6f6e2d7472616e7366657261626c650000000000600082015250565b60038110611cd257611cd1611a43565b5b50565b611cde816118d6565b8114611ce957600080fd5b50565b611cf5816118e8565b8114611d0057600080fd5b50565b611d0c816118f4565b8114611d1757600080fd5b50565b60038110611d2757600080fd5b50565b611d3381611953565b8114611d3e57600080fd5b5056fea26469706673582212208e0d26ca89c8edb94860f84dcadc803f40ad105820c32d3e68d72c2688e4b86864736f6c63430008040033a2646970667358221220261306eeee410c0844f583f874e3aae898b286368539f182bca01da0cd86d60864736f6c63430008040033";

export class PermissionTokenFactory__factory extends ContractFactory {
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
  ): Promise<PermissionTokenFactory> {
    return super.deploy(overrides || {}) as Promise<PermissionTokenFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PermissionTokenFactory {
    return super.attach(address) as PermissionTokenFactory;
  }
  connect(signer: Signer): PermissionTokenFactory__factory {
    return super.connect(signer) as PermissionTokenFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionTokenFactoryInterface {
    return new utils.Interface(_abi) as PermissionTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionTokenFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PermissionTokenFactory;
  }
}
