import web3 from './web3';
import CredentialStore from './build/CredentialStore';

const instance = new web3.eth.Contract(
  JSON.parse(CredentialStore.interface),
  '0x7AF92d8A22A29050fC1f18BC8B6cf54de74C0A24'
);

export default instance;