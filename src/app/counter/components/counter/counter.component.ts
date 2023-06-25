import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>
  Counter: {{counter}}
</h3>
<button (click)="increaseBy('rest')">-1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy('sum')">+1</button>`
})

export class CounterComponent {
  constructor() { }

  public counter:number=10;

  increaseBy(value:string):void{
   if (value=='sum') {
     this.counter+=1;

   }else if(value=='rest'){
     this.counter-=1;
   }
  }
  reset(){
   this.counter=10;
  }

}
