FROM node:14.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@12.2.13

COPY . .
EXPOSE  4200
# docker build -t miapp .
# docker run -p 4200:4200 miapp
CMD ["ng", "serve", "--host", "0.0.0.0"]