FROM oven/bun:1.2.1-alpine AS builder

WORKDIR /app

## おまじない？？
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json bun.lock ./
COPY . .

RUN bun install
