const getLicenseBadge = license => {
    if(license === 'Unlicensed'){
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
    else if(license === 'MIT'){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if(license === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if(license === 'ISC'){
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
    else if(license === 'Eclipse'){
        return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    }
    else if(license === 'Mozilla'){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }

};

module.exports = templateData => {

    const {name, github, email, project, description, license, dependencies, test, usage, contribution} = templateData;
    let licenseBadge = getLicenseBadge(templateData.license);
    return`
# Project Title: ${project}

## Description
${description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
    

## Installation
\' ${dependencies} \`

## Usage
${usage}
    
## License
${licenseBadge}
    
## Tests
\` ${test} \`
    
## Questions
**Author:** ${name}
**Email ID:** ${email}
**GitHub:** [${github}](https://github.com/${github})
**Contributions:** ${contribution}
    `;
};