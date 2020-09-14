function server(appConfig, escapeHatch = null) {
    const baseConfig = require('./config.js');
    const config = Object.assign({}, baseConfig, appConfig);
    const log = global.log = require('./logging.js')(config.logging);

    require('./check-node-environment.js')();

    switch (config.framework) {
        case '@hapi/hapi':
            require('./hapi.js')(config, escapeHatch);
            break;
        case 'express':
            require('./express.js')(config, escapeHatch);
            break;
        default:
            throw new Error(`Unsupported framework: ${config.framework}`);
    }
}

module.exports = server;
