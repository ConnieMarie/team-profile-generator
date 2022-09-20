const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');

const employeeArr = [];

// questions applying to all employees
const addEmployee = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'name',
                message: "What is your new employee's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
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
                choices: ['Engineer', 'Intern']
            }
        ]
    )
}; 

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
    console.log(data);
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
addEmployee()
  .then(async function (data) {
    if (data.role === 'Engineer') {
    
    let {username} = await addEngineer();
    let engineer = new Engineer(data.name, data.id, data.email, username)
    console.log(engineer);
    return engineer;
    } else if (data.role === 'Intern') {
      let {school} = await addIntern();
      let intern = new Intern(data.name, data.id, data.email, school)
      return intern;     
    } else {

    }
    
  }) 
  .then(function (data) {
    employeeArr.push(data)
    inquirer.prompt([{
      name: 'continue',
      type: 'confirm',
      message: 'Would you like to add anymore employees?'
    }]).then (answer => {
      if (answer.continue) {
        init();
      } else {
        let fileName = 'index.html';
        writeToFile(fileName, employeeArr)
      }
    })
    
  });
  
  };
  

  
  inquirer.prompt(
    [
        {
            type: 'input',
            name: 'name',
            message: "What is your new manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else { 
                  console.log("Please enter new manager's name!");
                  return false;
                }
              } 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your new manager's ID number? (Required)",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else { 
                  console.log("Please enter new manager's ID number!");
                  return false;
                }
              } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your new manager's email address? (Required)",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else { 
                  console.log("Please enter new manager's email address!");
                  return false;
                }
              } 
        },
        
    ]
)
  .then(async function (data) {
  
      let {officeNumber} = await addManager();
      console.log(officeNumber);
      let manager = new Manager(data.name, data.id, data.email, officeNumber)
      employeeArr.push(manager)
      console.log(`\n \n Team Data \n \n`)  
      init(); 
    }
    
  ) 