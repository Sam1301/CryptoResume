import web3 from './web3';
import CredentialStore from './build/CredentialStore';

const instance = new web3.eth.Contract(
  JSON.parse(CredentialStore.interface),
  '0xA3cDd6E146C53f0013C26E014a0e0291b24C57fc'
);

export default instance;