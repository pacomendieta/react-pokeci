#BUILD APP REACT
FROM node:18.14.1-alpine 
WORKDIR /
COPY package.json ./
RUN npm install
RUN mkdir dist
COPY  app.js  ./dist
COPY  ./dist/* ./dist  
#Comando a ejecutar al lanzar el container:
CMD node ./dist/app.js
