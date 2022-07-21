const fs = require('fs');


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
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">Role: ${manager.getRole()} <br> ID: ${manager.id} <br> Email: ${manager.email} <br> Office Number: ${manager.officeNumber}</p>
            </div>
            </div>
        </div>
    </div>

    <script src="../src/generate.js"></script>
</body>
</html>
`
    fs.writeFile(filePath, pageBody, (err) => {
        err ? console.log(err) : () => {
            const cardSection = document.querySelector('.row-cols-md-2'); // Selecting the div that will house all of the employee cards

            // Creating cards for each engineer
            for (let i = 0; i < engineers.length; i++) {
                const newEngineerCard = document.createElement('div');
                newEngineerCard.classList.add('col');
                
                const newEngineerCardMain = document.createElement('div');
                newEngineerCardMain.classList.add('card', 'text-center', 'h-100', 'bg-danger');

                const newEngineerCardBody = document.createElement('div');
                newEngineerCardBody.classList.add('card-body');

                const newEngineerCardTitle = document.createElement('h5');
                newEngineerCardTitle.classList.add('card-title');
                newEngineerCardTitle.innerHTML = `${engineers[i].name}`;

                const newEngineerCardDetails = document.createElement('p');
                newEngineerCardDetails.classList.add('card-text');
                newEngineerCardDetails.innerHTML = `Role: ${engineers[i].getRole()} <br> ID: ${engineers[i].id} <br> Email: ${engineers[i].email} <br> GitHub: <a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a>`;

                newEngineerCardBody.appendChild(newEngineerCardTitle);
                newEngineerCardBody.appendChild(newEngineerCardDetails);
                
                newEngineerCardMain.appendChild(newEngineerCardBody);
                newEngineerCard.appendChild(newEngineerCardMain);

                cardSection.appendChild(newEngineerCard);
            }
            console.log('Team profile page has been generated!');
        }
    })
}

module.exports = generate;