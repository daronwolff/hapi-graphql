/**
 * @file graphql settings
 */

// Importing dependencies
import { graphqlHapi } from 'apollo-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';

// Loading schemas
import resolvers from '../graphql/resolvers';
import typeDefs from '../graphql/typeDefs';

// Loading configuration
import config from '../../config';

// Generating executable schemas
const myGraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// Extracting graphql configuration
const { graphql } = config;

/**
 * Exports array of plugins with configuration.
 * @type {Array}
 */
export default {
  plugin: graphqlHapi,
  options: {
    path: graphql.path,
    graphqlOptions: {
      schema: myGraphQLSchema,
    },
    route: {
      cors: true,
    },
  },
};
