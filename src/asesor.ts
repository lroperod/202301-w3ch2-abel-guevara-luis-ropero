import { Characters } from './character.js';

export class Asesor extends Characters {
  name: string;
  family: string;
  textOfComunication: string;
  #characterWhoConsultant: string;

  constructor(
    name: string,
    family: string,
    characterWhoConsultant: string,
    textOfComunication: string,
    age: number,
    state: true,
    serie: string,
  ) {
    super(age, state, serie);
    this.name = name;
    this.family = family;
    this.textOfComunication = textOfComunication;
    this.#characterWhoConsultant = characterWhoConsultant;
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
