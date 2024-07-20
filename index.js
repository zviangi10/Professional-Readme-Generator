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
    type: "checkbox",
    name: "license",
    message: "please select a license"
    
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

 // Generate README content
 const readmeContent = `
 # ${projectName}
 
 ## Description
 ${projectDescription}
 
 ## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 
 ## Installation
 ${installationInstructions}
 
 ## Usage
 ${usageInstructions}
 
 ## License
 This project is licensed under ${licenseInfo}.
 
 ## Contributing
 ${contributingGuidelines}
 
 ## Tests
 ${testInstructions}
 `;
 
         // Write README content to a file
         fs.writeFileSync('README.md', readmeContent);
 
         console.log('README.md file has been generated successfully.'); {
 
     } catch (err) {
         console.error('Error generating README:', err); {
     }
 }
 
 // Run the function to generate README
 generateREADME();