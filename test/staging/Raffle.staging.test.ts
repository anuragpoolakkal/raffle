import { assert, expect } from "chai";
import { BigNumber } from "ethers";
import { network, ethers, getNamedAccounts } from "hardhat";
import { developmentChains } from "../../helper-hardhat-config";
import { Raffle } from "../../typechain";

developmentChains.includes(network.name)
	? describe.skip
	: describe("Raffle Staging Tests", () => {
			let raffle: Raffle;
			let deployer: string;
			let raffleEntranceFee: BigNumber;
			beforeEach(async () => {
				deployer = (await getNamedAccounts()).deployer;
				raffle = await ethers.getContract("Raffle", deployer);
				raffleEntranceFee = await raffle.getEntranceFee();
			});

			describe("fullfillRandomWords", () => {
				it("works with live Chainlink Keepers and Chainlink VRF, we get a random winner", async () => {
					// enter the raffle
					console.log("Setting up test...");
					const startingTimeStamp = await raffle.getLatestTimeStamp();
					const accounts = await ethers.getSigners();

					console.log("Setting up Listener...");
					await new Promise<void>(async (resolve, reject) => {
						// setup listener before we enter the raffle
						// Just in case the blockchain moves REALLY fast
						raffle.once("WinnerPicked", async () => {
							console.log("WinnerPicked event fired");

							try {
								const recentWinner = await raffle.getRecentWinner();
								const raffleState = await raffle.getRaffleState();
								const winnerEndingBalance = await accounts[0].getBalance();
								const endingTimeStamp = await raffle.getLatestTimeStamp();

								await expect(raffle.getPlayer(0)).to.be.reverted;
								assert.equal(recentWinner.toString(), accounts[0].address);
								assert.equal(raffleState, 0);
								assert.equal(
									winnerEndingBalance.toString(),
									winnerStartingBalance.add(raffleEntranceFee).toString()
								);
								assert(endingTimeStamp > startingTimeStamp);
								resolve();
							} catch (e) {
								console.log(e);
								reject(e);
							}
						});
						console.log("Entering the raffle");
						const tx = await raffle.enterRaffle({ value: raffleEntranceFee });
						await tx.wait(1);
						console.log("Waiting...");
						const winnerStartingBalance = await accounts[0].getBalance();
					});
				});
			});
	  });
