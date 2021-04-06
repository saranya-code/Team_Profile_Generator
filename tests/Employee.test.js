const employee = require("../lib/Employee.js");

describe("employee",()=>{
    it("Getting the employee name",()=>{
        const employeeTest = new employee('SARAnya', 123, 'saranya@gmail.com')          //Arrange
        const employeeName = employeeTest.getName()                                     //Act
        expect(employeeName).not.toMatch('saranya')                                     //Assert
    });
    it("Getting the employee id",()=>{
        const employeeTest = new employee('Saranya', 123, 'saranya@gmail.com')
        const employeeId = employeeTest.getId()
        expect(employeeId).toEqual(123)
    });
    it("Getting the employee Email",()=>{
        const employeeTest = new employee('Saranya', 123, 'saranya@gmail.com')
        const employeeEmail= employeeTest.getEmail()
        expect(employeeEmail).toMatch('saranya@gmail.com')
    });
    it("Getting the employee role",()=>{
        const employeeTest = new employee('Saranya', 123, 'saranya@gmail.com')
        const employeeRole= employeeTest.getRole()
        expect(employeeRole).toEqual('Employee')
    });
    it("Getting the employee Email",()=>{                          // Negative test
        const employeeTest = new employee('Saranya', 123)
        const employeeEmail= employeeTest.getEmail()
        expect(employeeEmail).toBeUndefined();
    });
});