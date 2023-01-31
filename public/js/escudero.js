var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Escudero_characterServed, _Escudero_degreeOfPelotism;
import { Characters } from './character.js';
export class Escudero extends Characters {
    constructor(name, family, characterServed, degreeOfPelotism, textOfComunication, age, state, serie) {
        super(age, state, serie);
        _Escudero_characterServed.set(this, void 0);
        _Escudero_degreeOfPelotism.set(this, void 0);
        this.name = name;
        this.family = family;
        __classPrivateFieldSet(this, _Escudero_characterServed, characterServed, "f");
        __classPrivateFieldSet(this, _Escudero_degreeOfPelotism, degreeOfPelotism, "f");
        this.textOfComunication = textOfComunication;
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
_Escudero_characterServed = new WeakMap(), _Escudero_degreeOfPelotism = new WeakMap();
