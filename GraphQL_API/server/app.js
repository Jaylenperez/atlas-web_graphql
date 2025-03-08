const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); // Import the schema

const app = express();

app.use('/graphql', graphqlHTTP({
  schema, // Pass the schema
  graphiql: true // Enable GraphiQL UI for testing
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
