# DApp Smart Contracts

A decentralized application (DApp) project featuring Ethereum smart contracts for message storage functionality.

## Overview

This project implements a MessageStorage smart contract that allows storing and retrieving messages on the Ethereum blockchain.

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- Hardhat
- MetaMask wallet

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/TariqAyman/dapp-smart-contracts.git

cd dapp-smart-contractsnpm install
```

Configuration
1. Create a .env file in the root directory:

```bash
PRIVATE_KEY=your_wallet_private_key
ALCHEMY_API_KEY=your_alchemy_api_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

2. Configure your network in hardhat.config.js

Deployment
To deploy the smart contract to a network:

```bash
npx hardhat run scripts/deploy.js --network <network_name>
```

For local testing:

npx hardhat node
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Testing
Run the test suite:
```bash
npx hardhat test
```

Contract Verification
After deployment, verify your contract on Etherscan:

```bash
npx hardhat verify --network <network_name> <deployed_contract_address>
```

```
Project Structure
├── contracts/           # Smart contract source files
├── scripts/            # Deployment and interaction scripts
├── test/              # Test files
├── hardhat.config.js  # Hardhat configuration
└── README.md          # Project documentation
```

License
MIT

Contributing
Fork the repository
Create your feature branch
Commit your changes
Push to the branch
Create a new Pull Request

This README provides a clear structure and instructions for setting up, deploying, and testing the smart contract project. It includes all necessary steps from installation to contract verification, making it easy for other developers to understand and work with the project.