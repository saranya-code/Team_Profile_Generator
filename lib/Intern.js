//Inherit from Employee (parent class)

const Employee= require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);       // From parent class
        this.school = school;
        this.role= 'Intern';
    }

    getSchool(){

        return this.school
    }
    
    getRole() {

        return this.role;
    }   
}

module.exports = Intern;
