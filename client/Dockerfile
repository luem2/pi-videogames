FROM node:18-alpine AS CLIENT-HenryGames

RUN npm install -g pnpm

WORKDIR /usr/src/client

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "preview", "--host"]