/**
 * Mengelompokkan array berdasarkan properti tertentu
 * @param array Array yang akan dikelompokkan
 * @param key Fungsi untuk mendapatkan kunci pengelompokan
 * @returns Objek dengan kunci sebagai kelompok dan nilai sebagai array item
 */
export function groupBy<T, K extends string | number | symbol>(array: T[], key: (item: T) => K): Record<K, T[]> {
  return array.reduce(
    (result, item) => {
      const groupKey = key(item)
      result[groupKey] = result[groupKey] || []
      result[groupKey].push(item)
      return result
    },
    {} as Record<K, T[]>,
  )
}

/**
 * Menghapus duplikat dari array
 * @param array Array dengan kemungkinan duplikat
 * @param key Fungsi opsional untuk mendapatkan kunci unik
 * @returns Array tanpa duplikat
 */
export function uniqueBy<T, K>(array: T[], key?: (item: T) => K): T[] {
  if (!key) {
    return [...new Set(array)]
  }

  const seen = new Set<K>()
  return array.filter((item) => {
    const itemKey = key(item)
    if (seen.has(itemKey)) {
      return false
    }
    seen.add(itemKey)
    return true
  })
}

/**
 * Mengurutkan array berdasarkan properti tertentu
 * @param array Array yang akan diurutkan
 * @param key Fungsi untuk mendapatkan kunci pengurutan
 * @param direction Arah pengurutan ('asc' atau 'desc')
 * @returns Array yang diurutkan
 */
export function sortBy<T, K>(array: T[], key: (item: T) => K, direction: "asc" | "desc" = "asc"): T[] {
  const multiplier = direction === "asc" ? 1 : -1
  return [...array].sort((a, b) => {
    const aKey = key(a)
    const bKey = key(b)

    if (aKey < bKey) return -1 * multiplier
    if (aKey > bKey) return 1 * multiplier
    return 0
  })
}

/**
 * Membagi array menjadi chunk dengan ukuran tertentu
 * @param array Array yang akan dibagi
 * @param size Ukuran setiap chunk
 * @returns Array dari chunk
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
