// node modules
const fs = require ('fs');
const inquirer = require('inquirer');

// inquirer prompts for questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your E-mail address:'
        },
        {
            type: 'input',
            name:'project',
            message: 'Please enter yout Project Title:'
        },
        {
            type: 'input',
            name: 'description',
            message:'Please describe your project:'
        },
        {
            type: 'list',
            name: 'license',
            message: "Please choose the project's license:",
            choices: ['MIT', 'APACHE 2.0', 'Eclipse 1.0', 'GNU' , 'ISC', 'Mozilla', 'Unlicensed']
        },
        {
            type: 'checkbox',
            name: 'language',
            message:'What language(s) did you used for this project? (Check all that apply)',
            choices: ['HTML','CSS','JavaScript','ES6','jQuery','Bootstrap','Node']
        },
        {
            type: 'input',
            name: 'dependencies',
            message:'What is the command to run for installing dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name:'test',
            message: 'What is the command to run for test?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message:'What are the usage instructions for the repo?'
        },
        {
            type: 'input',
            name: 'contribution',
            message:'What are the instructions for contributing to the repo?',
            default: 'contact the author'
        }
    ]);
};

promptUser();