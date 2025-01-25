require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

module.exports = {
    solidity: "0.8.19",
    networks: {
        goerli: {
            url: process.env.ALCHEMY_URL,
            accounts: [process.env.TESTNET_PRIVATE_KEY]
        }
    }
};
