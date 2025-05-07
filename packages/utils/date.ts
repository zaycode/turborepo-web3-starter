/**
 * Format tanggal ke string yang mudah dibaca
 * @param date Tanggal yang akan diformat
 * @param locale Locale untuk format (default: 'en-US')
 * @returns String tanggal yang diformat
 */
export function formatDate(date: Date | string | number, locale = "en-US"): string {
  const dateObj = new Date(date)
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

/**
 * Format tanggal dan waktu ke string yang mudah dibaca
 * @param date Tanggal yang akan diformat
 * @param locale Locale untuk format (default: 'en-US')
 * @returns String tanggal dan waktu yang diformat
 */
export function formatDateTime(date: Date | string | number, locale = "en-US"): string {
  const dateObj = new Date(date)
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(dateObj)
}

/**
 * Mendapatkan waktu relatif (misalnya "5 menit yang lalu")
 * @param date Tanggal untuk dibandingkan dengan waktu sekarang
 * @param locale Locale untuk format (default: 'en-US')
 * @returns String waktu relatif
 */
export function getRelativeTime(date: Date | string | number, locale = "en-US"): string {
  const dateObj = new Date(date)
  const now = new Date()

  const formatter = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  })

  const diffInSeconds = Math.floor((dateObj.getTime() - now.getTime()) / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if (Math.abs(diffInDays) >= 30) {
    return formatDate(date, locale)
  } else if (Math.abs(diffInDays) > 0) {
    return formatter.format(diffInDays, "day")
  } else if (Math.abs(diffInHours) > 0) {
    return formatter.format(diffInHours, "hour")
  } else if (Math.abs(diffInMinutes) > 0) {
    return formatter.format(diffInMinutes, "minute")
  } else {
    return formatter.format(diffInSeconds, "second")
  }
}

/**
 * Fungsi sleep untuk menunda eksekusi
 * @param ms Waktu penundaan dalam milidetik
 * @returns Promise yang diselesaikan setelah penundaan
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
