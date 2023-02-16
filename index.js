const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const genREADME = require('./utils/genREADME');
const readmeInfo = [];


inquirer.prompt(questions)




// // TODO: Create a function to initialize app
function init() {
return inquirer
.prompt(questions)
}

// // Function call to initialize app
init()
.then((response) =>
{readmeInfo.push(response)
fs.writeFile(`test.md`, genREADME(response), 
(err) => {
    if (err) throw err;
    console.log("Your markdown file was created!");
})});
