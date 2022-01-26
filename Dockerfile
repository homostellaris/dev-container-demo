FROM node:17.4-alpine3.14
RUN apk add "jq>1.6"
WORKDIR /app