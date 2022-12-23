"use strict";
/*interface Employee{*/
/*employeeId:string,*/
/*employeeName:string,*/
/*employeeSalary:number,*/
/*employeePermanent:boolean*/
/*}*/
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest() {
        this.employeeId = "EM004";
        this.employeeName = "John";
        this.employeeSalary = 10000;
        this.employeePermanent = true;
        this.departmentId = 1;
        this.departmentName = "Payroll";
        this.skills = [
            { skillId: 1, skillName: "HTML" },
            { skillId: 2, skillName: "CSS" },
            { skillId: 3, skillName: "Javascript" },
        ];
    }
    /*employeeId="EM003";*/
    /*employeeName="John";*/
    /*employeeSalary=10000;*/
    /*employeePermanent=true*/
    /*departmentId= 1;*/
    /*departmentName= "Payroll";*/
    /*skillId: number;*/
    /*skillName: string;*/
    /*skills: Skill[] = [*/
    /*{skillId:1,skillName:"HTML"},*/
    /*{skillId:2,skillName:"CSS"},*/
    /*{skillId:3,skillName:"Javascript"},*/
    /*]*/ ;
    EmployeeTest.prototype.display = function () {
        console.log("id: " + this.employeeId);
        console.log("name: " + this.employeeName);
        console.log("salary: " + this.employeeSalary);
        console.log("permanent: " + this.employeePermanent);
        console.log("department id: " + this.departmentId);
        console.log("department name: " + this.departmentName);
        for (var skill in this.skills) {
            console.log("Skill[" + skill + "]:" + this.skills[skill].skillId + ", " + this.skills[skill].skillName);
        }
    };
    return EmployeeTest;
}());
var employeeTest = new EmployeeTest();
employeeTest.display();
