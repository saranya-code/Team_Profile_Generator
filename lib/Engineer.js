//Inherit from Employee (parent class)

const Employee= require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email);    // From parent class
        this.github = github;
        this.role = 'Engineer';
    }

    gitHub(){
        return this.github
    }
    getRole(){
        return this.role
    }
}

module.exports = Engineer;