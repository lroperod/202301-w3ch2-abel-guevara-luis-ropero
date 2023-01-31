import { Characters } from './character.js';

export class Escudero extends Characters {
  name: string;
  family: string;
  #characterServed: string;
  #degreeOfPelotism: number;
  textOfComunication: string;

  constructor(
    name: string,
    family: string,
    characterServed: string,
    degreeOfPelotism: number,
    textOfComunication: string,
    age: number,
    state: true,
    serie: string,
  ) {
    super(age, state, serie);
    this.name = name;
    this.family = family;
    this.#characterServed = characterServed;
    this.#degreeOfPelotism = degreeOfPelotism;
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
