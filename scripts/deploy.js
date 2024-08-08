// async function main() {
//     const token = await ethers.deployContract("Contract");
//     console.log("Deployed Contract Address:", await token.getAddress());

// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const MyERC1155 = await hre.ethers.getContractFactory("MyERC1155");
    console.log("Deploying MyERC1155 contract...");

    const initialOwner = deployer.address; // Address you want to set as initial owner
    const myERC1155 = await MyERC1155.deploy(initialOwner);

    // Wait for deployment to be mined
    await myERC1155.waitForDeployment();

    console.log("Deployed MyERC1155 Contract Address:", myERC1155.target);

    // Deploy the main contract with the MyERC1155 address
    const Contract = await hre.ethers.getContractFactory("Contract");
    console.log("Deploying main contract with MyERC1155 address...");

    const contract = await Contract.deploy(myERC1155.target);
    await contract.waitForDeployment();

    console.log("Deployed Main Contract Address:", contract.target);

    // Optionally, write these addresses to a file
    const fs = require('fs');
    const contractsData = {
        ContractAddress: contract.address,
        MyERC1155Address: myERC1155.address
    };
    fs.writeFileSync('deployedContracts.json', JSON.stringify(contractsData, null, 2));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
