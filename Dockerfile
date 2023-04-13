# Base image
FROM node:19

# Dockerfile is a script that contains instructions to build the Docker image.
LABEL name="Wilson_Gichu"

# Install apt-utils and python3 as needed
RUN apt-get update && apt-get upgrade -y && apt-get install -y apt-utils && apt-get install -y python3

# Install TypeScript and ts-node
RUN npm install -g typescript ts-node

LABEL version="1.0.0"
LABEL description="This is a container. It works on my machine, on my container to be precise!"

COPY ./package.json ./
COPY ./yarn.lock ./

RUN npm install --only=production

COPY ./ .

EXPOSE 8080

CMD [ "node", "Server.js" ]
