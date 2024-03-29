import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven.component';

xdescribe('EditEmpTemplateDrivenComponent', () => {
  let component: EditEmpTemplateDrivenComponent;
  let fixture: ComponentFixture<EditEmpTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmpTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
