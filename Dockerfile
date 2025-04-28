# ----------------------------------------------------------------
# Stage 1: Build Stage - compile TypeScript and generate Prisma client
# ----------------------------------------------------------------
FROM node:18-bullseye AS builder
WORKDIR /app

# Install ffmpeg from Debian repositories (for media processing)
RUN apt-get update && \
  apt-get install -y --no-install-recommends ffmpeg && \
  rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN --mount=type=cache,target=/root/.npm \
  npm install -g pnpm

# Use development mode to install devDependencies (needed for TS compilation)
ENV NODE_ENV=development

# Copy package.json and package-lock.json and install all dependencies
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
  pnpm install --no-frozen-lockfile --force

# Copy the rest of the source code (including Prisma schema)
COPY . .

# Generate Prisma client based on schema
RUN pnpm run prisma:generate

# Compile TypeScript to JavaScript (outputs to /app/dist)
RUN pnpm run build

# ----------------------------------------------------------------
# Stage 2: Production Stage - only runtime dependencies and ffmpeg
# ----------------------------------------------------------------
FROM node:18-bullseye-slim
WORKDIR /app

# Install ffmpeg from Debian repositories (for media processing)
RUN apt-get update && \
  apt-get install -y --no-install-recommends ffmpeg && \
  rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json (again) for npm ci
COPY --from=builder /app/package*.json ./

# Install only production dependencies
ENV NODE_ENV=production
RUN npm ci --only=production

# Copy compiled application code from the build stage
COPY --from=builder /app/dist ./dist

# Expose application port (Express default)
EXPOSE 3000

# Start the server (assumes entry point is dist/index.js)
CMD ["node", "dist/index.js"]
