import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "custom onion grab gain dragon divert hard swear habit matrix salmon decade olive normal proud keen eagle idea chicken enemy plastic carry swift about cream";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map