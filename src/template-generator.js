const Employee= require("../lib/Employee");
const Engineer= require("../lib/Engineer");
const Intern= require("../lib/Intern");
const Manager= require("../lib/Manager");


const generateCard = (employeeDetails) => {
    let cardTemplate = ''

    employeeDetails.forEach(employeeDetail => {
        const {name,id,email,role}  = employeeDetail;      //destructure   
           
        let newEmployeeDetails
        let additionDetails

        switch(role){
            case 'Manager':
                newEmployeeDetails = new Manager(name,id,email,employeeDetail.officeNumber)
                additionDetails = `Office Number: ${newEmployeeDetails.getOfficeNumber()}`
            case 'Engineer':
                newEmployeeDetails = new Engineer(name,id,email,employeeDetail.github)
                additionDetails = `Github: ${newEmployeeDetails.gitHub()}`
            case 'Intern':
                newEmployeeDetails = new Intern(name,id,email,employeeDetail.school)
                additionDetails = `School: ${newEmployeeDetails.getSchool()}`
        }
        cardTemplate += `<div class="container d-flex p-2 bd-highligh">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-text">${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">EMail: ${email}</li>
                <li class="list-group-item">${additionDetails}</li>
            </ul>
        </div>
    </div>`
    });
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </head>
        <body>
            <div class="container-fluid justify-content-center">
                <div class="row">
                    <div class="col-12 bg-danger "> My Team</div>
                </div>
            </div>
            ${cardTemplate}
        </body>
    </body>
    </html>`
}

module.exports = generateCard;



