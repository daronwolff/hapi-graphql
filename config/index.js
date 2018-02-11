/**
 * @file Manages the configuration settings according to environment
 * dv = Development, by default 'dv'
 * qa = QA
 * pd = Production
 * st = Staging
 */

// Enviroment running
const ENV = process.env.NODE_ENV || 'dv';
const validEnvironments = ['dv', 'qa', 'st', 'pd'];

if (!validEnvironments.includes(ENV)) {
  throw new Error(`NODE_ENV is invalid; value: ${ENV}; expects one of: ${validEnvironments}.`);
}

// Exporting module
/* eslint-disable import/no-dynamic-require */
module.exports = require(`./${ENV}`);
