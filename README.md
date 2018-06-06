#### ParkPremi - Your Park Ranger

*Author: Ritesh Patel*

*Date: 06/05/2018*

---

**Description**

Ah, I absolutely love the immense beauty of our National Parks. Believe me if I had a choice I'd be totally into park hopping :) This project is an honest attempt to build a useful app for nature lovers. 

**Dependencies**

ParkPremi is a React App (of course!). API is swiftly integrated with GraphQL and Apollo. At the moment data is pulled via local JSON files. But why? Well, most of the national park data is static in nature.  

As the project grows, I will be adding Mongoose and a noSql database. Have patience young gun!

**Graphiql**

Project has Graphiql enabled on port 3003. Run / test queries using graphiql in development.

```
nodemon server
```

Access graphiql on port 3003.

```
http://localhost:3003/graphiql
```

**Front End**

Run npm start to fire up the app in development.

```
npm start
```

Access app via browser on port 3000.

```
http://localhost:3000
```

**Docker image (app)**

If you wish to create a docker container for the app, then run the ```Dockerfile``` under the root directory. I am using node-apline as a base image.

```
FROM node:10.2.1-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app
RUN cd /usr/src/app
RUN npm install 
RUN node --version 

RUN npm install -g serve

# bundle app source
COPY build/ /usr/src/app/build

EXPOSE 3000

CMD ["serve", "-s", "build"]
```

**Docker image (api)**

And here is the docker image for the api.

```
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

EXPOSE 3003 
CMD ["npm", "start"]
```

**Docker Compose (production deployment)**

Above mentioned docker files are good for running individual containers. Use the docker compose file below for production deployment.

```
version: '3'

services:
  parkpremi:
    build: ./parkpremi
    volumes:
      - ./parkpremi:/usr/src/app
    ports:
      - "3000:3000"
  api:
    build: ./parkpremi/api 
    volumes:
      - ./parkpremi/api:/usr/src/app
    ports:
      - "3003:3003"
```

Voila! ParkPremi is dockerized!

```
# run the command below to start the app
docker-compose up
```

```
# app location
http://localhost:3000/
```

**Static Data**

Data resides under api/data directory. Yes, I used NPS data api to pull this data using a REST client. As the project matures, data will be ingested from the REST endpoint.

**Bugs / Issues**

Gimme a holler if you find one :) All ears!

Fork & Enjoy!

Cheers :)


