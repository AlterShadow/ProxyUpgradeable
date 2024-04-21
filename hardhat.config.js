require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

const { DEPLOYER_WALLET, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    bscTestnet: {
      url: "https://bsc-testnet.blockpi.network/v1/rpc/public",
      chainId: 97,
      accounts: [DEPLOYER_WALLET],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/uCORp6v8AFu144PO-uqbHfziTfmaNml7",
      chainId: 11155111,
      accounts: [DEPLOYER_WALLET],
    },
  },
};
