// Dependencies
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

// Config
import config from '../../config';

// Getting database configuration
const { database } = config;

// List of db modules
const db = {};

// Opening database connection
const connection = new Sequelize(database.name, database.user, database.password, {
  host: database.host,
  dialect: database.dialect,
  pool: database.pool,
});

// Loading all models
fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = connection.import(path.join(__dirname, file));
    db[model.name] = model;
  });

/*
// To enable joins between tables
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});
*/

// Adding connection and sequalize
db.connection = connection;
db.Sequelize = Sequelize;

// Exporting object
export default db;
