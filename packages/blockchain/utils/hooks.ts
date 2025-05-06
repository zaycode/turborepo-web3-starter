import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { abis, getContractAddress } from "../contracts"

// Hook to get token balance
export function useTokenBalance(address?: string) {
  const { chain } = useAccount()

  return useReadContract({
    address: getContractAddress("exampleToken", chain?.id || 0),
    abi: abis.exampleToken,
    functionName: "balanceOf",
    args: [address],
    enabled: !!address && !!chain,
  })
}

// Hook to transfer tokens
export function useTokenTransfer() {
  const { chain } = useAccount()

  return useWriteContract({
    address: getContractAddress("exampleToken", chain?.id || 0),
    abi: abis.exampleToken,
    functionName: "transfer",
  })
}

// Hook to mint tokens (owner only)
export function useTokenMint() {
  const { chain } = useAccount()

  return useWriteContract({
    address: getContractAddress("exampleToken", chain?.id || 0),
    abi: abis.exampleToken,
    functionName: "mint",
  })
}
