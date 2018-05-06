# specify the node base image with your desired version node:<version>
FROM node:6

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# replace this with your application's default port
EXPOSE 8888
CMD [ "npm", "prod" ]
