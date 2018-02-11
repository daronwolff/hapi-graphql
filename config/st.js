/**
 * @file Production configuration
 */
module.exports = {
  /*
  App settings
  */
  app: {
    host: 'localhost',
    port: 8901,
  },

  /*
  Database configuration
  */
  database: {
    dialect: 'mysql',
    name: '',
    host: '',
    port: '',
    user: '',
    password: '',
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
