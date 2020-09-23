# Stage 1 - the build process
FROM node:14-alpine AS build-deps

LABEL maintainer="Francis Masha" MAINTAINER="Francis Masha <francismasha96@gmail.com>"
LABEL application="greenstar-fe"

# update the alpine image and install curl
RUN apk update && apk add curl

# installing Alpine Dependencies, but the context for the command from `yarn install` is explained above
RUN apk add --no-cache --virtual .build-deps1 g++ gcc libgcc libstdc++ linux-headers make python && \
    apk add --no-cache --virtual .npm-deps cairo-dev jpeg-dev libjpeg-turbo-dev pango pango-dev && \
    apk add bash

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories
RUN apk update

RUN npm config set unsafe-perm true
RUN npm install yarn@1.22.x
RUN rm -rf package-lock.json

COPY yarn.lock ./
COPY package.json ./

RUN yarn set version berry
RUN echo 'nodeLinker: node-modules' >> .yarnrc.yml
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY . .
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.17-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
