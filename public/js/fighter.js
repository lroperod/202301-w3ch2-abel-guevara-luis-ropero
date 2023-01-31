var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Fighter_weaponUsed;
import { Characters } from './character.js';
export class Fighter extends Characters {
    constructor(name, family, weaponUsed, textOfComunication, dexterity, age, state, serie) {
        super(age, state, serie);
        _Fighter_weaponUsed.set(this, void 0);
        this.name = name;
        this.family = family;
        __classPrivateFieldSet(this, _Fighter_weaponUsed, weaponUsed, "f");
        this.textOfComunication = textOfComunication;
        this.dexterity = dexterity;
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
_Fighter_weaponUsed = new WeakMap();
