import { Component } from '@angular/core';
import {Department} from 'src/department';
import {Employee} from 'src/employee';
import {Skill} from 'src/skill';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements Employee,Department,Skill{
    title = 'helloWorld';
    favoriteMovie = '<b>Favorite Movie: <b>Lord of the Rings';
    employeeId: string="3";
    employeeName: string="John";
    employeeSalary: number=10000;
    employeePermanent: boolean=true;
    departmentId: number=1;
    departmentName: string="Payroll";
    skillId: number;
    skillName: string;
    employeeDateOfBirth:Date = new Date('12/31/2000');
    skills:Array<Skill> = [
        {skillId:1,skillName:"HTML"},
        {skillId:2,skillName:"CSS"},
        {skillId:3,skillName:"Javascript"},
    ];
    permanent(employeePermanent:boolean):string{
        if(employeePermanent===true){
            return 'Yes';
        }
        else{
            return 'No';
        }
    }
}

