import web3 from './web3';
import CredentialStore from './build/CredentialStore';

const instance = new web3.eth.Contract(
  JSON.parse(CredentialStore.interface),
  '0x3234C0EF0f54360e80FFfEb135d6A1083011Ffa4'
);

export default instance;