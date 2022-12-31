import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityIncrementComponent } from './quantity-increment.component';

describe('QuantityIncrementComponent', () => {
  let component: QuantityIncrementComponent;
  let fixture: ComponentFixture<QuantityIncrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ QuantityIncrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantityIncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if button displays the message Click me button clicked!', () => {
    let debugElement: DebugElement;
    debugElement = fixture.debugElement;
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe');
    clickMeButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#simpleClick').textContent).toEqual('Click me button clicked!');
  });

});
