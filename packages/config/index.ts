import type { ChainInfo } from '@repo/types';
import { monadTestnet, somniaTestnet } from 'wagmi/chains';

// App configuration
export const appConfig = {
  name: 'Gerhana',
  description: 'Web3 Starter Kit built with Next.js 15 and Tailwind CSS v4',
  url: 'https://gerhana.vercel.app',
  supportedChains: [monadTestnet.id, somniaTestnet.id],
};

// Chain configurations
export const chains: Record<number, ChainInfo> = {
  [monadTestnet.id]: monadTestnet as unknown as ChainInfo,
  [somniaTestnet.id]: somniaTestnet as unknown as ChainInfo,
};

// Environment variables validation
export const validateEnv = () => {
  const requiredEnvVars = ['NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID'];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
};

export * from './keys';
