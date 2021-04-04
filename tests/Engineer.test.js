const engineer = require("../lib/Engineer.js");

describe("engineer",()=>{
    it ("Getting the github",()=>{
        const employeeTest = new engineer('sathish', 111,'sathish@gmail.com', 'sathish-code')
        const employeeGitHub = employeeTest.gitHub()
        expect(employeeGitHub).toEqual('sathish-code')
    });
    it("Getting the employee role",()=>{
        const employeeTest = new engineer('Saranya', 123, 'saranya@gmail.com','sathish-code')
        const employeeRole= employeeTest.getRole()
        expect(employeeRole).toEqual('Engineer')
    });

    });
