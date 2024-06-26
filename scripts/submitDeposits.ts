import { ethers } from "hardhat";
import "dotenv/config";
import contractAddresses from "./contractAddresses.json";
import { calcRecipientSaltHash } from "./utils/hash";

async function main() {
  const liquidityContractAddress = contractAddresses.liquidity;
  if (!liquidityContractAddress) {
    throw new Error("liquidityContractAddress is not set");
  }

  const rollupContractAddress = contractAddresses.rollup;
  if (!rollupContractAddress) {
    throw new Error("rollupContractAddress is not set");
  }

  const owner = (await ethers.getSigners())[0].address;
  console.log("owner address", owner);

  const liquidity = await ethers.getContractAt(
    "Liquidity",
    liquidityContractAddress
  );

  const rollup = await ethers.getContractAt("Rollup", rollupContractAddress);

  console.log(
    "lastProcessedDepositId",
    (await liquidity.getLastProcessedDepositId()).toString()
  );

  const lastProcessedBlockNumber = 2;
  const tx = await liquidity.submitDeposits(lastProcessedBlockNumber);
  console.log("tx hash:", tx.hash);
  await tx.wait();
  console.log("Submit deposit");

  console.log(
    "lastProcessedDepositId",
    (await liquidity.getLastProcessedDepositId()).toString()
  );

  const recipient = "0x" + "0".repeat(63) + "1";
  const salt = "0x" + "0".repeat(63) + "1";
  const recipientSaltHash = calcRecipientSaltHash(recipient, salt);
  const deposits = [
    {
      recipientSaltHash: recipientSaltHash,
      tokenIndex: 1,
      amount: 100,
    },
  ];
  const tx2 = await rollup.processDeposits(deposits);
  console.log("tx hash:", tx2.hash);
  await tx2.wait();
  console.log("Process deposits");

  console.log(
    "deposit tree root",
    (await rollup.getDepositTreeRoot()).toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
