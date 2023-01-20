// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage information:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide the contributing guidelines:"
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide the test instructions:"
  },
  {
    type: "input",
    name: "questions",
    message: "Please provide the contact information for additional questions:"
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache"]
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username:"
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
}

// Function to generate README file
function generateReadme(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any additional questions, please contact me at ${data.questions} or visit my GitHub profile at https://github.com/${data.username}.
`;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    // Check if README file already exist
    if (fs.existsSync(path.join(process.cwd(), 'README.md'))) {
      inquirer
        .prompt([
          {        type: "confirm",
          name: "overwrite",
          message: "A README.md file already exists in this directory. Do you want to overwrite it?",
          default: false
        }
      ])
      .then((overwriteAnswer) => {
          if (overwriteAnswer.overwrite) {
            // Generate README file
            const readme = generateReadme(answers);
            // Write README file
            writeToFile("README.md", readme);
          } else {
            console.log("The README generation process was cancelled");
          }
      });
      } else {
        // Generate README file
        const readme = generateReadme(answers);
        // Write README file
        writeToFile("README.md", readme);
      }
    });
  }
  
  // Function call to initialize app
  init();
  
