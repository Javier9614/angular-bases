import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListDbzComponent {

  @Output()
  onDeleteId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList :Character[] =[];


  onDeleteCharacter(id:string | undefined):void{

    this.onDeleteId.emit(id);

    console.log(id);
  }
}
