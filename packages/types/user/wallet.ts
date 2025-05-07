/**
 * Informasi wallet
 */
export interface WalletInfo {
  address: string
  balance: bigint
  chainId: number
  ensName?: string
  isConnected: boolean
}

/**
 * Provider wallet
 */
export interface WalletProvider {
  id: string
  name: string
  icon?: string
  description?: string
  installed?: boolean
  recommended?: boolean
}
