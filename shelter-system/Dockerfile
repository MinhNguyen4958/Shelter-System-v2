FROM node:16.13.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install react-bootstrap bootstrap

WORKDIR /usr/src/app/shelter-system

EXPOSE 3000

CMD ["npm", "run", "dev"]