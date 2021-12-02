FROM node:16.13.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install next express http-proxy-middleware --save

WORKDIR /usr/src/app/shelter-system

EXPOSE 3000

CMD ["npm", "run", "dev"]