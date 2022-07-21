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
    newEngineerCardDetails.innerHTML = `Role: Engineer <br> ID: ${engineers[i].id} <br> Email: ${engineers[i].email} <br> GitHub: <a href="https://github.com/${engineers[i].github}">${engineers[i].github}</a>`;

    newEngineerCardBody.appendChild(newEngineerCardTitle);
    newEngineerCardBody.appendChild(newEngineerCardDetails);

    newEngineerCardMain.appendChild(newEngineerCardBody);
    newEngineerCard.appendChild(newEngineerCardMain);

    cardSection.appendChild(newEngineerCard);
}