import { ethers } from 'ethers';
// import  { useNavigate, Routes  } from 'react-router-dom'
// import { Route } from 'react-router-dom';

const metamaskURL =
  'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

class Ethereum {
  constructor() {
    this.ethereum = window.ethereum;
    this.provider = this.ethereum && new ethers.providers.Web3Provider(this.ethereum);
    //this.ABI = new ethers.utils.Interface(ABI);
    this.contract = null;
    this.BEP20Contract = null;
    this.PROXYContract = null;
  }

  get getEthereum() {
    if (!this.isMetaMaskInstalled()) {
      window.open(metamaskURL);
      throw new Error('MetaMask has not been installed');
    }
    return this.ethereum;
  }

  set setEthereum(value) {
    this.ethereum = value;
  }

  get getProvider() {
    if (!this.isMetaMaskInstalled()) {
      window.open(metamaskURL);
      throw new Error('MetaMask has not been installed');
    }
    return this.provider;
  }

  set setProvider(value) {
    this.provider = value;
  }

  isMetaMaskInstalled() {
    return Boolean(this.ethereum && this.ethereum.isMetaMask);
  }

  isMetaMaskConnected() {
    return this.ethereum && this.ethereum.isConnected();
  }

  async connectMetaMaskWallet() {
    if (!this.isMetaMaskInstalled()) {
      localStorage.removeItem('metamask-address');
      window.open(metamaskURL);
      return;
    }
    try {
        const rs = await this.getEthereum.request({ method: 'eth_requestAccounts' });
        // console.log("rs: ", rs);
        localStorage.setItem("metamask-address", rs);
        return rs;
       
        
    } catch (error) {
      console.log(error);
    }
  }

  async transfer(to, amount) {
    const transactionParameters = {
      nonce: '0x00', // ignored by MetaMask
      gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
      gas: '0x2710', // customizable by user during MetaMask confirmation.
      to: to, // Required except during contract publications.
      from: this.getEthereum.selectedAddress, // must match user's active address.
      value:  ethers.utils.parseEther(amount)._hex, // Only required to send ether to the recipient from the initiating external account.
      chainId: this.getEthereum.chainId, // Use selected chain ID
    };
    
    // txHash is a hex string
    // As with any RPC call, it may throw an error
    const txHash = await this.getEthereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    });
    console.log('txHash', txHash);
  } 

  chainChangedListener() {
    try {
      this.getEthereum.on('chainChanged', (chainId) => {
        console.log('Change Network', chainId);
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  }

  toChecksumAddress = (address) => {
    // Ethereum address format
    if (address && address.startsWith('0x') && address.length === 42) {
      return ethers.utils.getAddress(address);
    }
  
    return address;
  };

  async getEthereumAccounts() {
    try {
      const isAllowedNetwork = this.isAllowedNetwork();

      if (isAllowedNetwork) {
        const accounts = await this.getEthereum.request({ method: 'eth_accounts' });
        const address = this.toChecksumAddress(accounts[0]);
        console.log("test: " + address);
        localStorage.setItem('address', address);
        // const balance = await this.getProvider.getBalance(address);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const EthereumInstance = new Ethereum();
EthereumInstance.chainChangedListener();

export { EthereumInstance };
