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
    message:"Enter Employee name : ",
    type:"input",
    name:"name",
    validate:(answer)=>{
        if(answer === ''){
            return 'Name is required !!!';
        }
        if(!isNaN(answer)) {
            return 'Please enter name in string !!!';
        }
        return true;
    }
},
{
    message:"Enter Employee ID : ",
    type:"input",
    name:"id",
    validate:(answer)=>{
        if(answer === ''){
            return 'Id is required !!!';
        }
        if(isNaN(answer)) {
            return 'Id should be in number !!!'

        }
        return true;
    }
},
{
    message:"Enter Employee EMail : ",
    type:"input",
    name:"email",
    validate:(answer)=>{
        if(answer === ''){
            return 'EMail is required !!!';
        }
        const regex = /\S+@\S+\.\S+/;
        if(!regex.test(answer)) {
            return 'Enter valid EMail';

        }
        return true;
    }
},
{
    message:"Enter Manager Office number : ",
    type:"input",
    name:"officeNumber",
    when:(answers)=> answers.role ==='Manager',
    validate:(answer)=>{
        if(answer === ''){
            return 'Office number is required !!!';
        }
        if(isNaN(answer)) {
            return 'Office number should be in number !!!';

        }
        return true;
    }
},
{
    message:"Enter Engineer GitHub:",
    type:"input",
    name:"engineerGitHub",
    when:(answers)=> answers.role ==='Engineer',
    validate:(answer)=>{
        if(answer === ''){
            return 'Github is required !!!';
        }
        if(!isNaN(answer)) {
            return 'Github  should be in string !!!';
        }
        return true;
    }
},
{
    message:"Enter Intern School",
    type:"input",
    name:"internSchool",
    when:(answers)=> answers.role ==='Intern',
    validate:(answer)=>{
        if(answer === ''){
            return 'School is required !!!';
        }
        if(!isNaN(answer)) {
            return 'Please enter school in string !!!';
        }
        return true;
    }
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
