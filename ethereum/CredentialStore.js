import web3 from './web3';
import CredentialStore from './build/CredentialStore';

const instance = new web3.eth.Contract(
  JSON.parse(CredentialStore.interface),
  '0xfaEd1925cf72bEBc30eC1dE575421C7A413865e8'
);

export default instance;