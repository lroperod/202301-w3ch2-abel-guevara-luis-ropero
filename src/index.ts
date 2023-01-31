import { allCharacters } from './dataCharacter.js';

// Const age = document.getElementsByClassName('list-unstyled');

const showAge = (): void => {
  allCharacters.forEach(element => console.log(element.age));
};

showAge();
