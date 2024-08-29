# Stage 1: Build the app
FROM node:18 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./
RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", 'dev']
