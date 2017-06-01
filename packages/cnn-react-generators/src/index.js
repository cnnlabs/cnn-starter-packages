#!/usr/bin/env node

const resolve = require('path').resolve;
const spawn = require('child_process').spawn;
const argv = [/* TODO: pass along argv */];

const command = 'plop';
const args = [
    '--plopfile', resolve(__dirname, 'generator.js')
].concat(argv);

spawn(command, args, { stdio: 'inherit' });
