const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

// Define TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

// Root Query Type
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } }, // Expecting an 'id' argument
      resolve(parent, args) {
        // Placeholder: This should be replaced with a database query
        return {
          id: args.id,
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task',
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
