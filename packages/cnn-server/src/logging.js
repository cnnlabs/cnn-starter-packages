function logging(options = {}) {
    const log = global.log = require('cnn-logger')(options);

    log.important('Initializing Logging subsystem...');
    log.silly('Running self check: silly');
    log.debug('Running self check: debug');
    log.verbose('Running self check: verbose');
    log.info('Running self check: info');
    log.warn('Running self check: warn');
    log.error('Running self check: error');
    log.fatal('Running self check: fatal');
    log.important('Running self check: important');

    return log;
}

module.exports = logging;
