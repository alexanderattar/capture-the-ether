import { ethers } from 'hardhat';

(async () => {
  try {
    const factory = await ethers.getContractFactory('Counter');

    // If we had constructor arguments, they would be passed into deploy()
    let contract = await factory.deploy();

    console.log(
      `The address the Contract WILL have once mined: ${contract.address}`
    );

    console.log(
      `The transaction that was sent to the network to deploy the Contract: ${contract.deployTransaction.hash}`
    );

    console.log(
      'The contract is NOT deployed yet; we must wait until it is mined...'
    );
    await contract.deployed();
    console.log('Mined!');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
