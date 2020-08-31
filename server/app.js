const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();


// allow cross-origin requests
var allowedOrigins = ['http://localhost:3000',
                      'http://localhost:4000'];
app.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://graphql:3HgMAMwNOn5KBC8N@cluster0.pv8yj.mongodb.net/graphql_db?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,() => {
    console.log('now listening for requests on port 4000');
});