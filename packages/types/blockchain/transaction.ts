/**
 * Informasi transaksi blockchain
 */
export interface Transaction {
  hash: string
  from: string
  to: string
  value: string
  data?: string
  chainId: number
  status?: "pending" | "success" | "failed"
  timestamp?: number
  gasUsed?: bigint
  gasPrice?: bigint
  blockNumber?: number
  blockHash?: string
  nonce?: number
}

/**
 * Opsi untuk mengirim transaksi
 */
export interface SendTransactionOptions {
  to: string
  value?: bigint
  data?: string
  chainId?: number
  gasLimit?: bigint
  maxFeePerGas?: bigint
  maxPriorityFeePerGas?: bigint
  nonce?: number
}

/**
 * Hasil transaksi
 */
export interface TransactionResult {
  hash: string
  wait: () => Promise<Transaction>
}
