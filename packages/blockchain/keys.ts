import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"
import { rpcSchema } from "./constants/rpc"

export const keys = () =>
  createEnv({
    server: {
      INFURA_API_KEY: z.string().optional(),
      ALCHEMY_API_KEY: z.string().optional(),
      PRIVATE_KEY: z.string().optional(),
      ETHERSCAN_API_KEY: z.string().optional(),
      RPC_URLS: rpcSchema.optional(),
    },
    client: {},
    runtimeEnv: {
      INFURA_API_KEY: process.env.INFURA_API_KEY,
      ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
      PRIVATE_KEY: process.env.PRIVATE_KEY,
      ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
      RPC_URLS: process.env.RPC_URLS ? JSON.parse(process.env.RPC_URLS) : undefined,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  })
