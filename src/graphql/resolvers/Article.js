/**
 * @file Defining db resolvers
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Article = db.Articles;

// Exporting resolvers
export default {

  // All query methods to get information from database
  Query: {
    article: (_, { id }) => Article.find({ where: { id } }),
    articles: () => Article.findAll(),
  },

  // Querys methods to mutate information: add, update, delete
  Mutation: {
    addArticle: (_, { title, body }) => Article.create({ title, body }),
    deleteArticle: (_, { id }) => Article.destroy({ where: { id } }),
    updateArticle: (_, { id, title, body }) => Article.update({ title, body }, { where: { id } }),
  },

};
