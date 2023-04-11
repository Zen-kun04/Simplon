import config from '../config.json'
import { rightArrowEvent, leftArrowEvent, buttonEvent } from './modules/Events';
import { Steve } from './modules/characters/Steve';
import { Alex } from './modules/characters/Alex';
import { getCurrentCharacter, loadAllCharacters } from './modules/CharacterContainers';

function addClass(element: HTMLElement | Element, className: string): void{
    element.classList.add(className);
}

loadAllCharacters();
rightArrowEvent();
leftArrowEvent();
buttonEvent();
const steve = new Steve();
console.log(steve.a, steve.b);

const alex = new Alex();
console.log(alex.a, alex.b);