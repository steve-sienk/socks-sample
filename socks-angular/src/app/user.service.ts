import { Injectable } from '@angular/core';
import { nameByRace } from "fantasy-name-generator";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name: string = ""
  constructor() { }

  public setName(name: string) {
    this.name = name;
  }

  public generateName() {
    const generatedName=nameByRace("orc")
    this.setName(generatedName.toString())
  }
}
