/**
 * Informasi chain blockchain
 */
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
    [key: string]: {
      name: string
      url: string
    }
  }
  testnet?: boolean
}

/**
 * Informasi blok
 */
export interface BlockInfo {
  number: number
  hash: string
  timestamp: number
  parentHash: string
  nonce?: string
  difficulty?: bigint
  gasLimit: bigint
  gasUsed: bigint
}
