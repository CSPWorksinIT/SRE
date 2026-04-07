FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /mnt/c/Users/Sekhar\'s/OneDrive/Desktop/practice/mcq/claudesre

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 9525

CMD ["npm", "start"]
