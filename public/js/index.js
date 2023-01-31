import { allCharacters } from './dataCharacter.js';
// Const age = document.getElementsByClassName('list-unstyled');
const showAge = () => {
    allCharacters.forEach(element => console.log(element.age));
};
showAge();
