import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  counter:number = 0;
  incrementCounter(){
    this.counter++;
  }
  decrementCounter(){
    if(this.counter>0){
      this.counter--;
    }
  }
}
