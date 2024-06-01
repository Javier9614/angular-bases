import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <h1>Hola Counter</h1>
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseCount(+1)">+1</button>
    <button (click)="resetCount()">Reset</button>
    <button (click)="increaseCount(-1)">-1</button>
  </div>`
})
export class CounterComponent {
  public counter: number = 10;

  increaseCount(value:number):void{
    this.counter +=value;
}
resetCount():void{
  this.counter = 10;
}
}
