import algosdk from "algoskd";

const algodToken = "a".repeat(64);
const server: string ="http://localhoat";
const port: string = "4001";

const mnemonic: string = "custom onion grab gain dragon divert hard swear habit matrix salmon decade olive normal proud keen eagle idea chicken enemy plastic carry swift about cream";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, posrt);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}