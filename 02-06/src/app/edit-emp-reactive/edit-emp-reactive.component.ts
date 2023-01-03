import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent {
  employee: Employee;
  constructor(private route : ActivatedRoute, private employeeService : EmployeeService) { }
  ngOnInit() {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
  }  
}
