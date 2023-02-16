const questions = [
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
        message: "What is your email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        default: 'npm i',
        name: 'instal',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license do you have?',
        choices: ['MIT', 'Apache 2.0 License', 'BSD 2-Clause License', 'none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provied information on how to contribute:',
        default: 'Contributor Covenant v2.1',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'How to test application:',
        name: 'tests',
    },
]

module.exports = questions;