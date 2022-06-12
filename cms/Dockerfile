FROM node:16
WORKDIR /opt/app

ADD package.json yarn.lock /opt/app/
RUN yarn install --progress=false --frozen-lockfile && \
    yarn cache clean

COPY . /opt/app

RUN yarn build
