const fs = require('fs');


/** 
 * This function generates the base html file for the team profile, as well as a helper.js file that allows the script.js file to read the user input
 * @param {object} manager A Manager object created from user input.
 * @param {array} engineers An array of Engineer objects created from user input.
 * @param {array} interns An array of Intern objects created from user input.
 * @returns {undefined} Nothing
 * */ 
 
const generate = (manager, engineers, interns) => {
    const filePath = `./dist/team-${manager.name}.html`;
    const pageBody = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Bootstrap 5-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <link href="./css/style.css" rel="stylesheet">
    <title>${manager.name}'s Team</title>
</head>
<body>
    <header class="card bg-success">
        <h1>${manager.name}'s Team</h1>
    </header>

    <div class="row row-cols-1 row-cols-md-2 g-4 w-75 mx-auto">
        <div class="col">
            <div class="card text-center h-100 bg-success">
            <div class="card-body">
                <h3 class="card-title">${manager.name}</h3>
                <p class="card-text">Role: ${manager.getRole()} <br> ID: ${manager.id} <br> Email: ${manager.email} <br> Office Number: ${manager.officeNumber}</p>
            </div>
            </div>
        </div>
    </div>

    <script src="./scripts/helper-${manager.name}.js"></script>
    <script src="./scripts/script.js"></script>
</body>
</html>
`
    // Generating the html page with manager card
    fs.writeFile(filePath, pageBody, (err) => {
        err ? console.log(err) : console.log('Team profile page has been generated!');
    });

    // Writing the data for the engineers and interns to a helper js file 
    const remainingData = 
`
const engineers = ${JSON.stringify(engineers)};
const interns = ${JSON.stringify(interns)};
`
    fs.writeFile(`./dist/scripts/helper-${manager.name}.js`, remainingData, (err) => {
        err ? console.log(err) : console.log('Data successfully written!');
    });
}

module.exports = generate;