const fs = require("fs");
const inquirer = require("inquirer");

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
    type: "list",
    name: "license",
    message: "please select a license",
    choices:[
        {
            name:"MIT",
            value:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        },
        {
            name:"GNU GPLv3",
            value:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        },
        {
            name:"none",
            value:"none"
        }
    ]
  },
  {
    type: "input",
    name: "installation",
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
    message: "please list any contributors",
  },
];
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    const readmeContent = generateContentFromAnswers(answers);
    generateREADME(readmeContent)
})
  .catch((error) => {
    console.log(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  function generateContentFromAnswers(data){
    let content = `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributors}

## License

${data.license}`; 
return content;
  }

function generateREADME(data) {

// Write data in 'Output.txt' .
fs.writeFile('output/README.md', data, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
} 
