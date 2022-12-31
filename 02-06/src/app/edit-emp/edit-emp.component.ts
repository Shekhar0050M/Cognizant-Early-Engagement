import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {
  employee: Employee;
}
