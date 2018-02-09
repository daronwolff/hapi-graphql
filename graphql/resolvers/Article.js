// Importing db modules
import db from '../../models';

/*
Defining db resolvers
@link: http://docs.sequelizejs.com/manual/tutorial/querying.html
*/
export default {

  // All query methods to get information from database
  Query: {
    article: (_, { id }) => db.Articles.find({ where: { id } }),
    articles: () => db.Articles.findAll(),
  },

};

