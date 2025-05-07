/**
 * Respons API generik
 */
export interface ApiResponse<T> {
  data?: T
  error?: string
  status: number
  success: boolean
}

/**
 * Parameter paginasi
 */
export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

/**
 * Hasil paginasi
 */
export interface PaginatedResult<T> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

/**
 * Opsi filter
 */
export interface FilterOptions {
  [key: string]: string | number | boolean | string[] | number[] | null | undefined
}

/**
 * Opsi pengurutan
 */
export interface SortOptions {
  field: string
  direction: "asc" | "desc"
}
