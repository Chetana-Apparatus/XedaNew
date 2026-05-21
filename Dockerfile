# --------- Dependencies ---------
FROM node:24-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# --------- Build ---------
FROM node:24-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_CONTACTS_API_URL=https://api.xedafarm.com/api/contacts/
ENV NEXT_PUBLIC_CONTACTS_API_URL=$NEXT_PUBLIC_CONTACTS_API_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --------- Production ---------
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=6014

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 6014

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://127.0.0.1:6014/api/health || exit 1

CMD ["node", "server.js"]
