import { Characters } from './character.js';

export class King extends Characters {
  name: string;
  family: string;

  textOfComunication: string;
  #yearsOfReign: number;

  constructor(
    name: string,
    family: string,
    yearsOfReign: number,
    textOfComunication: string,
    age: number,
    state: true,
    serie: string,
  ) {
    super(age, state, serie);
    this.name = name;
    this.family = family;
    this.#yearsOfReign = yearsOfReign;
    this.textOfComunication = textOfComunication;
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
