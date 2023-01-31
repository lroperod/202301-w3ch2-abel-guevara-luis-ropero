export class Characters {
  age: number;
  state: true;
  serie: string;

  constructor(age: number, state: true, serie: string) {
    this.age = age;
    this.state = state;
    this.serie = serie;
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
