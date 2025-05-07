// Blockchain types
export interface TokenInfo {
  address: string
  name: string
  symbol: string
  decimals: number
}

export interface ChainInfo {
  id: number
  name: string
  network: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: {
    default: {
      http: string[]
    }
    public: {
      http: string[]
    }
  }
  blockExplorers: {
    default: {
      name: string
      url: string
    }
  }
}

// User types
export interface UserProfile {
  id: string
  address: string
  username?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// Application types
export interface AppConfig {
  name: string
  description: string
  url: string
  supportedChains: number[]
}

// Re-export all types
export * from "./blockchain"
export * from "./user"
export * from "./app"
