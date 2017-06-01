#!/usr/bin/env node

const chalk = require('chalk');
const resolve = require('path').resolve;
const spawn = require('child_process').spawn;

const log = console;

function styles(options, callback = () => {}) {

    const directory = options.root || 'src';
    const syntax = options.styleSyntax || 'css';
    const command = 'stylelint';
    const args = [
        '--config', resolve(__dirname, '.stylelintrc'),
        resolve(process.cwd(), directory, `**/*.${syntax}`)
    ];

    if (options.styleSyntax) {
        args.concat(['--syntax', options.styleSyntax]);
    }

    log.info(chalk.gray(`Running style checks for all .${syntax} files within ${directory}/`));

    const style = spawn(command, args, { stdio: 'inherit' });

    style.on('close', (code) => {
        switch (code) {
            case 80:
                log.info(chalk.yellow('- No files found to check.'));
                break;
            case 0:
                log.info(chalk.green('✓ Success! All clear.'));
                callback();
                break;
            default:
                process.exit(1);
        }
    });
}

module.exports = styles;
