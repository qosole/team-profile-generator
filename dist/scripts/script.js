const cardSection = document.querySelector('.row-cols-md-2'); // Selecting the div that will house all of the employee cards

// Creating cards for each engineer
for (let i = 0; i < engineers.length; i++) {
    const newEngineerCard = document.createElement('div');
    newEngineerCard.classList.add('col');

    const newEngineerCardMain = document.createElement('div');
    newEngineerCardMain.classList.add('card', 'text-center', 'h-100', 'bg-danger');

    const newEngineerCardBody = document.createElement('div');
    newEngineerCardBody.classList.add('card-body');

    const newEngineerCardTitle = document.createElement('h3');
    newEngineerCardTitle.classList.add('card-title');
    newEngineerCardTitle.innerHTML = `${engineers[i].name}`;

    const newEngineerCardDetails = document.createElement('p');
    newEngineerCardDetails.classList.add('card-text');
    newEngineerCardDetails.innerHTML = `Role: Engineer <br> ID: ${engineers[i].id} <br> Email: ${engineers[i].email} <br> GitHub: <a href="https://github.com/${engineers[i].github}" target="_blank">${engineers[i].github}</a>`;

    newEngineerCardBody.appendChild(newEngineerCardTitle);
    newEngineerCardBody.appendChild(newEngineerCardDetails);

    newEngineerCardMain.appendChild(newEngineerCardBody);
    newEngineerCard.appendChild(newEngineerCardMain);

    cardSection.appendChild(newEngineerCard);
}

// Creating cards for each intern
for (let i = 0; i < interns.length; i++) {
    const newInternCard = document.createElement('div');
    newInternCard.classList.add('col');

    const newInternCardMain = document.createElement('div');
    newInternCardMain.classList.add('card', 'text-center', 'h-100', 'bg-primary');

    const newInternCardBody = document.createElement('div');
    newInternCardBody.classList.add('card-body');

    const newInternCardTitle = document.createElement('h3');
    newInternCardTitle.classList.add('card-title');
    newInternCardTitle.innerHTML = `${interns[i].name}`;

    const newInternCardDetails = document.createElement('p');
    newInternCardDetails.classList.add('card-text');
    newInternCardDetails.innerHTML = `Role: Intern <br> ID: ${interns[i].id} <br> Email: ${interns[i].email} <br> School: ${interns[i].school}`;

    newInternCardBody.appendChild(newInternCardTitle);
    newInternCardBody.appendChild(newInternCardDetails);

    newInternCardMain.appendChild(newInternCardBody);
    newInternCard.appendChild(newInternCardMain);

    cardSection.appendChild(newInternCard);
}