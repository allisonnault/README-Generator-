const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const genREADME = require('./utils/genREADME');
const readmeInfo = [];


inquirer.prompt(questions)
.then((response) =>
{readmeInfo.push(response)
fs.writeFile(`${response.project}.md`, genREADME(response), 
(err) => {
    if (err) throw err;
    console.log("Your markdown file was created!");
})});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
