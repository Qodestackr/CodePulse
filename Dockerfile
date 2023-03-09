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

LABEL version="1.0.0"
LABEL description="This is a container. It works on my machine, on my container to be precise!"

# update the package list, then install dependencies: Node/Python with apt-get utility
# installing latest npm version
# Tip: the installation is global, make sure its the "sudo mode"
# Clean up the apt cache: reduces the image size

# By using the "no-cache" option, we ensure that we get the latest version of the packages every time we build the image.
# For compatibility reasons

# /tmp: This directory contains temporary files that are created by programs running on the system.

# /var: This directory contains variable data files that change | frequently during the system's operation. e.g log files etc

# docker images: verify the image

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install --only=production

COPY ./core .

# copies the rest of the files in the core directory 
# from the host machine to the Docker image, and EXPOSE sets the container port to 8080.
EXPOSE 8080

CMD [ "node", "Server.js" ]
