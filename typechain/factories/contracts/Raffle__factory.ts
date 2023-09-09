/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Raffle, RaffleInterface } from "../../contracts/Raffle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vrfCoordinatorV2",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "gasLane",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entranceFee",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__RaffleNotOpen",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__SendMoreToEnterRaffle",
    type: "error",
  },
  {
    inputs: [],
    name: "Raffle__TransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "raffleState",
        type: "uint256",
      },
    ],
    name: "Raffle__UpkeepNotNeeded",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "RaffleEnter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "RequestedRaffleWinner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "WinnerPicked",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enterRaffle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntranceFee",
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
    name: "getInterval",
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
    name: "getLatestTimeStamp",
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
    name: "getNumWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfPlayers",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getPlayer",
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
    name: "getRaffleState",
    outputs: [
      {
        internalType: "enum Raffle.RaffleState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecentWinner",
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
    name: "getRequestConfirmations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162001878380380620018788339818101604052810190620000389190620001ad565b858073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b81525050508573ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508360e081815250508261012081815250508467ffffffffffffffff1660c08167ffffffffffffffff1660c01b815250508161014081815250506000600360006101000a81548160ff021916908360018111156200010a5762000109620002b5565b5b0217905550426000819055508063ffffffff166101008163ffffffff1660e01b815250505050505050506200036b565b6000815190506200014b81620002e9565b92915050565b600081519050620001628162000303565b92915050565b60008151905062000179816200031d565b92915050565b600081519050620001908162000337565b92915050565b600081519050620001a78162000351565b92915050565b60008060008060008060c08789031215620001cd57620001cc620002e4565b5b6000620001dd89828a016200013a565b9650506020620001f089828a0162000196565b95505060406200020389828a0162000151565b94505060606200021689828a0162000168565b93505060806200022989828a0162000168565b92505060a06200023c89828a016200017f565b9150509295509295509295565b6000620002568262000267565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600080fd5b620002f48162000249565b81146200030057600080fd5b50565b6200030e816200025d565b81146200031a57600080fd5b50565b620003288162000287565b81146200033457600080fd5b50565b620003428162000291565b81146200034e57600080fd5b50565b6200035c81620002a1565b81146200036857600080fd5b50565b60805160601c60a05160601c60c05160c01c60e0516101005160e01c6101205161014051611491620003e7600039600081816102fa01526103f70152600081816107f6015261089f015260006106a5015260006106610152600061068201526000610625015260008181610337015261038b01526114916000f3fe6080604052600436106100c25760003560e01c8063473f1ddc1161007f5780636e04ff0d116100595780636e04ff0d1461022557806391ad27b414610263578063e55ae4e81461028e578063fd6673f5146102cb576100c2565b8063473f1ddc146101a457806353a2c19a146101cf5780635f1b0fd8146101fa576100c2565b806309bc33a7146100c7578063115cbaf5146100f25780631fe543e31461011d5780632cfcc53914610146578063320229eb146101505780634585e33b1461017b575b600080fd5b3480156100d357600080fd5b506100dc6102f6565b6040516100e99190611097565b60405180910390f35b3480156100fe57600080fd5b5061010761031e565b604051610114919061107c565b60405180910390f35b34801561012957600080fd5b50610144600480360381019061013f9190610e70565b610335565b005b61014e6103f5565b005b34801561015c57600080fd5b50610165610564565b6040516101729190611097565b60405180910390f35b34801561018757600080fd5b506101a2600480360381019061019d9190610d80565b61056d565b005b3480156101b057600080fd5b506101b961076d565b6040516101c69190610fb5565b60405180910390f35b3480156101db57600080fd5b506101e4610797565b6040516101f19190611097565b60405180910390f35b34801561020657600080fd5b5061020f6107a6565b60405161021c9190611097565b60405180910390f35b34801561023157600080fd5b5061024c60048036038101906102479190610dcd565b6107b3565b60405161025a929190610ff9565b60405180910390f35b34801561026f57600080fd5b5061027861089b565b6040516102859190611097565b60405180910390f35b34801561029a57600080fd5b506102b560048036038101906102b09190610e16565b6108c3565b6040516102c29190610fb5565b60405180910390f35b3480156102d757600080fd5b506102e061090b565b6040516102ed9190611097565b60405180910390f35b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600360009054906101000a900460ff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103e757337f00000000000000000000000000000000000000000000000000000000000000006040517f1cf993f40000000000000000000000000000000000000000000000000000000081526004016103de929190610fd0565b60405180910390fd5b6103f18282610918565b5050565b7f000000000000000000000000000000000000000000000000000000000000000034101561044f576040517f3038c00a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600181111561046357610462611371565b5b600360009054906101000a900460ff16600181111561048557610484611371565b5b146104bc576040517fd24a271400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f0805e1d667bddb8a95f0f09880cf94f403fb596ce79928d9f29b74203ba284d460405160405180910390a2565b60008054905090565b6000610587604051806020016040528060008152506107b3565b509050806105f65747600280549050600360009054906101000a900460ff1660018111156105b8576105b7611371565b5b6040517f584327aa0000000000000000000000000000000000000000000000000000000081526004016105ed939291906110b2565b60405180910390fd5b6001600360006101000a81548160ff0219169083600181111561061c5761061b611371565b5b021790555060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635d3b1d307f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060037f000000000000000000000000000000000000000000000000000000000000000060016040518663ffffffff1660e01b81526004016106e6959493929190611029565b602060405180830381600087803b15801561070057600080fd5b505af1158015610714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107389190610e43565b9050807fcd6e45c8998311cab7e9d4385596cac867e20a0587194b954fa3a731c93ce78b60405160405180910390a250505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600163ffffffff16905090565b6000600361ffff16905090565b600060606000600360009054906101000a900460ff1660018111156107db576107da611371565b5b600060018111156107ef576107ee611371565b5b14905060007f0000000000000000000000000000000000000000000000000000000000000000600054426108239190611192565b119050600080600280549050119050600080471190508280156108435750835b801561084c5750805b80156108555750815b9550856040518060400160405280600381526020017f30783000000000000000000000000000000000000000000000000000000000008152509550955050505050915091565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600282815481106108d9576108d86113a0565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600280549050905090565b600060028054905082600081518110610934576109336113a0565b5b602002602001015161094691906112e2565b905060006002828154811061095e5761095d6113a0565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600067ffffffffffffffff8111156109e7576109e66113cf565b5b604051908082528060200260200182016040528015610a155781602001602082028036833780820191505090505b5060029080519060200190610a2b929190610b4b565b506000600360006101000a81548160ff02191690836001811115610a5257610a51611371565b5b02179055504260008190555060008173ffffffffffffffffffffffffffffffffffffffff1647604051610a8490610fa0565b60006040518083038185875af1925050503d8060008114610ac1576040519150601f19603f3d011682016040523d82523d6000602084013e610ac6565b606091505b5050905080610b01576040517fa1d04b3900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff167f5b690ec4a06fe979403046eaeea5b3ce38524683c3001f662c8b5a829632f7df60405160405180910390a25050505050565b828054828255906000526020600020908101928215610bc4579160200282015b82811115610bc35782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610b6b565b5b509050610bd19190610bd5565b5090565b5b80821115610bee576000816000905550600101610bd6565b5090565b6000610c05610c008461110e565b6110e9565b90508083825260208201905082856020860282011115610c2857610c27611408565b5b60005b85811015610c585781610c3e8882610d56565b845260208401935060208301925050600181019050610c2b565b5050509392505050565b6000610c75610c708461113a565b6110e9565b905082815260208101848484011115610c9157610c9061140d565b5b610c9c84828561126f565b509392505050565b600082601f830112610cb957610cb8611403565b5b8135610cc9848260208601610bf2565b91505092915050565b60008083601f840112610ce857610ce7611403565b5b8235905067ffffffffffffffff811115610d0557610d046113fe565b5b602083019150836001820283011115610d2157610d20611408565b5b9250929050565b600082601f830112610d3d57610d3c611403565b5b8135610d4d848260208601610c62565b91505092915050565b600081359050610d6581611444565b92915050565b600081519050610d7a81611444565b92915050565b60008060208385031215610d9757610d96611417565b5b600083013567ffffffffffffffff811115610db557610db4611412565b5b610dc185828601610cd2565b92509250509250929050565b600060208284031215610de357610de2611417565b5b600082013567ffffffffffffffff811115610e0157610e00611412565b5b610e0d84828501610d28565b91505092915050565b600060208284031215610e2c57610e2b611417565b5b6000610e3a84828501610d56565b91505092915050565b600060208284031215610e5957610e58611417565b5b6000610e6784828501610d6b565b91505092915050565b60008060408385031215610e8757610e86611417565b5b6000610e9585828601610d56565b925050602083013567ffffffffffffffff811115610eb657610eb5611412565b5b610ec285828601610ca4565b9150509250929050565b610ed5816111c6565b82525050565b610ee4816111d8565b82525050565b610ef3816111e4565b82525050565b6000610f048261116b565b610f0e8185611176565b9350610f1e81856020860161127e565b610f278161141c565b840191505092915050565b610f3b8161125d565b82525050565b6000610f4e600083611187565b9150610f598261142d565b600082019050919050565b610f6d81611201565b82525050565b610f7c8161122f565b82525050565b610f8b81611239565b82525050565b610f9a81611249565b82525050565b6000610fab82610f41565b9150819050919050565b6000602082019050610fca6000830184610ecc565b92915050565b6000604082019050610fe56000830185610ecc565b610ff26020830184610ecc565b9392505050565b600060408201905061100e6000830185610edb565b81810360208301526110208184610ef9565b90509392505050565b600060a08201905061103e6000830188610eea565b61104b6020830187610f91565b6110586040830186610f64565b6110656060830185610f82565b6110726080830184610f82565b9695505050505050565b60006020820190506110916000830184610f32565b92915050565b60006020820190506110ac6000830184610f73565b92915050565b60006060820190506110c76000830186610f73565b6110d46020830185610f73565b6110e16040830184610f73565b949350505050565b60006110f3611104565b90506110ff82826112b1565b919050565b6000604051905090565b600067ffffffffffffffff821115611129576111286113cf565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611155576111546113cf565b5b61115e8261141c565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061119d8261122f565b91506111a88361122f565b9250828210156111bb576111ba611313565b5b828203905092915050565b60006111d18261120f565b9050919050565b60008115159050919050565b6000819050919050565b60008190506111fc82611430565b919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b600067ffffffffffffffff82169050919050565b6000611268826111ee565b9050919050565b82818337600083830152505050565b60005b8381101561129c578082015181840152602081019050611281565b838111156112ab576000848401525b50505050565b6112ba8261141c565b810181811067ffffffffffffffff821117156112d9576112d86113cf565b5b80604052505050565b60006112ed8261122f565b91506112f88361122f565b92508261130857611307611342565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b50565b6002811061144157611440611371565b5b50565b61144d8161122f565b811461145857600080fd5b5056fea26469706673582212200d14fae935eed23868695af71562e22f25c81da09d90cb6b5192968d38c02b8264736f6c63430008070033";

type RaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Raffle__factory extends ContractFactory {
  constructor(...args: RaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<Raffle> {
    return super.deploy(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    ) as Promise<Raffle>;
  }
  override getDeployTransaction(
    vrfCoordinatorV2: string,
    subscriptionId: BigNumberish,
    gasLane: BytesLike,
    interval: BigNumberish,
    entranceFee: BigNumberish,
    callbackGasLimit: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      vrfCoordinatorV2,
      subscriptionId,
      gasLane,
      interval,
      entranceFee,
      callbackGasLimit,
      overrides || {}
    );
  }
  override attach(address: string): Raffle {
    return super.attach(address) as Raffle;
  }
  override connect(signer: Signer): Raffle__factory {
    return super.connect(signer) as Raffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RaffleInterface {
    return new utils.Interface(_abi) as RaffleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Raffle {
    return new Contract(address, _abi, signerOrProvider) as Raffle;
  }
}
