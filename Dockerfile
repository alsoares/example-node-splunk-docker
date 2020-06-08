FROM node:12-alpine 

WORKDIR /usr/src/app

COPY index.js package.json ./

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]
