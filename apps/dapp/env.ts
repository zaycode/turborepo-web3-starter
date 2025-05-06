import { keys as config } from "@repo/config/keys"
import { keys as blockchain } from "@repo/blockchain/keys"
import { keys as database } from "@repo/database/keys"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
  extends: [config(), blockchain(), database()],
  server: {},
  client: {},
  runtimeEnv: {},
})
