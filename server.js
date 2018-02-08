/**
 * @file Manages the configuration settings server configuration.
 */

// Dependencies
import Hapi from 'hapi';

// Loading configuration
import config from './config';

// Loading pluggins
import plugins from './plugins';

// Setting up server
export default async () => {
  const Server = new Hapi.Server({
    host: config.app.host,
    port: config.app.port,
  });

  // Registering plugins
  await Server.register(plugins);

  try {
    await Server.start();
  } catch (err) {
    console.info(`Error while starting server: ${err.message}`);
  }
  console.info(`+++ Server running at: ${Server.info.uri}`);
};
