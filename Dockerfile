FROM node:20-alpine AS base

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM node:20-alpine as prod

WORKDIR /app

COPY --from=base /app .
ENV NODE_ENV=production

CMD ["npm", "run", "start"]