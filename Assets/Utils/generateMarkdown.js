function getLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    return "";
  }
}


function getLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
    return "";
  }
}


function getLicenseSection(license) {
  if (license) {
    return `## License\nThis project is licensed under the ${license} license.\nYou can find the license [here](${getLicenseLink(license)}).`;
  } else {
    return "";
  }
}


function generateMarkdown(data) {
  return `# ${data.title}\n${getLicenseBadge(data.license)}\n## Description\n${data.description}\n## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n${getLicenseSection(data.license)}\n## Contributing\n${data.contributing}\n## Tests\n${data.tests}\n## Questions\nPlease contact me at ${data.email} with any questions or if you would like to contribute to the project.\nYou can also find me on GitHub at [${data.username}](https://github.com/${data.username}).`;
}
