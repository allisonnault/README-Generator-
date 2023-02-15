const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions;
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        default: 'npm i',
        name: 'instal',
    },
    
])
.then((response) =>
console.log(response));

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
