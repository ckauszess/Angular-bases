import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deletedHero?:string;
  public heroNames:string[]=[ 'Spiderman','Iron Man', 'Hulk', 'She hulk', 'Thor'];

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }


}
