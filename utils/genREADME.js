function genREADME (response) {
    return `# ${response.project}

![license Badge](https://img.shields.io/github/license/${response.gitHub}/${response.repo})
    
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