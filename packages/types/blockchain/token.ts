/**
 * Informasi token ERC-20
 */
export interface TokenInfo {
  address: string
  name: string
  symbol: string
  decimals: number
  balance?: bigint
  chainId?: number
}

/**
 * Informasi token ERC-721 (NFT)
 */
export interface NFTInfo {
  address: string
  tokenId: string
  name?: string
  symbol?: string
  tokenURI?: string
  metadata?: NFTMetadata
  owner: string
  chainId: number
}

/**
 * Metadata NFT
 */
export interface NFTMetadata {
  name?: string
  description?: string
  image?: string
  attributes?: NFTAttribute[]
  [key: string]: any
}

/**
 * Atribut NFT
 */
export interface NFTAttribute {
  trait_type: string
  value: string | number
  display_type?: string
}
