// Dependencies
import { makeExecutableSchema } from 'graphql-tools';

// Resolvers
import resolvers from '../resolvers';

// Schema definitions
const typeDefs = `type Author {
    age: Int
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
  }
`;

// Schema declaration
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Exporting module
export default schema;
