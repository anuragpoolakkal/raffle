const { ethers } = require("hardhat");

const networkConfig = {
    11155111: {
        name: "sepolia",
        vrfCoordinatorV2: "0x271682deb8c4e0901d1a1550ad2e64d568e69909",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
        subscriptionId: "0",
        callbackGasLimit: "500000",
        interval: "30",
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // gasLane does not matter in mock, we will be mocking the gasLane anyways.
        callbackGasLimit: "500000",
        interval: "30",
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = { networkConfig, developmentChains };
