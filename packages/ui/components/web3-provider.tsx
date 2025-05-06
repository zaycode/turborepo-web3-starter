"use client"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"
import { WagmiProvider } from "wagmi"
import { mainnet, sepolia, arbitrum, optimism, polygon, base } from "wagmi/chains"
import "@rainbow-me/rainbowkit/styles.css"

const queryClient = new QueryClient()

interface Web3ProviderProps {
  children: ReactNode
  projectId: string
  rpcUrls?: Record<string, string>
}

export function WalletProvider({ children, projectId, rpcUrls = {} }: Web3ProviderProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  if (!projectId) {
    throw new Error("NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID is not set")
  }

  // Configure chains with custom RPC URLs if provided
  const chains = [
    rpcUrls.mainnet
      ? { ...mainnet, rpcUrls: { default: { http: [rpcUrls.mainnet] }, public: { http: [rpcUrls.mainnet] } } }
      : mainnet,
    rpcUrls.sepolia
      ? { ...sepolia, rpcUrls: { default: { http: [rpcUrls.sepolia] }, public: { http: [rpcUrls.sepolia] } } }
      : sepolia,
    rpcUrls.arbitrum
      ? { ...arbitrum, rpcUrls: { default: { http: [rpcUrls.arbitrum] }, public: { http: [rpcUrls.arbitrum] } } }
      : arbitrum,
    rpcUrls.optimism
      ? { ...optimism, rpcUrls: { default: { http: [rpcUrls.optimism] }, public: { http: [rpcUrls.optimism] } } }
      : optimism,
    rpcUrls.polygon
      ? { ...polygon, rpcUrls: { default: { http: [rpcUrls.polygon] }, public: { http: [rpcUrls.polygon] } } }
      : polygon,
    rpcUrls.base ? { ...base, rpcUrls: { default: { http: [rpcUrls.base] }, public: { http: [rpcUrls.base] } } } : base,
  ]

  const config = getDefaultConfig({
    appName: "Next.js TurboRepo Web3",
    projectId: projectId,
    chains: chains,
    ssr: true,
  })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={isDark ? undefined : undefined}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
