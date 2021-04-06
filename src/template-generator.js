const Engineer= require("../lib/Engineer");
const Intern= require("../lib/Intern");
const Manager= require("../lib/Manager");


const generateCard = (employeeDetails) => {
    let cardTemplate = ''
    employeeDetails.forEach(employeeDetail => {
        const {name,id,email,role}  = employeeDetail;      //destructure   
        //    console.log(employeeDetail)
        let newEmployeeDetails;
        let additionDetails;
        let icon;
        switch(role){
            case 'Manager':
                newEmployeeDetails = new Manager(name,id,email,employeeDetail.officeNumber);
                additionDetails = `Office Number: ${newEmployeeDetails.getOfficeNumber()}`;
                icon = '<i class="fas fa-mug-hot"></i>'
                break;
            case 'Engineer':
                newEmployeeDetails = new Engineer(name,id,email,employeeDetail.engineerGitHub);
                additionDetails = `Github: <a href='https://github.com/${newEmployeeDetails.gitHub()}'> ${newEmployeeDetails.gitHub()} </a>`;
                icon ='<i class="fas fa-glasses"></i>'
                break;
            case 'Intern':
                newEmployeeDetails = new Intern(name,id,email,employeeDetail.internSchool);
                additionDetails = `School: ${newEmployeeDetails.getSchool()}`;
                icon ='<i class="fas fa-user-graduate"></i>'
                break;
        }
        cardTemplate += `<div class="card m-3 w-25 shadow">
            <div class="card-body p-3 bg-primary text-white">
                <h5 class="card-title"> ${name} </h5>
                <h6 class="card-text"> ${icon} ${role} </h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id} </li>
                <li class="list-group-item">EMail: <a href='mailto:${email}'> ${email} </a> </li>
                <li class="list-group-item"> ${additionDetails} </li>
            </ul>
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
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </head>
        <body>
            <div class="container-fluid text-center bg-danger justify-content-center font-weight-bold p-4"> <h2>My Team </h2>
            </div>
            <div class="container d-flex flex-wrap justify-content-center m-5"> ${cardTemplate} </div>
        </body>
    </html>`
}

module.exports = generateCard;



