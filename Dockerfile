# Stage 1: Build the app
FROM node:18 AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine

WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --production

# Expose the port that the app will run on
EXPOSE 3000

# Use the optimized production build
CMD ["npx", "next", "start"]
