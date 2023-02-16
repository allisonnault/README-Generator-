function renderLicenseBadge(license) {
    let licenseBadge;
      if (license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      } else if (license === 'Apache 2.0 License') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'GNU GPL v3') {
        let licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      } else { licenseBadge = ' ';}
      return licenseBadge;
    }

function renderLicenseLink(license) {
      if (license !== "none") {
        return `- [License](#license)`;
      } else {
        return " ";
      }
    }

function renderLicenseSection(license) {
      if (license !== "none") {
        return `<a name="license"></a>
## License
            
This repo has the ${license} license.`;
      } else { 
        return " ";
      }
    }

function genREADME (response) {
    return `# ${response.project}

${renderLicenseBadge(response.license)}
    
## Description
    
${response.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(response.license)}
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
<a name="installation"></a>
## Installation
    
How to install dependancies: ${response.instal}
    
<a name="usage"></a>
## Usage
    
${response.usage}
    
${renderLicenseSection(response.license)}
    
<a name="how-to-contribute"></a>
## How to Contribute
    
${response.contribute}
    
<a name="tests"></a>
## Tests
    
${response.tests}
    
<a name="questions"></a>
## Questions
    
For questions check out my GitHub profile [${response.gitHub}](https://www.github.com/${response.gitHub})

Or you can email me at [${response.email}](${response.email})`
}

module.exports = genREADME;