module.exports = {
  isLocal: false,
  local : { 
    url: 'http://localhost:8545',
    badgeContractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3"
  },
  mumbai: {
    url: 'https://polygon-mumbai.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0xC446BAE3161743a30B5425D2B0EF819902Ed990e"
  },
  mainnet: {
    url: 'https://polygon-mainnet.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  },
  optimisticKovan: {
    url: 'https://optimism-kovan.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0x9533864706caa42Df88CDf673e95E18BDFcF2Be7"
  },
  optimismMainnet: {
    url: 'https://optimism-mainnet.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: ""
  }
}