FROM node:18-slim
WORKDIR /app
# Only copy package files first to cache the 'npm install'
COPY package*.json ./
RUN npm install
# We don't COPY the server.js here because we will MOUNT it instead!
CMD ["npm", "run", "dev"]