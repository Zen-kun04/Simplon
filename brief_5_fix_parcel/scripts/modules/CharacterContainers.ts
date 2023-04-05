import config from '../../config.json'
import { rightArrowEventListener, leftArrowEventListener } from './Events';
import { showPlayingScreen } from './PlayingScreen';

import steve from '../../images/skins/steve.png';
import alex from '../../images/skins/alex.png';
import stevy from '../../images/skins/stevy.png';


interface Character {
    skin_location: string;
    low_speed: {
      [key: string]: number;
    };
    chat: {
      [key: string]: string;
    };
  }
  
  interface Characters {
    steve: Character;
    alex: Character;
  }

export function getCharacter(id: string): HTMLElement | null{
    const container: HTMLElement | null = document.querySelector(`.character #${id}`);
    return container;
}

export function createCharacter(id: string, visible: boolean = true): HTMLElement {
    const charactersDiv: HTMLElement | null = document.getElementById("characters");
    const characterBody: HTMLElement = document.createElement('div');
    const characterParagraph: HTMLElement = document.createElement('p');
    const characterSkin: HTMLImageElement = document.createElement('img');
    characterBody.id = id.trim().toLowerCase();
    // characterSkin.src = config.characters[id.trim().toLowerCase()].skin_location;
    characterSkin.src = './steve.png';
    characterSkin.alt = `Minecraft skin of ${id}`;
    characterParagraph.textContent = id;
    characterBody.classList.add('character');
    if(!visible){
        characterBody.classList.add('hidden-right');
    }
    characterBody.appendChild(characterParagraph);
    characterBody.appendChild(characterSkin);
    charactersDiv?.appendChild(characterBody);
    return characterBody;
}

export function loadAllCharacters(): void {
    for(let characterName in config.characters){
        if(Object.keys(config.characters).indexOf(characterName, 0) === 0){
            createCharacter(characterName);
        }else{
            createCharacter(characterName, false);
        }
        
    }
}

export function hideCharacter(id: string, to: string): void {
    const container: HTMLElement | null = document.querySelector(`#characters #${id}`);
    to = to.toLowerCase();
    if(container){
        if(to === "left")
        // container.style.marginLeft = "-220px";
        setTimeout(() => {
            container.classList.add('hidden-left')
        }, 100);
        else if(to === "right")
        // container.style.marginRight = "-220px";
        setTimeout(() => {
            container.classList.add('hidden-right')
        }, 100);
        // setTimeout(() => {
        //     container.classList.add('hidden');
        // }, 800);
        

    }
}

export function showCharacter(id: string, to: string): void {
    const container: HTMLElement | null = document.querySelector(`#characters #${id}`);
    console.log(container);
    
    to = to.toLowerCase();
    if(container){
        
        
        if(to === "left")
        container.style.marginLeft = "-40vw";
        else if(to === "right")
        container.style.marginRight = "-40vw";
        
        

    }
}

export function getCurrentCharacter(): HTMLElement | null{
    const character: HTMLElement | null = document.querySelector(".character:not(.hidden-right):not(.hidden-left)")
    return character;
}

export function getNextCharacter(): HTMLElement | null {
    const character: HTMLElement | null = getCurrentCharacter();
    if(character){
        const currentCharacterIndex: number = Object.keys(config.characters).indexOf(character.textContent!.trim(), 0);
        return document.getElementById(Object.keys(config.characters)[currentCharacterIndex+1]); 
    }
    return null;
}

export function getPreviousCharacter(): HTMLElement | null {
    const character: HTMLElement | null = getCurrentCharacter();
    if(character){
        const currentCharacterIndex: number = Object.keys(config.characters).indexOf(character.textContent!.trim(), 0);
        return document.getElementById(Object.keys(config.characters)[currentCharacterIndex-1]); 
    }
    return null;
}

function isLastCharacter(): boolean {
    const current: HTMLElement | null = getCurrentCharacter();
    if(current){
        return Object.keys(config.characters).length === Object.keys(config.characters).indexOf(current.textContent!.trim()) + 2;
    }
    return true;
}

function isFirstCharacter(): boolean {
    const current: HTMLElement | null = getCurrentCharacter();
    if(current){
        return Object.keys(config.characters).indexOf(current.textContent!.trim()) === 0;
    }
    return true;
}




// Change the character when clicking the right button
export function changeCharacterRight(): HTMLElement | null {
    const currentCharacter: HTMLElement | null = getCurrentCharacter();
    if(currentCharacter && Object.keys(config.characters).includes(currentCharacter.textContent!.trim())){
        // Character registered in the config file
        const nextCharacter: HTMLElement | null = getNextCharacter();

        const leftArrow: HTMLElement | null = document.getElementById('left-arrow');
        if(leftArrow){
            leftArrow.style.opacity = "1";
            leftArrow.removeEventListener('click', leftArrowEventListener);
            leftArrow.addEventListener('click', leftArrowEventListener);
        }

        if(nextCharacter){
            hideCharacter(currentCharacter.textContent!.trim(), "left");
            nextCharacter?.classList.remove('hidden-right');            
            
        }
        if(isLastCharacter()){            
            const rightArrow: HTMLElement | null = document.getElementById('right-arrow');
            if(rightArrow){
                rightArrow.style.opacity = "0.5";
                rightArrow.removeEventListener('click', rightArrowEventListener);
            }
        }
        return nextCharacter;
    }
    return null;
}


// Change the character when clicking the left button
export function changeCharacterLeft(): HTMLElement | null {
    
    
    const currentCharacter: HTMLElement | null = getCurrentCharacter();
    if(currentCharacter && Object.keys(config.characters).includes(currentCharacter.textContent!.trim())){
        
        // Character registered in the config file
        const previousCharacter: HTMLElement | null = getPreviousCharacter();
        const rightArrow: HTMLElement | null = document.getElementById('right-arrow');
        if(currentCharacter && Object.keys(config.characters).indexOf(currentCharacter.textContent!.trim(), 0) + 1 === Object.keys(config.characters).length && rightArrow){
            console.log('arriba españa');
            
            rightArrow.style.opacity = "1";
            rightArrow.removeEventListener('click', rightArrowEventListener);
            rightArrow.addEventListener('click', rightArrowEventListener);
        }
        
        if(previousCharacter){
            hideCharacter(currentCharacter.textContent!.trim(), "right");
            previousCharacter?.classList.remove('hidden-left');            
            
        }
        if(isFirstCharacter()){
            console.log('lmao XD');
            
            const leftArrow: HTMLElement | null = document.getElementById('left-arrow');
            
            if(leftArrow){
                leftArrow.style.opacity = "0.5";
                leftArrow.removeEventListener('click', leftArrowEventListener);

                
            }
        }
        return previousCharacter;
    }
    return null;
}

export function isValidCharacterSelected(): boolean{
    const current: HTMLElement | null = document.querySelector(".character:not(.hidden-right):not(.hidden-left)");
    if(current){
        return Object.keys(config.characters).includes(current.textContent!.trim());
    }

    return false;
}

export function nextCharacterToLeft(){

}

export function nextCharacterToRight(){

}