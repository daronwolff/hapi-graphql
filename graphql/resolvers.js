/**
 * @file Read and merge the list of resolvers functions
 * A resolver is a collection of functions to get or modify information from database
 */

// Importing dependencies
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

// Exporing merged resolvers
export default mergeResolvers(resolversArray);
