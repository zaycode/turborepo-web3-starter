/**
 * Utilitas untuk bekerja dengan localStorage dengan type safety
 */
export const storage = {
  /**
   * Mengambil item dari localStorage
   * @param key Kunci item
   * @param defaultValue Nilai default jika item tidak ditemukan
   * @returns Nilai yang disimpan atau defaultValue
   */
  get: <T>(key: string, defaultValue?: T): T | undefined => {
    if (typeof window === 'undefined') return defaultValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error: any) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return defaultValue;
    }
  },

  /**
   * Menyimpan item ke localStorage
   * @param key Kunci item
   * @param value Nilai yang akan disimpan
   */
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.error(`Error setting item ${key} in localStorage:`, error);
    }
  },

  /**
   * Menghapus item dari localStorage
   * @param key Kunci item yang akan dihapus
   */
  remove: (key: string): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
    }
  },

  /**
   * Menghapus semua item dari localStorage
   */
  clear: (): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

/**
 * Utilitas untuk bekerja dengan sessionStorage
 */
export const sessionStorage = {
  get: <T>(key: string, defaultValue?: T): T | undefined => {
    if (typeof window === 'undefined') return defaultValue;

    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error: any) {
      console.error(`Error getting item ${key} from sessionStorage:`, error);
      return defaultValue;
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;

    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.error(`Error setting item ${key} in sessionStorage:`, error);
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;

    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item ${key} from sessionStorage:`, error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;

    try {
      window.sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  },
};
