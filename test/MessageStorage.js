const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MessageStorage", function () {
    it("Should store and retrieve a message", async function () {
        const [owner] = await ethers.getSigners();
        const MessageStorage = await ethers.getContractFactory("MessageStorage");
        const messageStorage = await MessageStorage.deploy();
        await messageStorage.deployed();

        await messageStorage.setMessage("Hello, Hardhat!");
        const storedMessage = await messageStorage.getMyMessage();
        expect(storedMessage).to.equal("Hello, Hardhat!");
    });
});

describe("UserData Contract", function () {
    let UserData, userData, owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        UserData = await ethers.getContractFactory("UserData");
        userData = await UserData.deploy();
    });

    it("Should store and retrieve a message", async function () {
        await userData.storeMessage("Hello Blockchain");
        expect(await userData.getMessage()).to.equal("Hello Blockchain");
    });
});

describe("MessageStorage", function () {
    let contract;

    beforeEach(async () => {
        const MessageStorage = await ethers.getContractFactory("MessageStorage");
        contract = await MessageStorage.deploy();
    });

    it("Should store and retrieve messages", async () => {
        const [owner] = await ethers.getSigners();
        await contract.storeMessage("Hello World");
        expect(await contract.getMessage(owner.address)).to.equal("Hello World");
    });
});