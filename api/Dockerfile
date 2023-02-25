FROM node:18-alpine AS API-HenryGames

RUN npm install -g pnpm

WORKDIR /usr/src/api

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]