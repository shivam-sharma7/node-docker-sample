FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD node index.js