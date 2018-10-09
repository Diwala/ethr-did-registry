const TestRPC = require("ganache-cli");
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      provider: TestRPC.provider({port: 7545}),
      network_id: "*" // Match any network id
    },
    truffle: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    "ropsten-infura": {
      provider: () => new HDWalletProvider("<passphrase>", "https://ropsten.infura.io/<key>"),
      network_id: 3,
      gas: 4700000
    }

  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'CHF',
      gasPrice: 21
    }
  }
};
