function renderLicenseBadge(license) {
    let licenseBadge;
      if (license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      } else if (license === 'Apache 2.0 License') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'BSD 2-Clause License') {
        let licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      } else { licenseBadge = ' ';}
      return licenseBadge;
    }


function genREADME (response) {
    return `# ${response.project}

${renderLicenseBadge(response.license)}
    
## Description
    
${response.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
<a name="installation"></a>
## Installation
    
How to install dependancies: ${response.instal}
    
<a name="usage"></a>
## Usage
    
${response.usage}
    
<a name="license"></a>
## License
    
${response.license}
    
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