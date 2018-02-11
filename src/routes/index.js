
/**
 * @file File to define routes list
 */

// Importing package.json
const pack = require('../../package.json');

// Routes list
const routes = [

  {
    path: '/api/test',
    method: 'GET',
    handler: function demo(request, h) {
      const obj = {
        it: 'Works',
      };
      return obj;
    },
  },

  { // My demo route
    path: '/api/version',
    method: 'GET',
    handler: function version(request, h) {
      return { version: pack.version, name: pack.name };
    },
  },

];

export default routes;
