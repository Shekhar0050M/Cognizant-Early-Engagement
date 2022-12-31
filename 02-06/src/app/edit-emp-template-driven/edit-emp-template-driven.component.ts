import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Skill } from '../skill';
import { Department } from '../department';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent {
  employee: { employeedet: Employee, department: Department, skills: Skill[] } = {
    employeedet: {
      employeeId: 3,
      employeeName: "John",
      employeeSalary: 10000,
      employeePermanent: false,
      employeeDateOfBirth: new Date('2019/05/24')
    },
    department: {
      departmentId: 1,
      departmentName: "Payroll"
    },
    skills: [
      { skillId: 1, skillName: "HTML" },
      { skillId: 2, skillName: "CSS" },
      { skillId: 3, skillName: "Javascript" }
    ]
  };

  empForm = { name:"",salary:0,permanent:false,selectedDept:0};

  departments: Department[] = [
  { departmentId: 1, departmentName: "Payroll" },
  { departmentId: 2, departmentName: "Internal" },
  { departmentId: 3, departmentName: "HR" }
];
permanent(employeePermanent: boolean): string {
  if (employeePermanent === true) {
    return 'Yes';
  }
  else {
    return 'No';
  }
}
onSubmit(): void {
  this.empForm.name=this.employee.employeedet.employeeName,
  this.empForm.salary=this.employee.employeedet.employeeSalary,
  this.empForm.permanent=this.employee.employeedet.employeePermanent,
  this.empForm.selectedDept=this.employee.department.departmentId
}
};

