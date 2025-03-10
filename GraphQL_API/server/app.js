const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// GraphQL Middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enables GraphiQL in the browser for testing
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
