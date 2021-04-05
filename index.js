const inquirer = require('inquirer');
const generateCard = require("./src/template-generator.js");
const fs = require('fs');

const employeeResponse = [] // [{role:manger,name,email,officenumber}]
const question = [
{
    message:"Add a team member",
    type:"list",
    name:"role",
    choices:() => {
        if(employeeResponse.some(item => item.role === 'Manager')) {
            return ['Engineer','Intern']
        } else {
            return ['Manager', 'Engineer','Intern']
        }
    }
},
{
    message:"Enter Employee name",
    type:"string",
    name:"name"
},
{
    message:"Enter Employee ID",
    type:"string",
    name:"id"
},
{
    message:"Enter Employee EMail",
    type:"string",
    name:"email"
},
{
    message:"Enter Manager Office number",
    type:"string",
    name:"officeNumber",
    when:(answers)=> answers.role ==='Manager'
},
{
    message:"Enter Engineer GitHub",
    type:"string",
    name:"engineerGitHub",
    when:(answers)=> answers.role ==='Engineer'
},
{
    message:"Enter Intern School",
    type:"string",
    name:"internSchool",
    when:(answers)=> answers.role ==='Intern'
},
{
    message:"Would you like to add more team member ?",
    type:"confirm",
    name:"AddMoreTeamMember",
},
]

const askQuestion = () => {
    return inquirer.prompt(question)
    .then(answer => {
        employeeResponse.push(answer)
        if(answer.AddMoreTeamMember){
            return askQuestion()
        } else {
            return employeeResponse
        }
    })
}

askQuestion()
    .then(employeeDetails => generateCard(employeeDetails))
    .then(html => fs.writeFile('./dist/index.html',html,(err)=> err && console.log(err)))
