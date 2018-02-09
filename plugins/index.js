// Plugins
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';

// Loading schemas
import typeDefs from '../graphql/typeDefs';
import resolvers from '../graphql/resolvers';

const myGraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

/**
 * Exports array of plugins with configuration.
 * @type {Array}
 */
export default [
  {
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: myGraphQLSchema,
      },
      route: {
        cors: true,
      },
    },
  },
  {
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql',
      },
    },
  },
];
