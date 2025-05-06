FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/dapp/package.json ./apps/dapp/package.json
COPY packages/ui/package.json ./packages/ui/package.json
COPY packages/blockchain/package.json ./packages/blockchain/package.json
COPY packages/config/package.json ./packages/config/package.json
COPY packages/types/package.json ./packages/types/package.json
COPY packages/utils/package.json ./packages/utils/package.json
COPY packages/typescript-config/package.json ./packages/typescript-config/package.json

RUN npm install -g pnpm
RUN pnpm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pnpm
RUN pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/dapp/public ./apps/dapp/public

# Set the correct permission for prerender cache
RUN mkdir -p /app/apps/dapp/.next/cache
RUN chown -R nextjs:nodejs /app/apps/dapp/.next/cache

COPY --from=builder --chown=nextjs:nodejs /app/apps/dapp/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/dapp/.next/static ./apps/dapp/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/dapp/server.js"]
