require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad half produce broken spread'; 
let testAccounts = [
"0xb4838cb4ecdaefc10e353b785fb9ac1be0b5387a85ee59a5b7762a6fb74a13e3",
"0xb64333070aacf1f3ace9f1811112a701145c41b28c5ff70e3a239ab92563d824",
"0x44b9ca35d71dd5a2998d0e806b2a6caf436a65b863d88b1da94940f842d32b71",
"0x86c23f6d5e6f9bc0b573e94fba0799f1c1fe64c51c552c5d8adc2e89cdd410bf",
"0x0401cae4549b0f76eafbec6c6e4f7426535eea17c882ba64253db1085e43c6c4",
"0x28102fdaaf42e865899d12a965f222e2f811d5be8e5a7da17d04e541624e7623",
"0x353b18c81ea0dc26bcb1d758d961a840023ea2d22ea7d4f7946ea7c95ad7b42d",
"0xbe3f26d1b6b8063aebaad77db7f3e90d5eeaa185badef4b525489f3580193d29",
"0x77fb614666ef8ebe659051b321545250cd6ebda29a7199e54a1c5b71b7789667",
"0xc76afb323f9de0d4c99487018f8e26c9a2628de621aab224614292933c061f90"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


