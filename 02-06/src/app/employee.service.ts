import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employeeList: Employee[] = [
    {
      id: 1,
      name: "John",
      salary: 10000,
      permanent: false,
      dateOfBirth: new Date('2020/04/21')
    },
    {
      id: 2,
      name: "Smith",
      salary: 5000,
      permanent: false,
      dateOfBirth: new Date('2020/04/21')
    },
    {
      id: 3,
      name: "Mark",
      salary: 5000,
      permanent: false,
      dateOfBirth: new Date('2020/04/21')
    },
    {
      id: 4,
      name: "Mary",
      salary: 5000,
      permanent: false,
      dateOfBirth: new Date('2020/04/21')
    },
  ];
  getAllEmployee(): Employee[]{
    return this.employeeList;
  }
  getEmployee(employeeId: number): Employee | null{
    for(const employee of this.employeeList){
      if(employee.id === employeeId){
        return employee;
      }
    }
    return null;
  }
  
}
