import { getCurrentCharacter } from "./CharacterContainers";
import { incrementButton } from "./Events";
import { DeathScreen } from "./DeathScreen";

interface ProgressBarLevel {
    progressbar: HTMLElement,
    count: number
}

const clickHandler = incrementButton;

export const progressList: ProgressBarLevel[] = [];
export let progressLost: HTMLElement[] = [];
export let max: number = 23;

let playedDeathScreen: boolean = false; // need this to execute the DeathScreen() function only once in the for loop

function setupProgressBars(){
    const mainDiv: HTMLElement = document.createElement('div');
    mainDiv.id = "main-progressbar";
    const letters: string[] = [
        'a',
        'b',
        'c'
    ]
    const items: string[] = [
        "./images/items/pickaxe.png",
        "./images/items/life.png",
        "./images/items/hunger.png",
    ]
    for(let i = 0; i < letters.length; i++){
        const prog: HTMLElement = document.createElement('div');
        const progImgIncrement: HTMLImageElement = document.createElement('img');
        const progImgItem: HTMLImageElement = document.createElement('img');
        const progBorders: HTMLElement = document.createElement('div');
        const progInternal: HTMLElement = document.createElement('div');
        prog.classList.add("progressbar");
        prog.id = letters[i];

        progImgIncrement.src = "./images/add.png";
        progImgIncrement.classList.add("progress-increment");
        progImgIncrement.classList.add(letters[i]);
        progImgIncrement.addEventListener('click', clickHandler);
        
        progImgItem.src = items[i];
        progImgItem.classList.add("progress-item");

        progBorders.classList.add("progressbar-outside");
        progInternal.classList.add("progressbar-inside");
        progInternal.classList.add(letters[i]);
        
        
        
        

        if(i < items.length - 1){
            prog.appendChild(progImgIncrement);
            prog.appendChild(progImgItem);
            progBorders.appendChild(progInternal);
            prog.appendChild(progBorders);
        }else{
            progBorders.appendChild(progInternal);
            prog.appendChild(progBorders);
            prog.appendChild(progImgItem);
            prog.appendChild(progImgIncrement);
        }

        mainDiv.appendChild(prog);
        
    }
    document.getElementsByTagName('main')[0].appendChild(mainDiv);

    // let count: number = 23;
    
    let half: number = max / 2;
    let low: number = max * 0.15;
    const progress: NodeListOf<HTMLElement> = document.querySelectorAll('.progressbar-inside')!;
    
    for(let i = 0; i < progress.length; i++){
        progressList.push(
            {
                progressbar: progress[i],
                count: max
            }
        )
    }
    
    setTimeout(() => {
        for(let prog of progressList){
            const inter = setInterval(() => {
                if(prog.count <= 0){
                    if(!progressLost.includes(prog.progressbar))
                    progressLost.push(prog.progressbar);

                    if(progressLost.length === progress.length){
                        prog.progressbar.style.width = `0vw`;
                        document.querySelector(`.progress-increment.${prog.progressbar.classList[1]}`)
                        ?.removeEventListener('click', clickHandler);
                        
                        if(!playedDeathScreen){
                            // DeathScreen();
                            playedDeathScreen = true;
                        }
                        
                        clearInterval(inter);
                    }

                    
                }else{
                    if(prog.count >= half){
                        prog.count -= (max * 0.1);
                        prog.progressbar.style.backgroundColor = "greenyellow";
                    }
                    else if(prog.count >= low){
                        prog.count -= (max * 0.06);
                        prog.progressbar.style.backgroundColor = "orange";
                    }
                    else if(prog.count > 0){
                        prog.count -= (max * 0.02);
                        prog.progressbar.style.backgroundColor = "red";
                    }
                    prog.progressbar.style.width = `${prog.count}vw`;
                }
            }, 1000);
        }
        
        
    }, 100)
    
    
    

}


function appearCharacter(currentCharacter: HTMLElement) {
    const divCharacter: HTMLElement = document.createElement('div');
    const characterNameParagraph: HTMLElement = document.createElement('p');
    const characterSkinImg: HTMLImageElement = document.createElement('img');

    // Set classes, ids, etc to new elements
    divCharacter.id = 'character';
    characterNameParagraph.textContent = currentCharacter.textContent!.trim();
    characterSkinImg.src = './images/skins/steve.png'
    // Assign elements into each other
    divCharacter.appendChild(characterNameParagraph);
    divCharacter.appendChild(characterSkinImg);
    document.getElementsByTagName('main')[0].appendChild(divCharacter);
}

function showHotBar(): HTMLElement{
    const divContainer: HTMLElement = document.createElement('div');
    divContainer.id = "hotbar-container";
    const divHotBar: HTMLElement = document.createElement('div');
    divHotBar.id = "hotbar";
    for(let i = 0; i < 9; i++){
        const slot: HTMLElement = document.createElement('div');
        slot.id = "slot";
        divHotBar.appendChild(slot);
    }
    divContainer.appendChild(divHotBar);
    document.getElementsByTagName('main')[0].appendChild(divContainer);
    return divContainer;
}

export async function showPlayingScreen(){
    const currentCharacter: HTMLElement | null = getCurrentCharacter();
    if(currentCharacter){
        const playingDocument = await fetch("./templates/play.html");
        const html = await playingDocument.text();
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(html, 'text/html');
        document.implementation.createHTMLDocument('oldDoc');
        const oldHtml = document.querySelector('html');
        if (oldHtml) {
            oldHtml.replaceWith(newDoc.documentElement);
        }
        appearCharacter(currentCharacter);
        setupProgressBars();
        showHotBar();
    }
}