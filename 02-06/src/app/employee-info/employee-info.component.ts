import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }
  @Input() employee: Employee[];
  ngOnInit() {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId);
  }  
}
