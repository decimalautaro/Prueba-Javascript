const isMetamaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const getMetamaskAddress = async () => {
    const { ethereum } = window;
    try {
      const [address] = await ethereum.request({ method: 'eth_requestAccounts' });
      return address;
    } catch (err) {
      console.error(err);
    }
  };

  export {
    isMetamaskInstalled,
    getMetamaskAddress
}