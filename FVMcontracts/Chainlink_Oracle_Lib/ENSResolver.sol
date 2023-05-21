// File: https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.8/vendor/ENSResolver.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

abstract contract ENSResolver {
  function addr(bytes32 node) public view virtual returns (address);
}