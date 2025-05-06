import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined;
}

export const prisma =
  global.client ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.client = prisma;
}

export * from '@prisma/client';
