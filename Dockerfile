# Version 1
FROM node:16-alpine
EXPOSE 4000
WORKDIR /src
COPY . .
RUN npm install
CMD [ "npm", "start" ]