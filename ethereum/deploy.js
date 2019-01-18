const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledResume = require('./build/CredentialStore.json')

const provider = new HDWalletProvider(
	'supply lecture label affair slot quit sign pause large hockey blind ball',
	'https://rinkeby.infura.io/v3/3e932da64ab5478c9238d2b72fbd7ba1'
	);

const web3 = new Web3(provider);

const deploy = async () => {

	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledResume.interface))
	.deploy({ data: compiledResume.bytecode})
	.send({gas:'4000000',from: accounts[0]});

	console.log('Contract deployed to', result.options.address);
};

deploy();

