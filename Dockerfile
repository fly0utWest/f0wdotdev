FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --production

EXPOSE 16000

CMD ["npx", "next", "start"]
