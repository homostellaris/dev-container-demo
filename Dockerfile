FROM node:17.4-alpine3.14
RUN apk add "jq>1.6"
RUN mkdir /app
COPY ./package*.json /app
WORKDIR /app
RUN npm ci