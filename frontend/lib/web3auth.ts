import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x152", // Cronos Testnet (338 in decimal)
  rpcTarget: "https://evm-t3.cronos.org",
  displayName: "Cronos Testnet",
  blockExplorer: "https://testnet.cronoscan.com",
  ticker: "TCRO",
  tickerName: "Cronos Test Token",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

// Get client ID from environment or use a placeholder for development
const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;

if (!clientId) {
  console.warn(
    'NEXT_PUBLIC_WEB3AUTH_CLIENT_ID is not set. Web3Auth will not work until you add your client ID to .env.local'
  );
}

// Only initialize Web3Auth if client ID is provided
export const web3auth = clientId
  ? new Web3Auth({
      clientId,
      web3AuthNetwork: "testnet",
      chainConfig,
      privateKeyProvider,
      uiConfig: {
        appName: "AgenticPay",
        theme: {
          primary: "#0052FF", // Cronos blue
        },
        mode: "light",
        loginMethodsOrder: ["google", "twitter", "email_passwordless"],
      },
    })
  : null;

