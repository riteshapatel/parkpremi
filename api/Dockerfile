FROM node:10.2.1-alpine

# create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# install app dependencies
COPY package.json /usr/src/api 
RUN cd /usr/src/api 
RUN npm install 
RUN node --version 

# bundle app source
COPY data /usr/src/api/data
COPY schema /usr/src/api/schema 
COPY server.js /usr/src/api 

HEALTHCHECK --interval=5s --timeout=5s CMD curl -f http://0.0.0.0:3003/graphql || exit 1

EXPOSE 3003 
CMD ["npm", "start"]