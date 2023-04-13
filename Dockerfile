# Base image

# This command looks for the base image in the local system. If not present, pulls it from the registry
FROM ubuntu:latest

# Dockerfile is a script that contains instructions to build the Docker image.
LABEL name="Wilson_Gichu"

RUN apt-get update && apt-get upgrade -y
# apt-utils porvide utilities for debian packages 
RUN  apt-get install -y apt-utils 
RUN apt-get install -y python3
RUN apt-get install -y nodejs npm

# RUN apk add --no-cache openjdk8

RUN npm install -g typescript
RUN npm install -g ts-node

LABEL version="1.0.0"
LABEL description="This is a container. It works on my machine, on my container to be precise!"

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install --only=production

COPY ./ .

EXPOSE 8080

CMD [ "node", "Server.js" ]