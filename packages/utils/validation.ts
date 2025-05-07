/**
 * Validasi alamat email
 * @param email Alamat email yang akan divalidasi
 * @returns Boolean yang menunjukkan apakah email valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validasi alamat Ethereum
 * @param address Alamat Ethereum yang akan divalidasi
 * @returns Boolean yang menunjukkan apakah alamat valid
 */
export function isValidEthereumAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Validasi URL
 * @param url URL yang akan divalidasi
 * @returns Boolean yang menunjukkan apakah URL valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Validasi string kosong atau hanya whitespace
 * @param str String yang akan divalidasi
 * @returns Boolean yang menunjukkan apakah string tidak kosong
 */
export function isNotEmpty(str: string): boolean {
  return str.trim().length > 0
}

/**
 * Validasi panjang string
 * @param str String yang akan divalidasi
 * @param min Panjang minimum
 * @param max Panjang maksimum
 * @returns Boolean yang menunjukkan apakah panjang string valid
 */
export function isValidLength(str: string, min: number, max: number): boolean {
  const length = str.length
  return length >= min && length <= max
}
