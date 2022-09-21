const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");

const teamArr = [];


// questions applying to all employees
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your new employee's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return "Please enter new employee's name!";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your new employee's ID number? (Required)",
      validate: (idInput) => {
        if (isNaN(idInput) || idInput === "") {
          return "Please enter new employee's ID number!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your new employee's email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          return "Please enter new employee's email address!";
        }
      },
    },
    {
      type: "list",
      name: "role",
      message: "What is your new employee's role?",
      choices: ["Engineer", "Intern"],
    },
  ]);
};

// engineer only
const addEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your new Engineer's GitHub username? (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          return "Please enter new Engineer's GitHub username!";
        }
      },
    },
  ]);
};

// intern only
const addIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What school does your new Intern attend? (Required)",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          return "Please enter new Intern's school!";
        }
      },
    },
  ]);
};

// manager only
const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "What is your team Manager's office number? (Required)",
      validate: (officeInput) => {
        if (isNaN(officeInput) || officeInput === "") {
          return "Please enter team Manager's office number!";
        } else {
          return true;
        }
      },
    },
  ]);
};

// function to write HTML file
function writeToFile(fileName, data) {
  let fileContent = generateHTML(data);
  fs.writeFile(fileName, fileContent, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Team profile created!");
  });
}

// function to initialize app
function init() {
  addEmployee()
    .then(async function (data) {
      if (data.role === "Engineer") {
        let { username } = await addEngineer();
        let engineer = new Engineer(data.name, data.id, data.email, username);
        return engineer;
      } else {
        let { school } = await addIntern();
        let intern = new Intern(data.name, data.id, data.email, school);
        return intern;
      }
    })
    .then(function (data) {
      teamArr.push(data);
      inquirer
        .prompt({
          name: "continue",
          type: "confirm",
          message: "Would you like to add anymore employees?",
        })
        .then((answer) => {
          if (answer.continue) {
            init();
          } else {
            let fileName = "./dist/index.html";
            writeToFile(fileName, teamArr);
          }
        });
    });
}

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team Manager's name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          return "Please enter team Manager's name!";
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your team Manager's ID number? (Required)",
      validate: (idInput) => {
        if (isNaN(idInput) || idInput === "") {
          return "Please enter team Manager's ID number!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your new Manager's email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          return "Please enter new Manager's email address!";
        }
      },
    },
  ])
  .then(async function (data) {
    let { officeNumber } = await addManager();
    let manager = new Manager(data.name, data.id, data.email, officeNumber);
    teamArr.push(manager);
    console.log(`\n \n Add Team Members \n \n`);
    init();
  });
