import { hideCharacter, changeCharacterRight,
    changeCharacterLeft, getCurrentCharacter, isValidCharacterSelected } from "./CharacterContainers";
import { showPlayingScreen } from "./PlayingScreen";

export function rightArrowEventListener(){
    changeCharacterRight();
    console.log("derecha");
}

export function rightArrowEvent(){
    const rightArrow: HTMLElement | null = document.getElementById("right-arrow");
    if(rightArrow)    
    rightArrow.addEventListener('click', rightArrowEventListener);
}

export function leftArrowEventListener(){
    changeCharacterLeft()
    console.log("izquierda");
}

export function leftArrowEvent(){
    const leftArrow: HTMLElement | null = document.getElementById("left-arrow");
    if(leftArrow)    
    leftArrow.addEventListener('click', leftArrowEventListener);
}

export function buttonEvent(){
    const button: HTMLElement | null = document.getElementById('start-button');
    if(button){
        const clickSound: HTMLAudioElement | null = document.getElementById("click") as HTMLAudioElement;
        button.addEventListener('click', () => {
            clickSound.play();
            setTimeout(() => {
                if(isValidCharacterSelected()){
                    console.log(`Elegiste el personaje: ${getCurrentCharacter()!.textContent!.trim()}`);
                    showPlayingScreen();
                }
                
            }, 500)
            
            
        });
    }
    
}