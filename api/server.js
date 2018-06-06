/**
 * 
 * @author ritesh patel 
 * @description GraphQL server entry point. GraphQL Server is set with Graphiql. Access graphiql @ http://localhost:3003/graphiql to test the queries
 */
const express = require('express'),
    serverPort = 3003,
    graphqlHTTP = require('express-graphql'),
    app = express(),
    bodyParser = require('body-parser'),
    http = require('http'),
    schema = require('./schema/schema.js'),
    cors = require('cors');

let server;

// allow cross-origin requests
app.use(cors());
// graph express setup
app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

server = http.Server(app);

const configureServer = (onData, onErr) => {
    // start server
    server.listen(serverPort, () => {
        console.log('Express listening on port ', serverPort);
    });        
}

configureServer(); 