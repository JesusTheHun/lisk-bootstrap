require('dotenv').config();

const { Application, genesisBlockDevnet, configDevnet} = require('lisk-sdk');

configDevnet.components.storage.host = process.env.POSTGRES_HOST;
configDevnet.components.storage.port = process.env.POSTGRES_PORT;
configDevnet.components.storage.user = process.env.POSTGRES_USER;
configDevnet.components.storage.password = process.env.POSTGRES_PASSWORD;

configDevnet.modules.http_api.access.public = true;

let port = 4000;

if (process.env.HTTP_PORT) {
    port = parseInt(process.env.HTTP_PORT);
}

configDevnet.modules.http_api.httpPort = port;

const app = new Application(genesisBlockDevnet, configDevnet);

app.run()
.then(() => app.logger.info('App started...'))
.catch(error => {
    console.error('Faced error in application', error);
    process.exit(1);
});
