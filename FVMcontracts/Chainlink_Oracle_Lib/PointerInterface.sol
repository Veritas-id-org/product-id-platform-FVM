// File: https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/interfaces/PointerInterface.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface PointerInterface {
  function getAddress() external view returns (address);
}