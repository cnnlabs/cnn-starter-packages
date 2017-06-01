const resolve = require('path').resolve;
const nconf = require('nconf');

const pathForModules = 'PATH_FOR_MODULES';
const pathForPages = 'PATH_FOR_PAGES';
const pathForRoutesFile = 'PATH_FOR_ROUTES_FILE';
const overrideNameModule = 'OVERRIDE_NAME_MODULE';
const overrideNamePage = 'OVERRIDE_NAME_PAGE';

// Supports environment variables and configuration file.
nconf.env().file({ file: resolve(process.cwd(), 'cnn-react.json') });

nconf.defaults({
    [pathForModules]: resolve('src', 'modules'),
    [pathForPages]: resolve('src', 'pages'),
    [pathForRoutesFile]: resolve('src', 'routes.js'),
    [overrideNameModule]: 'module',
    [overrideNamePage]: 'page',
});

console.log('__dirname: ', __dirname);
console.log('process.cwd(): ', process.cwd());

function generator(plop) {
    plop.setGenerator('module', require(`./generators/${nconf.get(overrideNameModule)}`)(nconf.get(pathForModules)));
    plop.setGenerator('page', require(`./generators/${nconf.get(overrideNamePage)}`)(nconf.get(pathForPages), nconf.get(pathForRoutesFile)));
};

module.exports = generator;
