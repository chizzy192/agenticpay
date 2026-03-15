import { createConfig, http } from 'wagmi';
import { cronos, cronosTestnet } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
  chains: [cronosTestnet, cronos],
  connectors: [
    injected(), // MetaMask, Coinbase, etc.
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    }),
  ],
  transports: {
    [cronosTestnet.id]: http(),
    [cronos.id]: http(),
  },
});

