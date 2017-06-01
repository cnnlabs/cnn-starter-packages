#!/usr/bin/env node

const program = require('commander');
const packageJSON = require('../package.json');
const style = require('./style.js');
const javascript = require('./javascript.js');
const handlePrompt = require('./handle-prompt.js');
const ascii = require('./ascii.js');

function handleChecks(type, options) {
    options.ascii && ascii();
    switch (type) {
        case 'style':
            style(options);
            break;
        case 'javascript':
            javascript(options);
            break;
        default:
            const step2 = javascript.bind(null, options);
            const step1 = style.bind(null, options, step2);
            step1();
    }
}

// Basic
program
    .version(packageJSON.version)
    .description('Stardarize coding styles across CNN projects.')

// Running checks
program
    .command('run [type]')
    .description('Run checks against your codebase.')
    .option('-R, --root <dir>', 'override default root directory (src)')
    .option('-S, --style-syntax <synatx>', 'override default style syntax (css)')
    .option('-A, --no-ascii', 'removes ascii art - useful when watching files')
    .action(handleChecks)

// Add files
// program
//     .command('add')
//     .description('Add a configuration file within the current directory.')
//     .action(handlePrompt)

program.parse(process.argv);

// Display help if no args are passed
if (!program.args.length) { program.help(); }
