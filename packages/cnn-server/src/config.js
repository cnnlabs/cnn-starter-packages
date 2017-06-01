const config = {
    framework: 'express',
    port: process.env.PORT || 5050,
    portSSL: null,
    hostname: '0.0.0.0',
    enableCompression: false,
    enableStatic: false,
    staticPath: '/static',
    staticDirectory: './dist',
    logging: {
        console: {
            logLevel: 'error'
        }
    },
    middleware: [],
    routes: []
};

module.exports = config;
