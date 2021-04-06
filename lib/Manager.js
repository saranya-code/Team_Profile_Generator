//Inherit from Employee (parent class)

const Employee= require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);       // From parent class
        this.officeNumber = officeNumber;
        this.role ='Manager';
    }

    getOfficeNumber(){

       return this.officeNumber
    }

    getRole(){

        return this.role
    }

}
module.exports = Manager;
