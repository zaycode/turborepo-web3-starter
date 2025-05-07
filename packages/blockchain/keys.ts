import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const keys = () =>
  createEnv({
    server: {
      PRIVATE_KEY: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: z.string(),
    },
    runtimeEnv: {
      PRIVATE_KEY: process.env.PRIVATE_KEY,
      NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  })
