import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
    createEnv({
        server: {
            DATABASE_URL: z.string().min(1),
            DATABASE_TYPE: z.enum(['neon', 'pgsql', 'mongo', 'mysql', 'supabase']),
        },
        runtimeEnv: {
            DATABASE_URL: process.env.DATABASE_URL,
            DATABASE_TYPE: process.env.DATABASE_TYPE as any,
        },
    });


