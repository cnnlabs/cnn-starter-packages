#!/usr/bin/env node

const chalk = require('chalk');
const path = require('path');
const fse = require('fs-extra');

const log = console;

function handleFileName(file) {
    return (/editorconfig/.test(file)) && file || file.substring(0, 9);
}

function moveFile(file, callback) {
    // Source: cnn-birdman/src/file
    const src = path.join(__dirname, file);
    // Destination: directory/file
    const dest = path.join(process.cwd(), handleFileName(file));
    // Inform the user whats going on
    log.info(chalk.gray(`- Copying file.`));
    // Copy the files
    fse.copy(src, dest, callback);
}

function checkIfFileExists(file, callback) {
    const nameParsed = handleFileName(file);
    const root = path.resolve(process.cwd(), nameParsed);
    function handler(err) {
        if (!err) {
            log.error(chalk.red(`A file by the name of ${chalk.bold(nameParsed)} already exists, please remove existing file.`));
        } else if (err.code === 'ENOENT') {
            // if there is no directory, we are safe to proceed
            callback();
        }
    }
    log.info(chalk.gray('- Checking potential file conflicts.'));
    fse.access(root, handler);
}

function handleAdd(type) {
    const file = type.value;

    const step3 = () => { log.info(chalk.green('- Done!')) }
    const step2 = moveFile.bind(null, file, step3);
    const step1 = checkIfFileExists.bind(null, file, step2);

    step1();
}

module.exports = handleAdd;
