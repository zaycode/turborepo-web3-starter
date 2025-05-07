<div align="center">
  <h1>Turborepo Web3 Starter</h1>
  <p><strong>A production-grade TurboRepo template for Web3 applications</strong></p>
  <p>Built with Next.js 15, Tailwind CSS v4, and Hardhat</p>
  
  <p align="center">
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#packages"><strong>Packages</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#usage-guide"><strong>Usage Guide</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a> ·
    <a href="#support"><strong>Support</strong></a>
  </p>
  
  <br />
</div>

## ✨ Features

- 🏎️ **TurboRepo** - Optimized build system for maximum developer productivity
- 🔥 **Next.js 15** - The latest version of the React framework
- 💨 **Tailwind CSS v4** - The latest version of the utility-first CSS framework
- 🔗 **Web3 Ready** - Integrated with wagmi, viem, and RainbowKit
- 🧰 **Hardhat** - Ethereum development environment for smart contracts
- 📚 **Documentation** - Comprehensive documentation site
- 🧪 **Testing** - Built-in test generation and setup
- 🔒 **Type Safety** - End-to-end type safety, including environment variables

## 📦 Packages

This monorepo is organized with the following key packages:

<table>
  <thead>
    <tr>
      <th>Package</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>@repo/ui</code></td>
      <td>
        <strong>UI Component Library</strong><br />
        Shared React components built with shadcn/ui and Tailwind CSS v4.
        Includes Web3 components like ConnectButton and WalletProvider.
      </td>
    </tr>
    <tr>
      <td><code>@repo/blockchain</code></td>
      <td>
        <strong>Blockchain Utilities</strong><br />
        Web3 integration with wagmi and viem. Includes contract ABIs,
        hooks for blockchain interactions, and utility functions.
      </td>
    </tr>
    <tr>
      <td><code>@repo/config</code></td>
      <td>
        <strong>Shared Configuration</strong><br />
        Environment variables, app configuration, and chain settings.
        Uses <code>@t3-oss/env-nextjs</code> for type-safe environment variables.
      </td>
    </tr>
    <tr>
      <td><code>@repo/database</code></td>
      <td>
        <strong>Database Client</strong><br />
        Prisma client and schema for database access.
        Includes models for users and transactions.
      </td>
    </tr>
    <tr>
      <td><code>@repo/types</code></td>
      <td>
        <strong>Shared TypeScript Types</strong><br />
        Common TypeScript types used across the monorepo.
        Includes blockchain, user, and application types.
      </td>
    </tr>
    <tr>
      <td><code>@repo/utils</code></td>
      <td>
        <strong>Shared Utilities</strong><br />
        Common utility functions used across the monorepo.
        Includes formatting, storage, and other helpers.
      </td>
    </tr>
  </tbody>
</table>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-turborepo-web3.git
cd nextjs-turborepo-web3

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your values
\`\`\`

### Development

\`\`\`bash
# Start the development server
pnpm dev
\`\`\`

This will start the development servers for all applications:
- Site: http://localhost:3000
- DApp: http://localhost:3001
- API: http://localhost:3002


### Building

\`\`\`bash
# Build all applications
pnpm build
\`\`\`

## 📂 Project Structure

\`\`\`
.
├── apps
│   ├── site       # Next.js Marketing Site
│   ├── dapp       # Next.js DApp
│   ├── api        # NestJS API
│   └── docs       # Next.js Documentation
├── hardhat        # Hardhat project for smart contracts
├── packages
│   ├── blockchain # Blockchain utilities
│   ├── config     # Shared configuration
│   ├── database   # Database client and schema
│   ├── types      # Shared TypeScript types
│   ├── ui         # Shared UI components
│   └── utils      # Shared utilities
└── scripts        # Build and development scripts
\`\`\`

## 📘 Usage Guide

### Environment Configuration

The project uses `@t3-oss/env-nextjs` for type-safe environment variables. Each package that requires environment variables has a `keys.ts` file that defines the schema for its variables.

\`\`\`typescript
// Example: packages/config/keys.ts
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      NODE_ENV: z.enum(["development", "production", "test"]),
    },
    client: {
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string().min(1),
      // ...
    },
    runtimeEnv: {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
      // ...
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  });
\`\`\`

In your apps, you can import and use these environment configurations:

\`\`\`typescript
// Example: apps/dapp/env.ts
import { keys as config } from "@repo/config/keys";
import { keys as blockchain } from "@repo/blockchain/keys";
import { keys as database } from "@repo/database/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [config(), blockchain(), database()],
  server: {},
  client: {},
  runtimeEnv: {},
});
\`\`\`

Then use the environment variables in your code:

\`\`\`typescript
import { env } from "@/env";

// Use environment variables
const projectId = env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
\`\`\`

### Web3 Integration

The project includes a Web3 provider that you can use to connect to blockchain networks:

\`\`\`tsx
// Example: apps/dapp/app/layout.tsx
import { WalletProvider } from "@repo/ui/components/web3-provider";
import { env } from "@/env";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletProvider projectId={env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
\`\`\`

### Smart Contract Development

The project includes a Hardhat environment for smart contract development:

\`\`\`bash
# Compile smart contracts
cd hardhat
pnpm compile

# Run tests
pnpm test

# Deploy to testnet
pnpm deploy:testnet
\`\`\`

### Using Turbo Generators

The project includes generators to quickly create new apps and packages. There are two ways to use them:

#### 1. Using the CLI Scripts

\`\`\`bash
# Generate a new app
pnpm generate:app my-new-app

# Generate a new package
pnpm generate:package my-new-package

# Generate a test for a component
pnpm generate:test button ui
\`\`\`

#### 2. Using Turborepo Generators

\`\`\`bash
# Generate a new app
pnpm turbo gen app

# Generate a new package
pnpm turbo gen package
\`\`\`

When using Turborepo generators, you'll be prompted for the name and type of the app or package you want to create.

### Testing

The project includes a test generator to quickly create test files for your components:

\`\`\`bash
# Generate a test for a component
pnpm generate:test button ui

# Run tests
pnpm test
\`\`\`

## 🛠️ Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development servers |
| `pnpm build` | Build all applications |
| `pnpm lint` | Lint all files |
| `pnpm format` | Format all files |
| `pnpm test` | Run tests |
| `pnpm analyze` | Analyze bundle sizes |
| `pnpm clean` | Clean node_modules |
| `pnpm generate:app` | Generate a new app |
| `pnpm generate:package` | Generate a new package |
| `pnpm generate:test` | Generate test files |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT

## 💖 Support

If you find this project useful, please consider supporting it by donating:

- **Ethereum**: `0xd5270e9cA602EB91bBA72107F9c115768A811a59`
- **Solana**: `2XL4QzcVj6PuK7nB5Zusq3ZnMzQacbWLoiesKesSajTf`

Your support helps maintain and improve this project!
