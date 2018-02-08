// Plugins
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';

// Loading schemas
import myGraphQLSchema from '../schema';
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
