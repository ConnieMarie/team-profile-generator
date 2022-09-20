const Employee = require("../lib/Employee");

// function to general employee card specific to role
function renderEmployeeHTML(data) {
    let content = data.map(emp => {
        emp.role = emp.getRole();
    if (emp.role === 'Engineer') {
        return `<div class="card m-3 shadow rounded" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">${emp.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fa-solid fa-glasses m-2"></i>${emp.getRole()}</h6>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item">${emp.getId()}</li>
            <li class="list-group-item">${emp.getEmail()}</li>
            <li class="list-group-item">${emp.getGitHub()}</li>
        </ul>
    </div>
</div>`
    } else if (emp.role === 'Intern') {
        return `<div class="card m-3 shadow rounded" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">${emp.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fa-solid fa-graduation-cap m-2"></i>${emp.getRole()}</h6>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item">${emp.getId()}</li>
            <li class="list-group-item">${emp.getEmail()}</li>
            <li class="list-group-item">${emp.getSchool()}</li>
        </ul>
    </div>
</div>`
    } else {
        return `<div class="card m-3 shadow rounded" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">${emp.getName()}</h5>
        <h6 class="card-subtitle mb-2"><i class="fa-solid fa-mug-hot m-2"></i>${emp.getRole()}</h6>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item">${emp.getId()}</li>
            <li class="list-group-item">${emp.getEmail()}</li>
            <li class="list-group-item">${emp.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
    }
    
    })
    return(content.join(","));
    
};

//function to generate page HTML
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="mock-stylesheet.css">
        <script src="https://kit.fontawesome.com/9692f97516.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <header class="col-12 bg-danger m-2">
                    <h1 class="text-center text-white">My Team</h1>
                </header>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="page-content col-12 d-flex flex-wrap justify-content-center">
                    ${renderEmployeeHTML(data)}
                    
                </div>
            </div>
        </div>`;
};

module.exports = generateHTML;