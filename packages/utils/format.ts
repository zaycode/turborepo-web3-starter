const LEADING_ZERO_REGEX = /^0+/

/**
 * Format alamat wallet menjadi format yang lebih pendek (0x1234...5678)
 * @param address Alamat wallet lengkap
 * @param start Jumlah karakter di awal yang ditampilkan
 * @param end Jumlah karakter di akhir yang ditampilkan
 * @returns Alamat yang diformat
 */
export function formatAddress(address: string, start = 6, end = 4): string {
  if (!address) return ""
  if (address.length < start + end) return address

  return `${address.slice(0, start)}...${address.slice(-end)}`
}

/**
 * Format jumlah token dengan mempertimbangkan desimal
 * @param amount Jumlah token dalam BigInt
 * @param decimals Jumlah desimal token
 * @returns String yang diformat
 */
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

/**
 * Parse jumlah token dari string ke BigInt
 * @param amount String jumlah token
 * @param decimals Jumlah desimal token
 * @returns BigInt yang mewakili jumlah token
 */
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
  const trimmedStr = combinedStr.replace(LEADING_ZERO_REGEX, "") || "0"

  return BigInt(trimmedStr)
}

/**
 * Format jumlah mata uang dengan simbol dan pemisah ribuan
 * @param amount Jumlah dalam angka
 * @param currency Kode mata uang (USD, EUR, dll)
 * @param locale Locale untuk format (default: 'en-US')
 * @returns String yang diformat
 */
export function formatCurrency(amount: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount)
}

/**
 * Format persentase
 * @param value Nilai desimal (0.1 = 10%)
 * @param digits Jumlah digit setelah desimal
 * @returns String persentase yang diformat
 */
export function formatPercent(value: number, digits = 2): string {
  return `${(value * 100).toFixed(digits)}%`
}
