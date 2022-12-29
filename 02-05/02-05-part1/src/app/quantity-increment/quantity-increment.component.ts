import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent {
  isClicked=false;

  toggleMessage() {
    this.isClicked=true;  
  }
}
