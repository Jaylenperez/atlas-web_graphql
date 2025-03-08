const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

// Define the TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString }
  }
});

// Root Query (For testing, return a dummy task)
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      resolve(parent, args) {
        return {
          id: '1',
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task'
        };
      }
    }
  }
});

// Export the schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
