const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledResume = require('../ethereum/build/CredentialStore.json');

let accounts;
let resumeAddress;
let resume;

beforeEach(async () => {
	
	accounts = await web3.eth.getAccounts();

	resume = await new web3.eth.Contract(
		JSON.parse(compiledResume.interface))
		.deploy({ data: compiledResume.bytecode})
		.send({ from: accounts[0], gas:'4000000'});

});

describe('Resume', () => {
	it('deploys a resume', () => {
		assert.ok(resume.options.address);
	});

	it('marks caller as the owner', async() => {

		const owner = await resume.methods.owner().call();
		assert.equal(accounts[0],owner);
	});

});