import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})

export class ViewEmpComponent implements Employee, Department, Skill {
  id: number;
  name: string;
  salary: number;
  permanent: boolean;
  dateOfBirth: Date;

  departments: Department[] = [
    { id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  skills: Skill[] = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Javascript" }
  ];

  employee: Employee = {
    id: 3,
    name: "John",
    salary: 10000,
    permanent: true,
    dateOfBirth: new Date('2019/04/21')
  };

  isPermanent(): string {
    if (this.employee.permanent === true) {
      return 'Yes';
    }
    else {
      return 'No';
    }
  }
}