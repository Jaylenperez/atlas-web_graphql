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

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } }, // Expecting an "id" argument
      resolve(parent, args) {
        // Mock data for now (we'll replace this with a database in a later task)
        const tasks = [
          { id: '1', title: 'GraphQL Setup', weight: 5, description: 'Setting up GraphQL API' },
          { id: '2', title: 'Schema Design', weight: 3, description: 'Designing GraphQL schema' }
        ];
        
        return tasks.find(task => task.id === args.id);
      }
    }
  }
});

// Export the schema
module.exports = new GraphQLSchema({
  query: RootQuery
});
