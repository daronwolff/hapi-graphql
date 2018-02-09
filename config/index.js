/**
 * @file Global configuration
 */

export default {
  /*
  App settings
  */
  app: {
    host: 'localhost',
    port: 1234,
  },

  /*
  Database configuration
  */
  database: {
    dialect: 'mysql',
    database: 'articles',
    host: 'localhost',
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
};
