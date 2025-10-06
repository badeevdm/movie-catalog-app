FROM node:alpine

RUN npm install -g json-server

WORKDIR /server

CMD ["json-server", "db.json", "--host", "0.0.0.0"]
