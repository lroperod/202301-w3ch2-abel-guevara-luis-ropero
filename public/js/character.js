export class Characters {
    constructor(age, state, serie) {
        this.age = age;
        this.state = state;
        this.serie = serie;
    }
    comunicate(phrase) {
        return phrase;
    }
    die() {
        throw new Error('Method not implemented.');
    }
    serieCharacter() {
        throw new Error('Method not implemented.');
    }
    changeTypeOfCharacter() {
        throw new Error('Method not implemented.');
    }
}
