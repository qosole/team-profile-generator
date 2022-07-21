const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');


let manager;
let engineers = [];
let interns = [];

const menuPrompt = () => {
    // Creating a repeating menu for the user to choose what team member they want to add next or to finish adding
    let userMenuChoice = '';
    const nextChoices = [
        '1. Add an engineer',
        '2. Add an intern',
        '3. Finish'
    ]

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: nextChoices,
            name: 'userMenuChoice'
        }
    ]).then(data => {
        userMenuChoice = data.userMenuChoice;
    });

    // Getting user input for an engineer, creating an Engineer object, and adding it to the engineers array
    if (userMenuChoice == nextChoices[0]) {
        inquirer.prompt([
            {
                message: "Enter the engineer's name: ",
                name: 'engineerName'
            },
            {
                message: "Enter the engineer's ID: ",
                name: 'engineerId'
            },
            {
                message: "Enter the engineer's email: ",
                name: 'engineerEmail'
            },
            {
                message: "Enter the engineer's GitHub username: ",
                name: 'engineerGithub'
            }
        ]).then(data => {
            const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            if (!newEngineer) {
                console.log('Invalid input!');
            } else {
                engineers.push(newEngineer);
            }
            menuPrompt();
        });
    }
    
    // Getting user input for an intern, creating an Intern object, and adding it to the interns array
    if (userMenuChoice == nextChoices[1]) {
        inquirer.prompt([
            {
                message: "Enter the intern's name: ",
                name: 'internName'
            },
            {
                message: "Enter the intern's ID: ",
                name: 'internId'
            },
            {
                message: "Enter the intern's email: ",
                name: 'internEmail'
            },
            {
                message: "Enter the intern's school: ",
                name: 'internSchool'
            }
        ]).then(data => {
            const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            if (!newIntern) {
                console.log('Invalid input!');
            } else {
                interns.push(newIntern);
            }
            menuPrompt();
        });
    }

    // Finish adding
    if (userMenuChoice == nextChoices[2]) {
        console.log('Team profile page has been generated!');
    }
}

const init = () => {
    console.log('Welcome to a team profile generator! Please follow the prompts to create your own team profile!')
    console.log('-----------------------------------------------------------------------------------------------');
    inquirer.prompt([
        {
            message: "Enter the team manager's name: ",
            name: 'managerName'
        },
        {
            message: "Enter the team manager's ID: ",
            name: 'managerId'
        },
        {
            message: "Enter the team manager's email: ",
            name: 'managerEmail'
        },
        {
            message: "Enter the team manager's office number: ",
            name: 'managerOfficeNumber'
        }
    ]).then(data => {
        manager = new Manager(data.managerName, data.managerId, data.managaerEmail, data.managerOfficeNumber);
        menuPrompt();
    })
}

init();