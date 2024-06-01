import { BuiltinTypeName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string ="ironman";
  public age:number = 45;
  public method:string ="Javi";


  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getDescription():string{
  return `${this.name} - ${this.age}`;
  }

  changeName():void{
  const result = prompt("Selecciona un nuevo nombre");
  this.name=result || "No valido";
  }
  changeAge():void{
    const prom = prompt("Selecciona una nueva edad","0") || "0";
    const result = parseInt(prom,10);
    this.age = result;
    }
    resetForm():void{
      this.name ="ironman";
      this.age=45
    }
}
