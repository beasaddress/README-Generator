// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== "none"){
        return `* [License](#license)`;
    }
    return "";
}
   

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "none") {
        return `## License
This application is covered under the ${license} license.`;
    }
    return "";
}

// TODO: Create a function to generate markdown for README
function generator(data) {
  return `# ${data.title}
by ${data.name} ${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)

* [Installation](#installations)

* [Usage](#usage)

* [Questions](#questions)

* [Contributions](#contributions)

* [Testing](#testing)

${renderLicenseLink(data.license)}


## Description
${data.description}

## Installations
${data.installation}

## Usage
${data.usage}

## Questions 
* Name - ${data.name}
* Email - ${data.email}
* GitHub - https://github.com/${data.author}/

## Contributions
${data.contributions}

## Testing
${data.test}

${renderLicenseSection(data.license)}`;
}

module.exports = generator;