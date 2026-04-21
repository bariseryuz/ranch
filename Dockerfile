# syntax=docker/dockerfile:1
# Node 20 on Debian — avoids Node 22+ Alpine + npm "exit handler" / flaky ci issues in Docker.
FROM node:20-bookworm-slim AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV VITE_BASE=/
# Same-origin concierge route served by server/index.js (do not put GEMINI_API_KEY here)
ENV VITE_CONCIERGE_API_URL=/api/concierge
ENV NODE_OPTIONS=--max-old-space-size=4096
RUN npm run build

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY server ./server

EXPOSE 3000
ENV PORT=3000
CMD ["npm", "run", "start"]
