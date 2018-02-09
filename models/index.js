// Dependencies
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

// Config
import config from '../config';

// List of db modules
const db = {};

// Opening connection
const connection = new Sequelize('articles', 'root', 'passw0rd', {
  host: config.database.host,
  dialect: config.database.dialect,
  pool: config.database.pool,
});

// Loading db modules
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

export default db;
