FROM node:23-alpine3.20 as build

WORKDIR /usr/scr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:23-alpine3.20

WORKDIR /usr/scr/app

COPY --from=build /usr/scr/app/dist ./dist
COPY --from=build /usr/scr/app/package*.json ./

RUN npm install --only=production

CMD ["node", "dist/main.js"]

EXPOSE 3000