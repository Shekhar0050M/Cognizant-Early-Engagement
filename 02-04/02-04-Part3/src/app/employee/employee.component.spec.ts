import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a title \'employee information\'', () => {
      expect(component.title).toEqual('employee information');
  });
  it('should have an employee name \'sam\'', () => {
      expect(component.name).toEqual('sam');
  });
  it('should have an employee salary \'90000\'', () => {
      expect(component.salary).toEqual('90000');
  });
  it('should have an employee joining date \'2021/05/20\'', () => {
      expect(component.joiningDate).toEqual(new Date('2021/05/20'));
  });
  it('should render title in a h1 tag', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toEqual("Employee Information");
  });
  it('should render employee name in a h2 tag', () => {
      expect(fixture.nativeElement.querySelector('#name').innerHTML).toEqual('Name: SAM');
  });
  it('should render employee salary in a h2 tag', () => {
      expect(fixture.nativeElement.querySelector('#salary').innerHTML).toEqual('Salary: ₹90,000.00');
  });
  it('should render employee joining date \'2015/05/20\'', () => {
      expect(fixture.nativeElement.querySelector('#joiningDate').innerHTML).toEqual('Date Of Joining: Thursday, May 20, 2021');
  });
});
