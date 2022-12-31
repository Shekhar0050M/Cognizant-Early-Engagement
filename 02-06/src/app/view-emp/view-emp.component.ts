import { Component } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Department } from 'src/app/department';
import { Skill } from 'src/app/skill';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements Employee,Department,Skill{
    employeeId: number;
    employeeName: string;
    employeeSalary: number;
    employeePermanent: boolean;
    employeeDateOfBirth: Date;
    departmentId: number;
    departmentName: string;
    skills: { skillId: number; skillName: string; }[];
    constructor(){
        this.employeeId=3;
        this.employeeName="John";
        this.employeeSalary=10000;
        this.employeePermanent=true;
        this.employeeDateOfBirth=new Date('2019/04/21');
        this.departmentId= 1;
        this.departmentName= "Payroll";
        this.skills = [
            {skillId:1,skillName:"HTML"},
            {skillId:2,skillName:"CSS"},
            {skillId:3,skillName:"Javascript"}
        ];
    }
    skillId: number;
    skillName: string;
    permanent(employeePermanent:boolean):string{
        if(employeePermanent===true){
            return 'Yes';
        }
        else{
            return 'No';
        }
    }
}
