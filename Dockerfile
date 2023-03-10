FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . /app
EXPOSE 8080
CMD [ "npm", "run", "web" ]