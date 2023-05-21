// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Chainlink_Oracle_Lib/ChainlinkClient.sol";
import "./Chainlink_Oracle_Lib/Ownable.sol";

contract DIDOracleClient is ChainlinkClient, Ownable {
    using Chainlink for Chainlink.Request;
    
    /**
    * @notice data needed to connect to oracle
    */
    address private oracle;
    bytes32 private jobId;
    uint256 private fee; 

    /**
    * @notice mapping for business/brand/product ID to an array of whitelisted addresses
    */
    mapping(uint256=>address[]) private whitelist;

    /**
    * @notice event emitted when the request is fullfilled
    */
    event dataReceived(
        bytes32 indexed requestId,
        bytes data
    );

    /**
    * @notice for only allowed addresses
    */
    modifier onlyWhitelisted(uint256 _Id) {
        require(isWhitelisted(_Id), "Caller is not whitelisted");
        _;
    }
    
    /**
    * @notice sets base data for Oracle and onlyOwner modifier
    */
    constructor() Ownable() {
        setPublicChainlinkToken();
        oracle = address(0);
        jobId = "";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }
    
    /**
    * @notice creates an oracle request to receive business data
    * @param _businessId is the ID of the business data was requested
    */
    function requestBusinessDetails(uint256 _businessId) public onlyWhitelisted(_businessId) returns (bytes32 requestId, bytes32 eventHash)
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        string memory apiLink = string.concat("https://example-api.com/business/id=", toString(_businessId));
        request.add("get", apiLink);
        request.add("path", "BusinessDetails");
        requestId = sendChainlinkRequestTo(oracle, request, fee);
        eventHash = calcEventHash(requestId, msg.sender);
        return (requestId, eventHash);
    }

    /**
    * @notice creates an oracle request to receive brand data
    * @param _brandId is the ID of the brand data was requested
    */
    function requestBrandDetails(uint256 _brandId) public onlyWhitelisted(_brandId) returns (bytes32 requestId, bytes32 eventHash)
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        string memory apiLink = string.concat("https://example-api.com/brand/id=", toString(_brandId));
        request.add("get", apiLink);
        request.add("path", "BrandDetails");
        requestId = sendChainlinkRequestTo(oracle, request, fee);
        eventHash = calcEventHash(requestId, msg.sender);
        return (requestId, eventHash);
    }

    /**
    * @notice creates an oracle request to receive product data
    * @param _productId is the ID of the product data was requested
    */
    function requestProductDetails(uint256 _productId) public onlyWhitelisted(_productId) returns (bytes32 requestId, bytes32 eventHash)
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        string memory apiLink = string.concat("https://example-api.com/product/id=", toString(_productId));
        request.add("get", apiLink);
        request.add("path", "ProductDetails");
        requestId = sendChainlinkRequestTo(oracle, request, fee);
        eventHash = calcEventHash(requestId, msg.sender);
        return (requestId, eventHash);
    }
    
    /**
    * @notice callback function when a chainlink job is fulfilled; emits event with data
    * @param _requestId of the fulfilled request
    * @param _data returned data from the api call
    */
    function fulfill(bytes32 _requestId, bytes calldata _data) public recordChainlinkFulfillment(_requestId) 
    {
        emit dataReceived(_requestId, _data);
    }
    
    /**
    * @notice function to set the address of the oracle smart contract
    * @param _addr address of the smart contract
    */
    function setOracleAddress(address _addr) public onlyOwner() {
        oracle = _addr;
    }

    /**
    * @notice function to set the job ID of the api call
    * @param _id chainlink node job ID
    */
    function setJobId(bytes32 _id) public onlyOwner() {
        jobId = _id;
    }

    /**
    * @notice to calculate an event hash used for encryption of data
    * @param _requestId request ID for which the event is meant for
    * @param _sender address that created the request
    */
    function calcEventHash(bytes32 _requestId, address _sender) private pure returns(bytes32) {
        return keccak256(abi.encodePacked(_requestId, _sender));
    }

    /**
    * @notice used to whitelist an address for a given business/brand/product ID
    * @param _productId request ID for which the whitelisting is meant for
    * @param _addr address that has to be whitelisted
    */
    function whitelistAddress(uint256 _productId, address _addr) public onlyOwner() {
        whitelist[_productId].push(_addr);
    }

    /**
    * @notice used to check if the caller is whitelisted for a given business/brand/product ID
    * @param _Id of the object (business/brand/product)
    */
    function isWhitelisted(uint256 _Id) public view returns(bool) {
        for (uint256 i = 0; i < whitelist[_Id].length; i++) {
            if(whitelist[_Id][i] == msg.sender){
                return true;
            }
        }
        return false;
    }

    /**
    * @notice OpenZeppelin function to convert uint256 to string
    * @param _value uint256 value that has to be converted
    */
    function toString(uint256 _value) internal pure returns (string memory) {
            unchecked {
                bytes16 _SYMBOLS = "0123456789abcdef";
                uint256 length = log10(_value) + 1;
                string memory buffer = new string(length);
                uint256 ptr;
                /// @solidity memory-safe-assembly
                assembly {
                    ptr := add(buffer, add(32, length))
                }
                while (true) {
                    ptr--;
                    /// @solidity memory-safe-assembly
                    assembly {
                        mstore8(ptr, byte(mod(_value, 10), _SYMBOLS))
                    }
                    _value /= 10;
                    if (_value == 0) break;
                }
                return buffer;
            }
        }

    /**
    * @notice OpenZeppelin function return the log in base 10, rounded down, of a positive value
    * @param _value value to be calculated with
    */
    function log10(uint256 _value) internal pure returns (uint256) {
        uint256 result = 0;
        unchecked {
            if (_value >= 10 ** 64) {
                _value /= 10 ** 64;
                result += 64;
            }
            if (_value >= 10 ** 32) {
                _value /= 10 ** 32;
                result += 32;
            }
            if (_value >= 10 ** 16) {
                _value /= 10 ** 16;
                result += 16;
            }
            if (_value >= 10 ** 8) {
                _value /= 10 ** 8;
                result += 8;
            }
            if (_value >= 10 ** 4) {
                _value /= 10 ** 4;
                result += 4;
            }
            if (_value >= 10 ** 2) {
                _value /= 10 ** 2;
                result += 2;
            }
            if (_value >= 10 ** 1) {
                result += 1;
            }
        }
        return result;
    }
    
}