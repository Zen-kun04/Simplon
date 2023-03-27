import config from '../config.json'
import { rightArrowEvent, leftArrowEvent } from './modules/events';

function addClass(element: HTMLElement | Element, className: string): void{
    element.classList.add(className);
}

rightArrowEvent();
leftArrowEvent();