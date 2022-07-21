const fs = require('fs');


const generate = (manager, engineers, interns) => {
    const filePath = `../dist/team-${manager.managerName}.html`
    const pageBody = 
`

`
    fs.writeFile(filePath, pageBody, (err) => {
        err ? console.log(err) : console.log('Team profile page has been generated!');
    })
}

module.exports = generate;