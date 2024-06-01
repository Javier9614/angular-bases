import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ["Spiderman", "Hulk", "Ojo de Halcón", "Doctor Strange","Thor","Gamora"];

  public lastHero:string | undefined = "";

  deleteLastHero():void{
   this.lastHero = this.heroNames.pop();
   if(this.lastHero == undefined){
    alert("Animal, te has cargado a todos los heroes");
    this.lastHero="Monstruo :("
   }else{
   alert(`Heroe ${this.lastHero} ha sido eliminado :'(`);
  }

  }
  resetHeros ():void {
    this.heroNames= ["Spiderman", "Hulk", "Ojo de Halcón", "Doctor Strange","Thor","Gamora"];
    this.lastHero = "Los reviviste :)"
    if(this.lastHero=="los reviviste :)"){
      const btn=document.querySelector("small");
      btn!.removeAttribute("text-danger");
      btn!.className += ".text-success";
    }
  }
}
