// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract UserData {
    mapping(address => string) private userMessages;

    event MessageStored(address indexed user, string message);

    function storeMessage(string memory _message) public {
        userMessages[msg.sender] = _message;
        emit MessageStored(msg.sender, _message);
    }

    function getMessage() public view returns (string memory) {
        return userMessages[msg.sender];
    }
}
