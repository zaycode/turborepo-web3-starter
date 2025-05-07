'use client';
import {ReactNode} from 'react';
import {WagmiProvider} from 'wagmi';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
    RainbowKitProvider,
    getDefaultConfig,
    type Chain,
} from '@rainbow-me/rainbowkit';
import {useTheme} from 'next-themes';


import '@rainbow-me/rainbowkit/styles.css';
import {monadTestnet, sepolia, somniaTestnet} from "viem/chains";

const queryClient = new QueryClient();

interface Web3ProviderProps {
    children: ReactNode;
    projectId: string;
    appName: string;
    chains: readonly Chain[]; // <- pakai RainbowKit Chain
}

export function WalletProvider({
                                   children,
                                   projectId,
                                   appName,
                                   chains,
                               }: Web3ProviderProps) {

    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    if (!projectId) {
        throw new Error('WalletConnect projectId is not set');
    }
    if (chains.length < 1) {
        throw new Error('Set Support Chain');
    }

    const config = getDefaultConfig({
        appName: 'Gerhana',
        projectId: projectId,
        chains: [monadTestnet, somniaTestnet],
        ssr: true,
    });

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={isDark ? undefined : undefined}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

