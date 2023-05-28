const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
//this how we are going to make the readme
const generator = require('./utils/generator');

//putting questions in objects inside an array
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the name of your project?",
},
{
    type: "input",
    name: "description",
    message: "Describe the functionality of your project.",
},
{
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: ["Mit", "Apache", "Mozilla", "Boost"],
},
{
    type: "input",
    name: "require",
    message: "List your project dependencies.",
},
{
    type: "input",
    name: "usage",
    message: "State the languages and other tech that will be required for your project.",
},
{
    type: "input",
    name: "author",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "name",
    message: "What is your full name?",
},
{
    type: "input",
    name: "email",
    message: "What is your email address?",
},
{
    type: "input",
    name: "contributions",
    message: "What are you contribution guidelines for this project?",
    default: "N/A",
},
{
    type: "input",
    name: "test",
    message: "What are the test instructions for this project?",
},
];
function writeToFile(fileName, data) {
    //using path.join() to combine the cwd with what's going to end up being the name of the file so that the data is written in the correct location
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

function init() {
    //telling the application to prompt the questions, then take the responses and use the writeToFile function
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating your README file....");
        //passing the file name and what will be the data inside the file by passing my generator function as a parameter
        //using a spread operator to pass the values of responses to the generator function
        writeToFile("./mddestination/README.md", generator({...responses}))
    });
    
}

init();
