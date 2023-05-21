// File: https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/OracleInterface.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface OracleInterface {
  function fulfillOracleRequest(
    bytes32 requestId,
    uint256 payment,
    address callbackAddress,
    bytes4 callbackFunctionId,
    uint256 expiration,
    bytes32 data
  ) external returns (bool);

  function isAuthorizedSender(address node) external view returns (bool);

  function withdraw(address recipient, uint256 amount) external;

  function withdrawable() external view returns (uint256);
}