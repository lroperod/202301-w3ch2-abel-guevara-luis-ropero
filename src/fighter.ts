import { Characters } from './character.js';

export class Fighter extends Characters {
  name: string;
  family: string;
  #weaponUsed: string;
  textOfComunication: string;
  dexterity: number;

  constructor(
    name: string,
    family: string,
    weaponUsed: string,
    textOfComunication: string,
    dexterity: number,
    age: number,
    state: true,
    serie: string,
  ) {
    super(age, state, serie);
    this.name = name;
    this.family = family;
    this.#weaponUsed = weaponUsed;
    this.textOfComunication = textOfComunication;
    this.dexterity = dexterity;
  }

  comunicate(phrase: string) {
    return phrase;
  }

  die(): boolean {
    throw new Error('Method not implemented.');
  }

  serieCharacter(): string {
    throw new Error('Method not implemented.');
  }

  changeTypeOfCharacter(): string {
    throw new Error('Method not implemented.');
  }
}
