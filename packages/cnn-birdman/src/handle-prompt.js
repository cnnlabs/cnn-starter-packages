#!/usr/bin/env node

const inquirer = require('inquirer');
const handleAdd = require('./handle-add.js');

function handlePrompt() {
    // What options should be displayed to the user
    const types = [
        {
            label: 'ESLint Client',
            value: '.eslintrc-client'
        },
        {
            label: '.editorconfig',
            value: '.editorconfig'
        }
    ];
    // What prompts should be displayed to the user
    const prompts = [
        {
            type: 'list',
            name: 'type',
            message: 'What type of config file do you want to add?',
            default: types[0].label,
            choices: types.map(type => type.label)
        }
    ];

    function handleInput(data) {
        const type = types.filter(type => data.type === type.label)[0];
        handleAdd(type);
    }

    // Prompt the user to input
    inquirer.prompt(prompts).then(handleInput);
}

module.exports = handlePrompt;
