/**
 * Notifikasi UI
 */
export interface Notification {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
  duration?: number
  timestamp: number
  read?: boolean
  link?: string
}

/**
 * Status modal
 */
export interface ModalState {
  isOpen: boolean
  data?: any
}

/**
 * Opsi toast
 */
export interface ToastOptions {
  title?: string
  description: string
  type?: "default" | "success" | "error" | "warning" | "info"
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
