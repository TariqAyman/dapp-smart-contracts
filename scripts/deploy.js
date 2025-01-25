const hre = require("hardhat");

async function main() {
    const MessageStorage = await hre.ethers.getContractFactory("MessageStorage");
    const messageStorage = await MessageStorage.deploy();
    await messageStorage.deployed();
    console.log("MessageStorage deployed to:", messageStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
