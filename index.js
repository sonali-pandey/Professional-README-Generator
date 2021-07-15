// node modules
const fs = require ('fs');
const inquirer = require('inquirer');
const validator = require('email-validator');
const generateReadme = require('./src/template.js');

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
            choices: ['Unlicensed', 'MIT', 'Apache', 'Eclipse', 'ISC', 'Mozilla'],
            default: 'Unlicensed'
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

promptUser()
    .then(userData => {
        const readmeFile = generateReadme(userData);
        fs.writeFile('./generated-README/README.md', readmeFile , err => {
            if (err) throw new Error(err);

            console.log('README file generated!');
          });
    });