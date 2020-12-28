# define an image that we are doing to build from
FROM node:14

# create directory to hold application code inside image
WORKDIR /usr/src/app

# install dependencies
COPY backend/package*.json ./

RUN npm install

# bundle application source
COPY backend/. .

# app binds to port 8080 so will need to EXPOSE the port
# to have it mapped to the docker daemon
EXPOSE 8080

CMD [ "node", "server.js" ]