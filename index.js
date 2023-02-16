const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const genREADME = require('./utils/genREADME');
const readmeInfo = [];


function init() {
return inquirer
.prompt(questions)
}

init()
.then((response) =>
{readmeInfo.push(response)
fs.writeFile(`${response.repo}README.md`, genREADME(response), 
(err) => {
    if (err) throw err;
    console.log("Your markdown file was created!");
})});
