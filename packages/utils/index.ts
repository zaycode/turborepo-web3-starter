const LEADING_ZERO_REGEX = /^0+/;

// Format address to display format (0x1234...5678)
export function formatAddress(address: string, start = 6, end = 4): string {
  if (!address) return '';
  if (address.length < start + end) return address;

  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

// Sleep utility
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Local storage utilities
export const storage = {
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

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      console.error(`Error setting item ${key} in localStorage:`, error);
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
    }
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

// Format token amount with decimals
export function formatTokenAmount(amount: bigint, decimals = 18): string {
  if (!amount) return '0';

  const divisor = BigInt(10) ** BigInt(decimals);
  const integerPart = amount / divisor;
  const fractionalPart = amount % divisor;

  // Convert fractional part to string and pad with leading zeros
  let fractionalStr = fractionalPart.toString();
  fractionalStr = fractionalStr.padStart(decimals, '0');

  // Trim trailing zeros
  fractionalStr = fractionalStr.replace(LEADING_ZERO_REGEX, '');

  if (fractionalStr === '') {
    return integerPart.toString();
  }

  return `${integerPart}.${fractionalStr}`;
}

// Parse token amount from string to bigint
export function parseTokenAmount(amount: string, decimals = 18): bigint {
  if (!amount) return BigInt(0);

  const parts = amount.split('.');
  const integerPart = parts[0];
  let fractionalPart = parts[1] || '';

  // Pad or truncate fractional part to match decimals
  if (fractionalPart.length > decimals) {
    fractionalPart = fractionalPart.substring(0, decimals);
  } else {
    fractionalPart = fractionalPart.padEnd(decimals, '0');
  }

  // Combine integer and fractional parts
  const combinedStr = integerPart + fractionalPart;

  // Remove leading zeros
  const trimmedStr = combinedStr.replace(LEADING_ZERO_REGEX, '') || '0';

  return BigInt(trimmedStr);
}
