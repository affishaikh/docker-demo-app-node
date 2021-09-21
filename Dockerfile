FROM node

WORKDIR /node-app

ENV PORT 8081

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8081

CMD npm start