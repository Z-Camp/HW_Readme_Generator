
function generateMarkdown(data) {
  return `
# USERNAME: ${data.username}
# EMAIL: ${data.userEmail}
# TITLE OF PROJECT: ${data.title}
# DESCRIPTION: ${data.description}
# HOW TO INSTALL: ${data.install}
# TABLE OF CONTENTS: ${data.tableOfContents}
# HOW IS THIS APP USED: ${data.usage}
# HOW CAN OTHERS CONTRIBUTE?: ${data.contribution}
# TESTING FOR BUGS: ${data.tests}
# HOW CAN OTHER USERS REACH OUT?: ${data.questions}

`;
}

module.exports = generateMarkdown;