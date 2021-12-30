## Running local development on Hardhat

*Note: the first three steps are meant to be run on the hardhat project, not on the frontend*

Step 1 -  Compile contracts into ABI and export to frontend 

```bash
# NOTE: In root directory of hardhat project NOT frontend project
npx hardhat compile

# Import to frontend - Assuming "../badge-app/artificacts" is in frontend code
cp -rf artifacts/contracts/ ../badge-app/artifacts/contracts/
```

Step 2 - ****Run local node

```bash
npx hardhat node 

####This should produce the following logs:

# Contract deployment: BadgeV1
  # Contract address:    0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
  # Transaction:         0x5f047a001f869b6cf8c7e75c4efc9a8e5af21ae2ff4559ad46ad1cda865c7af0
  # From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  # Value:               0 ETH
  # Gas used:            10429260 of 10429260
  # Block #2:            0x833d927fed8bc553621623813ac94dd364a77e3fde776d5805301e425441d2eb

  # console.log:
    # Succesfully deployed
```

Step 3 - Deploy to local node

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

### On badge-app frontend

Step 4 - Copy and paste contract address logged from step 2 into configs/blockchain.config.js. 

Make sure isLocal is set to true

```json
"module.exports = {
  isLocal: true,
  local : { 
    url: 'http://localhost:8545',
    badgeContractAddress: <INPUT ADDRESS HERE>
  },
  mumbai: {
    url: 'https://polygon-mumbai.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  },
  mainnet: {
    url: 'https://polygon-mainnet.infura.io/v3/9c0e4231c73e40da8c90be9e43411cd6',
    badgeContractAddress: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  }
}"
```

Step 5 - Run frontend locally

```json
npx run dev
```