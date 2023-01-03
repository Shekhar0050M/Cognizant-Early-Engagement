import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends EmployeeDetailComponent{
  employeeList: Employee[];
  selectedEmployee: Employee;

  onEmployeeChange(): void{
    this.employeeChange.emit(this.selectedEmployee);
    this.updateEmployee(this.selectedEmployee);
  }
  showDetails(employee: Employee): void{
    this.selectedEmployee = Object.assign({},employee);
  }

  update(emloyee: Employee){

  }

}
