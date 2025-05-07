/**
 * Mengambil nilai dari objek dengan path (misalnya 'user.address.city')
 * @param obj Objek sumber
 * @param path Path ke nilai yang diinginkan
 * @param defaultValue Nilai default jika path tidak ditemukan
 * @returns Nilai pada path atau defaultValue
 */
export function getValueByPath<T, D = undefined>(obj: Record<string, any>, path: string, defaultValue?: D): T | D {
  const keys = path.split(".")
  let result = obj

  for (const key of keys) {
    if (result === undefined || result === null) {
      return defaultValue as D
    }
    result = result[key]
  }

  return (result === undefined ? defaultValue : result) as T | D
}

/**
 * Mengubah objek menjadi query string
 * @param params Objek parameter
 * @returns Query string
 */
export function objectToQueryString(params: Record<string, any>): string {
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`).join("&")
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    })
    .join("&")

  return queryParams ? `?${queryParams}` : ""
}

/**
 * Menggabungkan beberapa objek secara mendalam
 * @param objects Objek-objek yang akan digabungkan
 * @returns Objek gabungan
 */
export function deepMerge<T extends Record<string, any>>(...objects: T[]): T {
  return objects.reduce((result, current) => {
    Object.keys(current).forEach((key) => {
      const resultValue = result[key]
      const currentValue = current[key]

      if (
        resultValue &&
        currentValue &&
        typeof resultValue === "object" &&
        typeof currentValue === "object" &&
        !Array.isArray(resultValue) &&
        !Array.isArray(currentValue)
      ) {
        result[key] = deepMerge(resultValue, currentValue)
      } else {
        result[key] = currentValue
      }
    })

    return result
  }, {} as T)
}

/**
 * Mengubah objek menjadi array pasangan kunci-nilai
 * @param obj Objek sumber
 * @returns Array pasangan kunci-nilai
 */
export function objectToEntries<T>(obj: Record<string, T>): [string, T][] {
  return Object.entries(obj)
}

/**
 * Mengubah array pasangan kunci-nilai menjadi objek
 * @param entries Array pasangan kunci-nilai
 * @returns Objek
 */
export function entriesToObject<T>(entries: [string, T][]): Record<string, T> {
  return Object.fromEntries(entries) as Record<string, T>
}
