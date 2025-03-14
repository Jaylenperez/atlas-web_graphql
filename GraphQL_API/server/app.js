const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// MongoDB Connection URI (Replace with your actual URI)
const mongoURI = 'mongodb+srv://user_34:3434@graphql-cluster.x3poy.mongodb.net/myDatabase?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Event listener to confirm connection
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// GraphQL Middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

// Start the server
app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
