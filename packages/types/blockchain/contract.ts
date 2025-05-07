/**
 * Opsi untuk memanggil kontrak
 */
export interface ContractCallOptions {
  address: string
  abi: any
  functionName: string
  args?: any[]
  chainId?: number
  value?: bigint
}

/**
 * Opsi untuk men-deploy kontrak
 */
export interface ContractDeployOptions {
  abi: any
  bytecode: string
  args?: any[]
  chainId?: number
  value?: bigint
}

/**
 * Informasi kontrak
 */
export interface ContractInfo {
  address: string
  abi: any
  name?: string
  chainId: number
  deployedAt?: number
  deployedBy?: string
}

/**
 * Event kontrak
 */
export interface ContractEvent {
  name: string
  address: string
  blockNumber: number
  transactionHash: string
  args: Record<string, any>
  chainId: number
}
