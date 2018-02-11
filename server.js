/**
 * @file Manages the configuration settings server.
 */

// Dependencies
import Hapi from 'hapi';

// Loading configuration
import config from './config';

// Loading pluggins
import plugins from './src/plugins';

// Loading routes
import routes from './src/routes';

// Setting up server
export default async () => {
  const Server = new Hapi.Server({
    host: config.app.host,
    port: config.app.port,
  });

  // Registering plugins
  await Server.register(plugins);

  // Registering routes
  await Server.route(routes);

  /* eslint-disable no-console */
  try {
    await Server.start();
  } catch (err) {
    console.info(`Error while starting server: ${err.message}`);
  }
  console.info(`Server running at: http://${Server.info.uri}`);
};
