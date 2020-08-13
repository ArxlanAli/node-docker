FROM node
RUN mkdir /var/local/env
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . .
RUN chmod a+x ./script.sh
RUN ./script.sh
EXPOSE 3000
CMD ["node","server.js"]