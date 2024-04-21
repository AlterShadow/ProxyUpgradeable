const { ethers, upgrades } = require("hardhat");

async function main() {
  console.log("entered here");

  const SymbloxContract = await ethers.getContractFactory("SymbloxToken");

  console.log("Deploying SymbloxToken Contract...");

  const contract = await upgrades.deployProxy(SymbloxContract, {
    initializer: "initializer",
  });

  console.log("Passed");

  await contract.deployed();

  console.log("SymbloxToken deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
