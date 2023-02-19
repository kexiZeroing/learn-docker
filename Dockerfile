# Dockerfile starts from a parent image or "base image"
FROM node:19-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# -p or --parents: make parent directories if needed
RUN mkdir -p /home/app

# copy application files from host into the container
COPY ./app /home/app

# set default dir so that all following commands execute in /home/app dir
WORKDIR /home/app

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# Docker container starts - there can only be one CMD
# no need for /home/app/index.js because of WORKDIR
CMD ["node", "index.js"]
