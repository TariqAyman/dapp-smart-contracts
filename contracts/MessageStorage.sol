// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStorage {
    // Mapping of user wallet => stored message
    mapping(address => string) private messages;

    // Store a message for the sender
    function setMessage(string calldata _message) external {
        messages[msg.sender] = _message;
    }

    // Retrieve the message of the caller
    function getMyMessage() external view returns (string memory) {
        return messages[msg.sender];
    }

    // Retrieve the message of any wallet address
    function getMessage(address _address) external view returns (string memory) {
        return messages[_address];
    }
}
