import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      NODE_ENV: z.enum(['development', 'production', 'test']),
    },
    client: {
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string().min(1),
      NEXT_PUBLIC_INFURA_API_KEY: z.string().optional(),
      NEXT_PUBLIC_CHAIN_ID: z.string().optional(),
    },
    runtimeEnv: {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
        process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
      NEXT_PUBLIC_INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
      NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  });
