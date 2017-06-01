#!/usr/bin/env node

const chalk = require('chalk');
const resolve = require('path').resolve;
const spawn = require('child_process').spawn;

const log = console;

function javascript(options, callback = () => {}) {

    const directory = options.root || 'src';
    const command = 'eslint';
    const args = [
        '--ignore-pattern', '**/vendor/**',
        resolve(process.cwd(), directory, '**/*.js')
    ];

    log.info(chalk.gray(`Running JavaScript checks for all .js files within ${directory}/`));

    const js = spawn(command, args, { stdio: 'inherit' });

    js.on('close', (code) => {
        if (code !== 0) {
            process.exit(1);
        }
        log.info(chalk.green('✓ Success! All clear.'));
        callback();
    });
}

module.exports = javascript;
