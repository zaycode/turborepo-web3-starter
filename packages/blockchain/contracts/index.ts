import { http, type Address, createPublicClient } from 'viem';
import { monadTestnet, somniaTestnet } from 'wagmi/chains';
import exampleAbi from './abis/ExampleToken.json';

// Contract addresses
export const contractAddresses = {
  exampleToken: {
    [monadTestnet.id]: '0x0000000000000000000000000000000000000000' as Address, // Replace with actual address after deployment
    [somniaTestnet.id]: '0x0000000000000000000000000000000000000000' as Address, // Replace with actual address after deployment
  },
};

// Contract ABIs
export const abis = {
  exampleToken: exampleAbi,
};

// Public client for read-only operations
export const getPublicClient = (chainId: number) => {
  const chain = chainId === monadTestnet.id ? monadTestnet : somniaTestnet;

  return createPublicClient({
    chain,
    transport: http(),
  });
};

// Get contract address based on chain ID
export const getContractAddress = (
  contractName: keyof typeof contractAddresses,
  chainId: number
): Address => {
  return (
    contractAddresses[contractName][chainId] ||
    '0x0000000000000000000000000000000000000000'
  );
};
