FROM node:19.0.1

WORKDIR /src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5400

CMD ["npm","start"]