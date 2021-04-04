const manager = require("../lib/Manager.js");

describe("manager",()=>{
    it ("Getting the officenumber",()=>{
        const employeeTest = new manager('sathish', 111,'sathish@gmail.com',1233)
        const employeeOfficeNumber = employeeTest.getOfficeNumber()
        expect(employeeOfficeNumber).toEqual(1233);
    });
    it("Getting the employee role",()=>{
        const employeeTest = new manager('sathish', 111,'sathish@gmail.com',1233)
        const employeeRole= employeeTest.getRole()
        expect(employeeRole).toEqual('Manager')
    });

    });
