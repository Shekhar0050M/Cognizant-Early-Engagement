import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QuantitySelectorComponent } from './quantity-selector.component';

describe('QuantitySelectorComponent', () => {
  let component: QuantitySelectorComponent;
  let fixture: ComponentFixture<QuantitySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ QuantitySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantitySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if increment works correctly', () => {
    let debugElement: DebugElement;
    debugElement = fixture.debugElement;
    let increment = debugElement.nativeElement.querySelector('#incrementCounter');
    let decrement = debugElement.nativeElement.querySelector('#decrementCounter');
    expect(component.counter).toBe(0);
    increment.click();
    fixture.detectChanges();
    expect(component.counter).toBe(1);
    decrement.click();
    fixture.detectChanges();
    expect(component.counter).toBe(0);  
  });
});
