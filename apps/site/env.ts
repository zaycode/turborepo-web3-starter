import { keys as config } from "@repo/config/keys"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
  extends: [config()],
  server: {},
  client: {},
  runtimeEnv: {},
})
