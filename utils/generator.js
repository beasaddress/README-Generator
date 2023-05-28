// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
by ${data.name}

## Table of Contents

## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
## Contact-Me 
* Name - ${data.name}
* Email - ${data.email}
* GitHub - https://github.com/${data.author}/
## Contributors
${data.contributors}
## Testing
${data.test}
`;
}

module.exports = generator;