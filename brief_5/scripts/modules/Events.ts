import { hideCharacter, getNextCharacter } from "./CharacterContainers";
export function rightArrowEvent(){
    const rightArrow: HTMLElement | null = document.getElementById("right-arrow");
    if(rightArrow)    
    rightArrow.addEventListener('click', () => {
        // hideCharacter('steve', 'left');
        getNextCharacter();
        console.log("derecha");
        
    });
}

export function leftArrowEvent(){
    const leftArrow: HTMLElement | null = document.getElementById("left-arrow");
    if(leftArrow)    
    leftArrow.addEventListener('click', () => {
        console.log("izquierda");
    });
}

export function buttonEvent(){
    const button: HTMLElement | null = document.getElementById('start-button');
    if(button){
        const clickSound: HTMLAudioElement | null = document.getElementById("click") as HTMLAudioElement;
        button.addEventListener('click', () => {
            clickSound.play();
        });
    }
    
}