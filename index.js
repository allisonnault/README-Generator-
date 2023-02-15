const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');

console.log(questions);
inquirer.prompt()
.then((response) =>
console.log(response));

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
