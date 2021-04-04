const intern = require("../lib/Intern.js");

describe("intern",()=>{
    it ("Getting the school",()=>{
        const employeeTest = new intern('sathish', 111,'sathish@gmail.com','dummySchool')
        const employeeSchool = employeeTest.getSchool()
        expect(employeeSchool).toEqual('dummySchool')
    });
    it("Getting the employee role",()=>{
        const employeeTest = new intern('sathish', 111,'sathish@gmail.com','dummySchool')
        const employeeRole= employeeTest.getRole()
        expect(employeeRole).toEqual('Intern')
    });

    });
