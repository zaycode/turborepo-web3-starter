import { env } from "../env"
import { defaultRpcUrls, getRpcUrl, type RpcUrls } from "../constants/rpc"

// Get custom RPC URLs from environment variables if available
const customRpcUrls: Partial<RpcUrls> = env.RPC_URLS || {}

// Merge default and custom RPC URLs
export const rpcUrls: RpcUrls = {
  ...defaultRpcUrls,
  ...customRpcUrls,
}

// Get RPC URL for a specific network
export const getNetworkRpcUrl = (network: keyof RpcUrls): string => {
  // Try to use custom RPC URL first
  if (customRpcUrls[network]) {
    return customRpcUrls[network] as string
  }

  // Fall back to default RPC URL with API key if available
  const apiKey =
    network === "mainnet" || network === "sepolia" ? env.INFURA_API_KEY || env.ALCHEMY_API_KEY : env.ALCHEMY_API_KEY

  return getRpcUrl(network, apiKey)
}
