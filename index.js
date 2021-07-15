// node modules
const fs = require ('fs');
const inquirer = require('inquirer');
const validator = require('email-validator');

// inquirer prompts for questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name (Required):',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log("\n\nError: Please enter your Name!\n");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub username (Required):',
            validate: githubInput =>{
                if(githubInput){
                    return true;
                }else{
                    console.log("\n\nError: Please enter your GitHub username!\n");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'E-mail address (Required):',
            validate: emailInput =>{
                if(validator.validate(emailInput)){
                    return true;
                }else{

                    console.log("\n\nError: Need a valid Email ID to continue!\n");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name:'project',
            message: 'Project Title (Required):',
            validate: projectInput =>{
                if(projectInput){
                    return true;
                }else{
                    console.log("\n\nError: Please enter your Project Title!\n");
                    return false;
                } 
            }
        },
        {
            type: 'input',
            name: 'description',
            message:'Project description (Required):',
            validate: descriptionInput =>{
                if(descriptionInput){
                    return true;
                }else{
                    console.log("\n\nError: Please describe your project!\n");
                    return false;
                } 
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "Please choose the project's license:",
            choices: ['Unlicensed', 'MIT', 'APACHE 2.0', 'Eclipse 1.0', 'GNU' , 'ISC', 'Mozilla'],
            default: 'Unlicensed'
        },
        {
            type: 'checkbox',
            name: 'language',
            message:'What language(s) did you used for this project? (Check all that apply: SELECT AT LEAST ONE TO CONTINUE)',
            choices: ['HTML','CSS','JavaScript','ES6','jQuery','Bootstrap','Node'],
            validate: languageInput => {
                if(languageInput.length){
                    return true;
                }else{
                    return false;
                }
            }
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
            message:'What are the usage instructions for the repo?',
            default:'Install dependencies'
        },
        {
            type: 'input',
            name: 'contribution',
            message:'What are the instructions for contributing to the repo?',
            default: 'Contact the author'
        }
    ]);
};

promptUser();