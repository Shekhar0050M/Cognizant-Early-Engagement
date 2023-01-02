import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';
import { Skill } from '../skill';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  searchKey: string = '';
  filteredEmployeesList: any[] = [];
  search(){
    this.filteredEmployeesList = this.employeeList.filter(employee => 
      employee.name.toLowerCase().includes(this.searchKey.toLowerCase()));
  }
  employeeList: Employee[] = [
    {
      id:1,
      name:"John",
      salary:10000,
      permanent:false,
      dateOfBirth:new Date('2020/04/21')
    },
    {
      id:2,
      name:"Smith",
      salary:5000,
      permanent:false,
      dateOfBirth:new Date('2020/04/21')
    },
    {
      id:3,
      name:"Mark",
      salary:5000,
      permanent:false,
      dateOfBirth:new Date('2020/04/21')
    },
    {
      id:4,
      name:"Mary",
      salary:5000,
      permanent:false,
      dateOfBirth:new Date('2020/04/21')
    },
  ];
}
