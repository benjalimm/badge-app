/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EntityFactory, EntityFactoryInterface } from "../EntityFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_badgeRegistry",
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
    name: "EntityDeployed",
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
        name: "entityName",
        type: "string",
      },
      {
        internalType: "address",
        name: "genesisUser",
        type: "address",
      },
      {
        internalType: "string",
        name: "genesisTokenURI",
        type: "string",
      },
    ],
    name: "createEntity",
    outputs: [
      {
        internalType: "contract IEntity",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516124fc3803806124fc8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b6123ee8061010e6000396000f3fe60806040523480156200001157600080fd5b50600436106200003a5760003560e01c8063d08f5b36146200003f578063ea3e7cef1462000075575b600080fd5b6200005d60048036038101906200005791906200026c565b62000097565b6040516200006c919062000397565b60405180910390f35b6200007f620001d6565b6040516200008e91906200037a565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146200012b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200012290620003ea565b60405180910390fd5b6000868660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516200015e90620001fa565b6200016c93929190620003b4565b604051809103906000f08015801562000189573d6000803e3d6000fd5b5090507f9b26724132675794c7d3a369b539baad138a229996e7a7965c9fdba35218ce42878783604051620001c193929190620003b4565b60405180910390a18091505095945050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611eb6806200050383390190565b6000813590506200021981620004e8565b92915050565b60008083601f8401126200023257600080fd5b8235905067ffffffffffffffff8111156200024c57600080fd5b6020830191508360018202830111156200026557600080fd5b9250929050565b6000806000806000606086880312156200028557600080fd5b600086013567ffffffffffffffff811115620002a057600080fd5b620002ae888289016200021f565b95509550506020620002c38882890162000208565b935050604086013567ffffffffffffffff811115620002e157600080fd5b620002ef888289016200021f565b92509250509295509295909350565b62000309816200041d565b82525050565b6200031a8162000451565b82525050565b60006200032e83856200040c565b93506200033d83858462000479565b620003488362000488565b840190509392505050565b6000620003626021836200040c565b91506200036f8262000499565b604082019050919050565b6000602082019050620003916000830184620002fe565b92915050565b6000602082019050620003ae60008301846200030f565b92915050565b60006040820190508181036000830152620003d181858762000320565b9050620003e26020830184620002fe565b949350505050565b60006020820190508181036000830152620004058162000353565b9050919050565b600082825260208201905092915050565b60006200042a8262000431565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200045e8262000465565b9050919050565b6000620004728262000431565b9050919050565b82818337600083830152505050565b6000601f19601f8301169050919050565b7f4f6e6c792062616467652072656769737472792063616e2063616c6c2074686960008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b620004f3816200041d565b8114620004ff57600080fd5b5056fe60806040523480156200001157600080fd5b5060405162001eb638038062001eb6833981810160405281019062000037919062000500565b620000836040518060400160405280601481526020017f4465706c6f796564206e657720656e746974793a000000000000000000000000815250836200037c60201b62000bd91760201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008173ffffffffffffffffffffffffffffffffffffffff16631e93e3976040518163ffffffff1660e01b815260040160206040518083038186803b1580156200010d57600080fd5b505afa15801562000122573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001489190620004d4565b90508073ffffffffffffffffffffffffffffffffffffffff16637c744971846040518263ffffffff1660e01b81526004016200018591906200059b565b602060405180830381600087803b158015620001a057600080fd5b505af1158015620001b5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001db9190620004d4565b600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008273ffffffffffffffffffffffffffffffffffffffff166327a462fe6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200026457600080fd5b505afa15801562000279573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029f9190620004d4565b90508073ffffffffffffffffffffffffffffffffffffffff16634bad7fe7856040518263ffffffff1660e01b8152600401620002dc91906200059b565b602060405180830381600087803b158015620002f757600080fd5b505af11580156200030c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003329190620004d4565b600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200076f565b6200041e828260405160240162000395929190620005bf565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200042260201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000620004626200045c8462000623565b620005fa565b9050828152602081018484840111156200047b57600080fd5b62000488848285620006a9565b509392505050565b600081519050620004a18162000755565b92915050565b600082601f830112620004b957600080fd5b8151620004cb8482602086016200044b565b91505092915050565b600060208284031215620004e757600080fd5b6000620004f78482850162000490565b91505092915050565b600080604083850312156200051457600080fd5b600083015167ffffffffffffffff8111156200052f57600080fd5b6200053d85828601620004a7565b9250506020620005508582860162000490565b9150509250929050565b6000620005678262000659565b62000573818562000664565b935062000585818560208601620006a9565b620005908162000744565b840191505092915050565b60006020820190508181036000830152620005b781846200055a565b905092915050565b60006040820190508181036000830152620005db81856200055a565b90508181036020830152620005f181846200055a565b90509392505050565b60006200060662000619565b9050620006148282620006df565b919050565b6000604051905090565b600067ffffffffffffffff82111562000641576200064062000715565b5b6200064c8262000744565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000620006828262000689565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620006c9578082015181840152602081019050620006ac565b83811115620006d9576000848401525b50505050565b620006ea8262000744565b810181811067ffffffffffffffff821117156200070c576200070b62000715565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620007608162000675565b81146200076c57600080fd5b50565b611737806200077f6000396000f3fe6080604052600436106100a75760003560e01c8063a64e73a211610064578063a64e73a2146101af578063cbc3b159146101da578063dd75b3f614610205578063deccb09114610230578063ea3e7cef14610247578063fea4a76f14610272576100a7565b80630a7d5e67146100ac5780633c0514f1146100d75780634dfb5c81146101145780635be0eefb1461013d57806374afd8021461016857806394047ad414610184575b600080fd5b3480156100b857600080fd5b506100c161029d565b6040516100ce9190611250565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190610f60565b6102c7565b60405161010b9190611330565b60405180910390f35b34801561012057600080fd5b5061013b60048036038101906101369190610fb2565b6102e7565b005b34801561014957600080fd5b5061015261043b565b60405161015f9190611250565b60405180910390f35b610182600480360381019061017d919061101e565b610465565b005b34801561019057600080fd5b50610199610a84565b6040516101a69190611442565b60405180910390f35b3480156101bb57600080fd5b506101c4610a95565b6040516101d19190611442565b60405180910390f35b3480156101e657600080fd5b506101ef610aa1565b6040516101fc9190611250565b60405180910390f35b34801561021157600080fd5b5061021a610ac7565b6040516102279190611250565b60405180910390f35b34801561023c57600080fd5b50610245610af1565b005b34801561025357600080fd5b5061025c610b8d565b6040516102699190611250565b60405180910390f35b34801561027e57600080fd5b50610287610bb3565b6040516102949190611250565b60405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006020528060005260406000206000915054906101000a900460ff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050836002811115610370577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8160028111156103a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b116103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090611382565b60405180910390fd5b6103f585858585610c75565b7fcc2456bddba4f26e55cd6e849428c370420610a5032aaef28f1bd9cec4710019303383888860405161042c95949392919061126b565b60405180910390a15050505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600281111561049f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166002811115610523577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14806105ea575060016002811115610564577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660028111156105e8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b145b806106af5750600280811115610629577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660028111156106ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b145b6106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e5906113a2565b60405180910390fd5b6000831015610732576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072990611422565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cb6e390c856040518263ffffffff1660e01b815260040161078f9190611442565b60206040518083038186803b1580156107a757600080fd5b505afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df919061108a565b905080341015610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081b906113c2565b60405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166368bc573e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561088e57600080fd5b505afa1580156108a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c69190610f89565b905060008173ffffffffffffffffffffffffffffffffffffffff16836040516108ee9061123b565b60006040518083038185875af1925050503d806000811461092b576040519150601f19603f3d011682016040523d82523d6000602084013e610930565b606091505b5050905080610974576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096b906113e2565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166374afd802888888886040518563ffffffff1660e01b81526004016109d594939291906112f0565b600060405180830381600087803b1580156109ef57600080fd5b505af1158015610a03573d6000803e3d6000fd5b50505050610a0f610db9565b73ffffffffffffffffffffffffffffffffffffffff166394bf804d87896040518363ffffffff1660e01b8152600401610a4992919061145d565b600060405180830381600087803b158015610a6357600080fd5b505af1158015610a77573d6000803e3d6000fd5b5050505050505050505050565b6000610a906003610e60565b905090565b60038060000154905081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7890611402565b60405180910390fd5b610b8b6003610e6e565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c718282604051602401610bef92919061134b565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e84565b5050565b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836002811115610cfc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639ad98cd68584846040518463ffffffff1660e01b8152600401610d60939291906112be565b602060405180830381600087803b158015610d7a57600080fd5b505af1158015610d8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db2919061108a565b5050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a59cf7e16040518163ffffffff1660e01b815260040160206040518083038186803b158015610e2357600080fd5b505afa158015610e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5b9190610f89565b905090565b600081600001549050919050565b6001816000016000828254019250508190555050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081359050610ebc816116c3565b92915050565b600081519050610ed1816116c3565b92915050565b600081359050610ee6816116da565b92915050565b60008083601f840112610efe57600080fd5b8235905067ffffffffffffffff811115610f1757600080fd5b602083019150836001820283011115610f2f57600080fd5b9250929050565b600081359050610f45816116ea565b92915050565b600081519050610f5a816116ea565b92915050565b600060208284031215610f7257600080fd5b6000610f8084828501610ead565b91505092915050565b600060208284031215610f9b57600080fd5b6000610fa984828501610ec2565b91505092915050565b60008060008060608587031215610fc857600080fd5b6000610fd687828801610ead565b9450506020610fe787828801610ed7565b935050604085013567ffffffffffffffff81111561100457600080fd5b61101087828801610eec565b925092505092959194509250565b6000806000806060858703121561103457600080fd5b600061104287828801610ead565b945050602061105387828801610f36565b935050604085013567ffffffffffffffff81111561107057600080fd5b61107c87828801610eec565b925092505092959194509250565b60006020828403121561109c57600080fd5b60006110aa84828501610f4b565b91505092915050565b6110bc816114ad565b82525050565b6110cb816114fc565b82525050565b60006110dd838561149c565b93506110ea83858461150e565b6110f38361157f565b840190509392505050565b600061110982611486565b611113818561149c565b935061112381856020860161151d565b61112c8161157f565b840191505092915050565b6000611144601a8361149c565b915061114f82611590565b602082019050919050565b6000611167601d8361149c565b9150611172826115b9565b602082019050919050565b600061118a600e8361149c565b9150611195826115e2565b602082019050919050565b60006111ad60138361149c565b91506111b88261160b565b602082019050919050565b60006111d0600083611491565b91506111db82611634565b600082019050919050565b60006111f3602d8361149c565b91506111fe82611637565b604082019050919050565b6000611216601b8361149c565b915061122182611686565b602082019050919050565b611235816114f2565b82525050565b6000611246826111c3565b9150819050919050565b600060208201905061126560008301846110b3565b92915050565b600060a08201905061128060008301886110b3565b61128d60208301876110b3565b61129a60408301866110c2565b6112a760608301856110b3565b6112b460808301846110c2565b9695505050505050565b60006040820190506112d360008301866110b3565b81810360208301526112e68184866110d1565b9050949350505050565b600060608201905061130560008301876110b3565b611312602083018661122c565b81810360408301526113258184866110d1565b905095945050505050565b600060208201905061134560008301846110c2565b92915050565b6000604082019050818103600083015261136581856110fe565b9050818103602083015261137981846110fe565b90509392505050565b6000602082019050818103600083015261139b81611137565b9050919050565b600060208201905081810360008301526113bb8161115a565b9050919050565b600060208201905081810360008301526113db8161117d565b9050919050565b600060208201905081810360008301526113fb816111a0565b9050919050565b6000602082019050818103600083015261141b816111e6565b9050919050565b6000602082019050818103600083015261143b81611209565b9050919050565b6000602082019050611457600083018461122c565b92915050565b6000604082019050611472600083018561122c565b61147f60208301846110b3565b9392505050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006114b8826114d2565b9050919050565b60008190506114cd826116af565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611507826114bf565b9050919050565b82818337600083830152505050565b60005b8381101561153b578082015181840152602081019050611520565b8381111561154a576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000601f19601f8301169050919050565b7f41737369676e657220686173206e6f207065726d697373696f6e000000000000600082015250565b7f53656e64657220686173206e6f2061646d696e2070726976696c656765000000600082015250565b7f4e6f7420656e6f75676820455448000000000000000000000000000000000000600082015250565b7f43616c6c20746f2073616665206661696c656400000000000000000000000000600082015250565b50565b7f4f6e6c7920626164676520746f6b656e2063616e20696e6372656d656e74206460008201527f656d6572697420706f696e747300000000000000000000000000000000000000602082015250565b7f4c6576656c2063616e6e6f74206265206c657373207468616e20300000000000600082015250565b600381106116c0576116bf611550565b5b50565b6116cc816114ad565b81146116d757600080fd5b50565b600381106116e757600080fd5b50565b6116f3816114f2565b81146116fe57600080fd5b5056fea2646970667358221220ba04c29c92f4c645040e107eebe42e82ca92c0d22a35ca71140182b23e97f0b364736f6c63430008040033a2646970667358221220fcfec9999f71594dbdacb727708bf393009097741f8f2058f3221aec56d29ad864736f6c63430008040033";

export class EntityFactory__factory extends ContractFactory {
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
    _badgeRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EntityFactory> {
    return super.deploy(
      _badgeRegistry,
      overrides || {}
    ) as Promise<EntityFactory>;
  }
  getDeployTransaction(
    _badgeRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_badgeRegistry, overrides || {});
  }
  attach(address: string): EntityFactory {
    return super.attach(address) as EntityFactory;
  }
  connect(signer: Signer): EntityFactory__factory {
    return super.connect(signer) as EntityFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EntityFactoryInterface {
    return new utils.Interface(_abi) as EntityFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EntityFactory {
    return new Contract(address, _abi, signerOrProvider) as EntityFactory;
  }
}
