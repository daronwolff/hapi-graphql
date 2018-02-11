/**
 * @file Development configuration
 */
module.exports = {
  /*
  App settings
  */
  app: {
    host: 'localhost',
    port: 1235,
  },

  /*
  Database configuration
  */
  database: {
    dialect: 'mysql',
    name: 'articles',
    host: 'localhost',
    port: '',
    user: 'root',
    password: 'passw0rd',
    config: {
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  },

  /*
  GraphQl configuration
  */
  graphql: {
    path: '/api/graphql',
  },

};
