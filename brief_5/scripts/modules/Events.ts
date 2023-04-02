import { hideCharacter, changeCharacterRight,
    changeCharacterLeft, getCurrentCharacter, isValidCharacterSelected } from "./CharacterContainers";
import { showPlayingScreen } from "./PlayingScreen";
import { progressLost, progressList, max } from "./PlayingScreen";

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

export function incrementButton(event: Event){
    const target = event.target as HTMLElement;
    console.log(target);
    if(target)
    if(target.classList.contains('a') || target.classList.contains('b') || target.classList.contains('c')){
        if(progressList.length > progressLost.length && progressLost.includes(document.querySelector(`.progressbar-inside.${target.classList[1]}`)!)){
            
            
            progressLost.splice(progressLost.indexOf(document.querySelector(`.progressbar-inside.${target.classList[1]}`)!, 0), 1);
        }
        if(target.classList.contains('a')){
            
            const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.a');
            if(progressbar){
                
                progressList.forEach((element) => {
                    if(element.progressbar.classList.contains('a') && element.count + (max * 0.1) <= max){
                        element.count += (max * 0.1);
                        element.progressbar.style.width = `${element.count}vw`;
                    }
                    
                })
            }
        }else if(target.classList.contains('b')){
            const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.b');
            if(progressbar){
                
                progressList.forEach((element) => {
                    if(element.progressbar.classList.contains('b') && element.count + (max * 0.1) <= max){
                        element.count += (max * 0.1);
                        element.progressbar.style.width = `${element.count}vw`;
                    }
                    
                })
            }
        }else if(target.classList.contains('c')){
            const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.c');
            if(progressbar){
                
                progressList.forEach((element) => {
                    if(element.progressbar.classList.contains('c') && element.count + (max * 0.1) <= max){
                        element.count += (max * 0.1);
                        element.progressbar.style.width = `${element.count}vw`;
                    }
                    
                })
            }
        }
    }
    
    
    
}