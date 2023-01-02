import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent {
  employee: Employee;
  constructor(private route : ActivatedRoute) { }
}
