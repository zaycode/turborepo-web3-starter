import type React from 'react';
import '@/styles/styles.css';
import { env } from '@/env';
import { getNetworkRpcUrl } from '@repo/blockchain/utils/rpc';
import { ThemeProvider } from '@repo/ui/components/theme-provider';
import { WalletProvider } from '@repo/ui/components/web3-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 DApp',
  description: 'Web3 DApp built with Next.js 15 and Tailwind CSS v4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get RPC URLs for each network
  const rpcUrls = {
    mainnet: getNetworkRpcUrl('mainnet'),
    sepolia: getNetworkRpcUrl('sepolia'),
    arbitrum: getNetworkRpcUrl('arbitrum'),
    optimism: getNetworkRpcUrl('optimism'),
    polygon: getNetworkRpcUrl('polygon'),
    base: getNetworkRpcUrl('base'),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="web3-theme">
          <WalletProvider
            projectId={env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
            rpcUrls={rpcUrls}
          >
            {children}
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
