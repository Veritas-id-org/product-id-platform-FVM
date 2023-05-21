// File: https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.7/interfaces/WithdrawalInterface.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface WithdrawalInterface {
  /**
   * @notice transfer LINK held by the contract belonging to msg.sender to
   * another address
   * @param recipient is the address to send the LINK to
   * @param amount is the amount of LINK to send
   */
  function withdraw(address recipient, uint256 amount) external;

  /**
   * @notice query the available amount of LINK to withdraw by msg.sender
   */
  function withdrawable() external view returns (uint256);
}