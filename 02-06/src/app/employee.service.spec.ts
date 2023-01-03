import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return all list of emloyees', () => {
    expect(service.getAllEmployee()).toEqual(service.employeeList);
  });
  it('should return specified emloyee detail with id', () => {
    expect(service.getEmployee(1)).toEqual(service.employeeList[0]);
  });
});
