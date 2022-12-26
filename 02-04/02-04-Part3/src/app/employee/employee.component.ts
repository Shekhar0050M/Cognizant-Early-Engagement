import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    title="employee information";
    name="sam";
    salary="90000";
    joiningDate=new Date("2021/05/20");
}
