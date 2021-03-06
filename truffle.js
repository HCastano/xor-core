var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "gasp layer vote stick mystery motor kiss eye call ostrich hawk club";

module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // Match any network id,
            gas: 6612388
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/8JOaHX2U8Z0GGN8eDCpD")
            },
            network_id: 3,
            gas: 4690000
        }
    }
};

