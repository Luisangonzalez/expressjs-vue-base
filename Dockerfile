FROM node:6.11.3
MAINTAINER Luisangonzalez <https://github.com/Luisangonzalez>

# System dependencies
RUN apt-get update && \
    apt-get -y install \
      nano \
      vim \
      sudo \
      apt-transport-https

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && \
    apt-get -y install \
      yarn

# Install npm dependencies
RUN yarn global add phantomjs-prebuilt@2.1.14

# Prepare paths
RUN mkdir /code

USER node

WORKDIR /code
