# AgenticPay - TrustLayer

AgenticPay is a blockchain-powered freelancer payment platform that enables secure, instant, and transparent payments through smart contract escrow.

## Architecture

The project is organized into three main modules:

```
trustlayer/
├── frontend/    # Next.js 16 web application
├── backend/     # API server (verification & invoicing)
├── contracts/   # Solidity smart contracts
```

### Frontend

Built with **Next.js 16**, **React 19**, and **TypeScript**. Key technologies:

- **wagmi + viem** — Ethereum wallet connection and contract interaction
- **Web3Auth** — Social login support (Google, Twitter, email)
- **Zustand** — State management
- **Framer Motion** — Animations
- **Tailwind CSS 4** — Styling
- **shadcn/ui (Radix)** — UI components

### Smart Contracts

Solidity-based escrow contract (`AgenticPay.sol`) deployed on **Cronos Testnet**. Features:

- Project creation with client/freelancer roles
- ETH and ERC20 token payments
- Escrow funding and release on work approval
- Work submission with GitHub repository linking
- Dispute arbitration system

### Backend

API server providing:

- **AI Work Verification** — Validates freelancer deliverables against project requirements
- **AI Invoice Generation** — Automated invoice creation for completed work

## Features

- **Instant Payments** — Funds released immediately upon work approval
- **Blockchain Escrow** — Smart contract holds funds securely until milestones are met
- **Social & Wallet Login** — Connect via Google/Twitter or any Web3 wallet
- **AI Verification** — Automated code review against project specifications
- **Milestone Tracking** — Track project progress with clear status updates
- **Invoice Management** — Auto-generated invoices for completed projects

## Getting Started

### Prerequisites

- Node.js 20+
- A Web3 wallet (MetaMask, etc.) or social account

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local  # Configure environment variables
npm run dev
```

### Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed AgenticPay contract address |
| `NEXT_PUBLIC_WEB3AUTH_CLIENT_ID` | Web3Auth client ID for social login |
| `NEXT_PUBLIC_BACKEND_URL` | Backend API base URL |

## Network

Currently configured for **Cronos Testnet** (Chain ID: 338).

## License

All rights reserved.
