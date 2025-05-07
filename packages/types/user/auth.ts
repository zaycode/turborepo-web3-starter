import type { UserProfile } from "./profile"

/**
 * Status autentikasi
 */
export interface AuthState {
  isAuthenticated: boolean
  user: UserProfile | null
  loading: boolean
  error: Error | null
}

/**
 * Opsi login
 */
export interface LoginOptions {
  message?: string
  chainId?: number
  expirationTime?: number
}

/**
 * Hasil login
 */
export interface LoginResult {
  token: string
  user: UserProfile
  expiresAt: number
}
