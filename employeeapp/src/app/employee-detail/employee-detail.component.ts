import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  @Input() employee: Employee;
  @Output() employeeChange = new EventEmitter<Employee>;

  updateEmployee(employee: Employee){
    this.employeeChange.emit(employee);
  }
}
