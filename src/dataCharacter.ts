import { Escudero } from './escudero.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Asesor } from './asesor.js';
import { Characters } from './character.js';

export const allCharacters: Characters[] = [];

const kingOne = new King(
  'Joffrey Baratheon',
  'Baratheon',
  3,
  'Vais a morir todos',
  37,
  true,
  'GOT',
);
const fighterOne = new Fighter(
  'Jaime Lannister',
  'Lannister',
  'sword',
  'Primero pego y luego pregunto',
  10,
  35,
  true,
  'GOT',
);
const fighterTwo = new Fighter(
  'Daenerys Targaryen',
  'Targaryen',
  'Dragons',
  'Primero pego y luego pregunto',
  8,
  15,
  true,
  'GOT',
);

const asesorOne = new Asesor(
  'Tyrion Lannister',
  'Lannister',
  'Daenerys',
  'No se por que, pero creo que voy a morir',
  28,
  true,
  'GOT',
);

const escuderoOne = new Escudero(
  'Bronn',
  'Aguasnegras',
  'Jaime',
  9,
  'Soy un loser',
  40,
  true,
  'GOT',
);

allCharacters.push(kingOne, fighterOne, fighterTwo, asesorOne, escuderoOne);
