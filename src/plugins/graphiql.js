import { graphiqlHapi } from 'apollo-server-hapi';

export default {
  plugin: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/api/graphql',
    },
  },
};
