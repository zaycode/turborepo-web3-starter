/**
 * Konfigurasi aplikasi
 */
export interface AppConfig {
  name: string
  description: string
  url: string
  supportedChains: number[]
  apiUrl?: string
  version?: string
  environment?: "development" | "staging" | "production"
}

/**
 * Konfigurasi tema
 */
export interface ThemeConfig {
  defaultTheme: "light" | "dark" | "system"
  storageKey: string
}

/**
 * Konfigurasi fitur
 */
export interface FeatureFlags {
  enableNFTs?: boolean
  enableSwap?: boolean
  enableStaking?: boolean
  enableBridge?: boolean
  [key: string]: boolean | undefined
}
