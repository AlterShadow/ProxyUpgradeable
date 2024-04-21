require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

const { DEPLOYER_WALLET, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.20",
    setting: {},
  },
  networks: {
    bscTestnet: {
      url: "https://bsc-testnet.blockpi.network/v1/rpc/public",
      chainId: 97,
      accounts: [DEPLOYER_WALLET],
    },
    sepoliaTestnet: {
      url: "https://1rpc.io/sepolia",
      chainId: 11155111,
      accounts: [DEPLOYER_WALLET],
    },
  },
};
