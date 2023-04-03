# Base image

# This command looks for the base image in the local system. If not present, pulls it from the registry
FROM ubuntu:latest

# Dockerfile is a script that contains instructions to build the Docker image.
MAINTAINER Wilson_Gichu

RUN apt-get update && apt-get upgrade -y
# apt-utils porvide utilities for debian packages 
RUN  apt-get install -y apt-utils 
RUN apt-get install -y python3
RUN apt-get install -y nodejs npm

# RUN apk add --no-cache openjdk8
# ENV JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
# ENV PATH="$JAVA_HOME/bin:${PATH}"
# RUN apk add --no-cache rust
# RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing mono

RUN npm install -g typescript
RUN npm install -g ts-node

LABEL version="1.0.0"
LABEL description="This is a container. It works on my machine, on my container to be precise!"

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install --only=production

COPY ./ .

# copies the rest of the files in the core directory 
# from the host machine to the Docker image, and EXPOSE sets the container port to 8080.
EXPOSE 8080

CMD [ "node", "Server.js" ]