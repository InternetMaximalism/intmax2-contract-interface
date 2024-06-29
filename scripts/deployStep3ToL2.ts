import { ethers } from "hardhat";
import "dotenv/config";
import contractAddresses from "./contractAddresses.json";

async function main() {
  const liquidityContractAddress = contractAddresses.liquidity;
  if (!liquidityContractAddress) {
    throw new Error("liquidityContractAddress is not set");
  }

  const blockBuilderRegistryContractAddress =
    contractAddresses.blockBuilderRegistry;
  if (!blockBuilderRegistryContractAddress) {
    throw new Error("blockBuilderRegistryContractAddress is not set");
  }

  const rollupContractAddress = contractAddresses.rollup;
  if (!rollupContractAddress) {
    throw new Error("rollupContractAddress is not set");
  }

  const owner = (await ethers.getSigners())[0].address;
  console.log("owner address", owner);

  const rollup = await ethers.getContractAt("Rollup", rollupContractAddress);

  const tx = await rollup.updateDependentContract(
    liquidityContractAddress,
    blockBuilderRegistryContractAddress
  );
  console.log("tx hash:", tx.hash);
  await tx.wait();
  console.log("Updated rollup address");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});