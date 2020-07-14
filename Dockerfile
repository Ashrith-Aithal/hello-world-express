FROM node:12-slim

WORKDIR /tmp/app/

COPY . .
RUN npm install

CMD ["npm", "test"]