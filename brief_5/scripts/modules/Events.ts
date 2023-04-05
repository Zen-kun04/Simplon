import { hideCharacter, changeCharacterRight,
    changeCharacterLeft, getCurrentCharacter, isValidCharacterSelected, hasValidUsername, getUsername } from "./CharacterContainers";
import { showPlayingScreen } from "./PlayingScreen";
import { progressLost, progressList, max } from "./PlayingScreen";

export function rightArrowEventListener(){
    changeCharacterRight();
}




export function rightArrowEvent(){
    
    const rightArrow: HTMLElement | null = document.getElementById("right-arrow");
    if(rightArrow)    
    rightArrow.addEventListener('click', rightArrowEventListener);
}

export function leftArrowEventListener(){
    changeCharacterLeft()
}

export function leftArrowEvent(){
    const leftArrow: HTMLElement | null = document.getElementById("left-arrow");
    if(leftArrow)    
    leftArrow.addEventListener('click', leftArrowEventListener);
}

export function buttonEvent(){
    console.log(1);
    
    const button: HTMLElement | null = document.getElementById('button');
    if(button){
        const clickSound: HTMLAudioElement | null = document.getElementById("click") as HTMLAudioElement;
        button.addEventListener('click', () => {
            clickSound.play();
            setTimeout(() => {
                if(isValidCharacterSelected() && hasValidUsername()){
                    showPlayingScreen(getUsername());
                }else{
                    alert("Inshala ajoute ton pseudo 💀")
                }
                
            }, 500)
            
            
        });
    }   
}

// export function incrementButton(event: Event){
//     const target = event.target as HTMLElement;
//     if(target)
//     if(target.classList.contains('a') || target.classList.contains('b') || target.classList.contains('c')){
//         if(progressList.length > progressLost.length && progressLost.includes(document.querySelector(`.progressbar-inside.${target.classList[1]}`)!)){
            
            
//             progressLost.splice(progressLost.indexOf(document.querySelector(`.progressbar-inside.${target.classList[1]}`)!, 0), 1);
//         }
//         if(target.classList.contains('a')){
            
            
//             const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.a');
//             if(progressbar){
//                 const fallSound: HTMLAudioElement | null = document.getElementById("fall") as HTMLAudioElement;
//                 fallSound.volume = 0.2;
//                 progressList.forEach((element) => {
//                     if(element.progressbar.classList.contains('a') && element.count + (max * 0.1) <= max){
//                         fallSound.currentTime = 0.5;
//                         fallSound.play();
//                         element.count += (max * 0.1);
//                         element.progressbar.style.width = `${element.count}vw`;
//                     }
                    
//                 })
//             }
//         }else if(target.classList.contains('b')){
//             const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.b');
//             if(progressbar){
//                 const levelSound: HTMLAudioElement | null = document.getElementById("levelup") as HTMLAudioElement;
//                 levelSound.volume = 0.2;
//                 progressList.forEach((element) => {
//                     if(element.progressbar.classList.contains('b') && element.count + (max * 0.1) <= max){
//                         element.count += (max * 0.1);
//                         levelSound.play();
//                         element.progressbar.style.width = `${element.count}vw`;
//                     }
                    
//                 })
//             }
//         }else if(target.classList.contains('c')){
//             const progressbar: HTMLElement | null = document.querySelector('.progressbar-inside.c');
//             if(progressbar){
//                 const eatSound: HTMLAudioElement | null = document.getElementById("eat") as HTMLAudioElement;
//                 eatSound.volume = 0.2;
//                 progressList.forEach((element) => {
//                     if(element.progressbar.classList.contains('c') && element.count + (max * 0.1) <= max){
//                         element.count += (max * 0.1);
//                         eatSound.play();
//                         element.progressbar.style.width = `${element.count}vw`;
//                     }
                    
//                 })
//             }
//         }
//     }
// }

export function incrementButton(event: Event) {
    console.log('si');
    
    const target = event.target as HTMLElement;
    const progress = document.querySelector(".progressbar#" + target.id) as HTMLElement;
    const current_percentage: number = parseInt(progress.getAttribute("value")!);
    
    if(current_percentage < 100)
    progress.setAttribute("value", `${current_percentage + 10}`);
    
}