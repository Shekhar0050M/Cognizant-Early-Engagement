import { Component } from '@angular/core';
import { Skill } from '../skill';
import { Department } from '../department';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent {

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

  employee: any = {
    id: 3,
    name: "John",
    salary: 10000,
    permanent: false,
    department: {
      id: 1,
      name: "Payroll"
    },
    skills: [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 3,
        name: "JavaScript"
      }
    ],
    dateOfBirth: new Date('2019/04/20')
  }

  onSubmit(): void {

  }

  permanentEmployee(employee: { permanent: boolean }) {
    if (employee.permanent === true) {
      return 'Yes';
    }
    else {
      return 'No';
    }
  }

  onChange(event: any) {
    console.log(event.target.value);
    this.employee.department.id = event.target.value;
  }

};

