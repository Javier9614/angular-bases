import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})


export class DbzService {
  public characters:Character[]=[{
    id: uuid(),
    name:"Goku",
    power:10000
  },{
    id: uuid(),
    name:"Vegeta",
    power:9999
  },{
    id: uuid(),
    name:"Gohan",
    power:3000
  },{
    id: uuid(),
    name:"Gogeta",
    power:250000
  },{
    id: uuid(),
    name:"Trunks del pasado",
    power:15000
  },{
    id: uuid(),
    name:"Goten",
    power:6000
  },{
    id: uuid(),
    name:"Picolo",
    power:6000
  }
];

  addCharacter( character:Character):void{

    const newCharacter: Character ={ id: uuid(), ...character}

    this.characters.push(newCharacter);

    alert("Personaje añadido");

  }
  deleteCharacterById( id: string):void{

    this.characters = this.characters.filter(character => character.id !== id)
  }

}
