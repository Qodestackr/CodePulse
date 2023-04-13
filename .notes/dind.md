Use Docker-in-Docker (dind): Docker-in-Docker is a technique where you run a Docker container inside another Docker container, effectively creating a nested Docker environment. This allows you to run Docker commands from within the nested Docker container without needing sudo privileges. You can use a Docker image that includes Docker and use it as a base image for your Node.js application container. Here's an example of how you can modify your Dockerfile to use Docker-in-Docker:

```dockerfile

# Base image

FROM docker:dind

# Install Node.js, npm, and other dependencies

RUN apk update && apk upgrade && \
 apk add --no-cache nodejs npm python3

# Install global Node.js packages

RUN npm install -g typescript ts-node

# Set working directory

WORKDIR /app

# Copy package.json and yarn.lock

COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies

RUN npm install --only=production

# Copy application code

COPY ./ .

# Expose port

EXPOSE 8080

# Start the Node.js application

CMD ["node", "Server.js"]

```

```

```
