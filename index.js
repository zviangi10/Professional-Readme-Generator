const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

//Array of questions for user input

const questions = [
{
    type: "input",
    name: "title",
    message: "Please name your project.",
},
{
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionallity of this project.",
},
{
    type: "checkbox",
    name: "license",
    message: "please select a license"
    choices: [""]
},
{
    type: "input",
    name: "require",
    message: "list any project here",
},
{
    type: "input",
    name: "usage",
    message: "State the language or technologies associated with this project.",
},
{
    type: "input",
    name: "contributors",
    message: "please list any contributors"
},
];

//Readme.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Initializing app
function init() {
    inquierer.prompt(questions).then(responses) => {
        console.log("creating professional README.md file...");
        writeToFile("./dist.README.md", generateMarkdown({ ...responses}));
    }
}
init();