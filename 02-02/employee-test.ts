/*interface Employee{*/
    /*employeeId:string,*/
    /*employeeName:string,*/
    /*employeeSalary:number,*/
    /*employeePermanent:boolean*/
/*}*/

/*interface Department{*/
    /*departmentId:number,*/
    /*departmentName:string*/
/*}*/

/*interface Skill{*/
    /*skillId:number,*/
    /*skillName:string*/
/*}*/

import {Employee} from './employee';
import {Skill} from './skill';
import {Department} from './department';

class EmployeeTest implements Employee,Department,Skill{
    employeeId:string;
    employeeName:string;
    employeeSalary:number;
    employeePermanent:boolean;
    departmentId:number;
    departmentName:string;
    skillId: number;
    skillName: string;
    skills: Skill[];
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
    /*]*/;
    constructor(){
        this.employeeId="EM004";
        this.employeeName="John";
        this.employeeSalary=10000;
        this.employeePermanent=true
        this.departmentId= 1;
        this.departmentName= "Payroll";
        this.skills = [
            {skillId:1,skillName:"HTML"},
            {skillId:2,skillName:"CSS"},
            {skillId:3,skillName:"Javascript"},
        ];
    }
    display():void{
        console.log("id: " + this.employeeId);
        console.log("name: " + this.employeeName);
        console.log("salary: " + this.employeeSalary);
        console.log("permanent: " + this.employeePermanent);
        console.log("department id: " + this.departmentId);
        console.log("department name: " + this.departmentName);
        for (var skill in this.skills){
            console.log("Skill["+skill+"]:"+this.skills[skill].skillId+", "+this.skills[skill].skillName);
        }
    }
}

let employeeTest = new EmployeeTest();
employeeTest.display()
