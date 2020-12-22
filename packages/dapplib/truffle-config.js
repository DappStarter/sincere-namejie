require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note ridge color grace fashion flock gasp'; 
let testAccounts = [
"0xa63bd274ff30983a3ed1c324679bb0dd8beae951c77cb38124bb5e8afff6ce80",
"0xa28da9e50e972ee1052e9aa3427c4c6c32aaa808abd82b6a5fc8521784c070f1",
"0x4ff60790993683918be3e22925249bf96256e77e57562c36da8561084c02206c",
"0x47039cfd9d61bf1925f4c41bdcc5936774c5fb8d5c386f0db24451ce55b17be4",
"0x65a93d35e2c360cf2fed59073d1efc4912317e2ba5e6f66de075d502653cb4fb",
"0x7cf224b2a37d8697340a2d4003a02e17f027d66142bcb9f472013dee96ad37a6",
"0xdcb4829de5fb406a3c34a9759af4211ffc8e35132e9e4dbaf9026e71edeedfcd",
"0x5c32dedc248e52447dacbc16d08e0d79e7637dfb3f0750f000c6ed101643c83a",
"0x3433fa1f602fbec1f44e2f234eb364b0d8f927cbef56987ebfa6c5e8da98b330",
"0x162b2dab2b2349aa7698ba0cfa5a7ff369f14ec5d5e224cbbf38fd48ef16ac2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
