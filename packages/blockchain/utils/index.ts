export * from "./hooks"

// Format token amount with decimals
export function formatTokenAmount(amount: bigint, decimals = 18): string {
  if (!amount) return "0"

  const divisor = BigInt(10) ** BigInt(decimals)
  const integerPart = amount / divisor
  const fractionalPart = amount % divisor

  // Convert fractional part to string and pad with leading zeros
  let fractionalStr = fractionalPart.toString()
  fractionalStr = fractionalStr.padStart(decimals, "0")

  // Trim trailing zeros
  fractionalStr = fractionalStr.replace(/0+$/, "")

  if (fractionalStr === "") {
    return integerPart.toString()
  }

  return `${integerPart}.${fractionalStr}`
}

// Parse token amount from string to bigint
export function parseTokenAmount(amount: string, decimals = 18): bigint {
  if (!amount) return BigInt(0)

  const parts = amount.split(".")
  const integerPart = parts[0]
  let fractionalPart = parts[1] || ""

  // Pad or truncate fractional part to match decimals
  if (fractionalPart.length > decimals) {
    fractionalPart = fractionalPart.substring(0, decimals)
  } else {
    fractionalPart = fractionalPart.padEnd(decimals, "0")
  }

  // Combine integer and fractional parts
  const combinedStr = integerPart + fractionalPart

  // Remove leading zeros
  const trimmedStr = combinedStr.replace(/^0+/, "") || "0"

  return BigInt(trimmedStr)
}
