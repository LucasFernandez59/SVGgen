// inquirer prompt for selecting shape, text, shape color etc
const inquirer = require('inquirer');


function getInput() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter three letters',
            name: 'text'
        },
        {
            type: 'input',
            message: 'Enter text color or hexadecimal number',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Select shape',
            name: 'shape',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter shape color or hexadecimal number',
            name: 'shapeColor'
        }
    ])
};

module.exports = {getInput};