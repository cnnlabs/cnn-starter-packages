function start(app, { port, hostname }) {
    app.start((err) => {
        if (err) { throw err; }
        log.important(`Service started on port: ${port}`);
    });
}

function registerRoutes(app, { routes : r }, callback) {
    const { healthcheckRoute } = require('./healthcheck.js');
    const routes = r.slice();

    routes.unshift(healthcheckRoute);

    routes.forEach(({ method = 'GET', path, handler }) => {
        log.info(`Registering route: path: ${path}, method: ${method}`);
        app.route({ method: method.toUpperCase(), path, handler })
    });

    callback();
}

function server(config, escapeHatch = null) {

    const Hapi = require('hapi');
    const app = new Hapi.Server();

    app.connection({ port: config.port, host: config.hostname });

    const step2 = start.bind(null, app, config);
    const step1 = registerRoutes.bind(null, app, config, step2);

    step1();
}

module.exports = server;
