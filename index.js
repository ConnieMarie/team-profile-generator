const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');

const team = [];


// questions applying to all employees
const addEmployee = [
    {
        type: 'input',
        name: 'name',
        message: "What is your new employee's name? (Required)",
        validate: employeeInput => {
            if (employeeInput) {
              return true;
            } else { 
              console.log("Please enter new employee's name!");
              return false;
            }
          } 
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your new employee's ID number? (Required)",
        validate: idInput => {
            if (idInput) {
              return true;
            } else { 
              console.log("Please enter new employee's ID number!");
              return false;
            }
          } 
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your new employee's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else { 
              console.log("Please enter new employee's email address!");
              return false;
            }
          } 
    },
    {
        type: 'list',
        name: 'role',
        message: "What is your new employee's role?",
        choices: ['Engineer', 'Intern', 'Manager']
    }
];

// engineer only
const addEngineer = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'username',
                message: "What is your new Engineer's GitHub username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                      return true;
                    } else { 
                      console.log("Please enter new Engineer's GitHub username!");
                      return false;
                    }
                  } 
            }
        ]
    )  
};


// intern only
const addIntern = () => {
   return inquirer.prompt(
    [
        {
            type: 'input',
            name: 'school',
            message: "What school does your new Intern attend? (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else { 
                  console.log("Please enter new Intern's school!");
                  return false;
                }
              } 
        }
    ]
   )
}; 

// manager only
const addManager = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is your new Manager's office number? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                      return true;
                    } else { 
                      console.log("Please enter new Manager's office number!");
                      return false;
                    }
                  } 
            }
        ]
    )
}; 

// function to write HTML file
function writeToFile(fileName, data) {
    let fileContent = generateHTML(data);
      fs.writeFile(fileName, fileContent, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log('Team profile created!')
      });
    };

    // function to initialize app
function init() {
    inquirer
  .prompt(addEmployee)
  .then((answer) => {
    if (answer.role === 'Engineer') {addEngineer()};
    if (answer.role === 'Intern') {addIntern()};
    if (answer.role === 'Manager') {addManager()};
  })
  .then(function (data){
    let fileName = 'index.html';
    writeToFile = (fileName, data)
  })
  };

  init();