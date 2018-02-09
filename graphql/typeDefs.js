/**
 * @file Read and merge the list of schemas
 * A schema describes all of the fields, arguments, and result types
 */

// Dependencies
import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// List of schemas
const typesArray = fileLoader(path.join(__dirname, './schema'));

export default mergeTypes(typesArray);
