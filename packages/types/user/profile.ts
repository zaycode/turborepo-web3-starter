/**
 * Profil pengguna
 */
export interface UserProfile {
  id: string
  address: string
  username?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
  email?: string
  bio?: string
  socialLinks?: SocialLinks
}

/**
 * Link sosial pengguna
 */
export interface SocialLinks {
  twitter?: string
  github?: string
  discord?: string
  telegram?: string
  website?: string
  [key: string]: string | undefined
}
