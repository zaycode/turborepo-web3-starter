import { z } from "zod"

export const rpcSchema = z.object({
  mainnet: z.string().url().optional(),
  sepolia: z.string().url().optional(),
  arbitrum: z.string().url().optional(),
  optimism: z.string().url().optional(),
  polygon: z.string().url().optional(),
  base: z.string().url().optional(),
  monad: z.string().url().optional(),
  somnia: z.string().url().optional(),
})

export type RpcUrls = z.infer<typeof rpcSchema>

export const defaultRpcUrls: RpcUrls = {
  mainnet: "https://eth-mainnet.g.alchemy.com/v2/",
  sepolia: "https://eth-sepolia.g.alchemy.com/v2/",
  arbitrum: "https://arb-mainnet.g.alchemy.com/v2/",
  optimism: "https://opt-mainnet.g.alchemy.com/v2/",
  polygon: "https://polygon-mainnet.g.alchemy.com/v2/",
  base: "https://base-mainnet.g.alchemy.com/v2/",
  monad: "https://rpc.monad.xyz/sepolia",
  somnia: "https://testnet-rpc.somnia.xyz",
}

export const getRpcUrl = (network: keyof RpcUrls, apiKey?: string): string => {
  const baseUrl = defaultRpcUrls[network]
  if (!baseUrl) {
    throw new Error(`No RPC URL found for network: ${network}`)
  }

  // If the URL already includes the API key or doesn't need one
  if (!baseUrl.endsWith("/") || !apiKey) {
    return baseUrl
  }

  // Append API key to the URL
  return `${baseUrl}${apiKey}`
}
