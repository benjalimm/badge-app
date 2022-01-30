module.exports = {
  isLocal: false,
  local : { 
    url: 'http://localhost:8545',
    badgeContractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  },
  mumbai: {
    url: 'https://polygon-mumbai.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0x4fb8160BC7C3e810997816d6CfAB0B3D84FA72Bb"
  },
  mainnet: {
    url: 'https://polygon-mainnet.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  }
}