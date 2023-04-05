import { getCurrentCharacter } from "./CharacterContainers";
import { incrementButton } from "./Events";
import { DeathScreen } from "./DeathScreen";

interface ProgressBarLevel {
    progressbar: HTMLElement,
    count: number
}

const clickHandler = incrementButton;
let points: number = 0;

export const progressList: ProgressBarLevel[] = [];
export let progressLost: HTMLElement[] = [];
export let max: number = 23;

let playedDeathScreen: boolean = false; // need this to execute the DeathScreen() function only once in the for loop

interface ProgressBar {
    id: string,
    image: string,
    sound: string
}

function getProgressbar(id: string): HTMLElement {
    return document.querySelector(`.progressbar#${id}`)!
}

function setupProgressBars(){
    const all_progressbars: ProgressBar[] = [
        {
            id: "task",
            image: "./images/items/pickaxe.png",
            sound: ""
        },
        {
            id: "life",
            image: "./images/items/life.png",
            sound: ""
        },
        {
            id: "hunger",
            image: "./images/items/hunger.png",
            sound: ""
        }
    ]
    const progress_container: HTMLElement = document.createElement('div');
    progress_container.id = "progress-container";
    
    all_progressbars.forEach((prog: ProgressBar) => {
        const single_progress_container: HTMLElement = document.createElement("div");
        const progress_tag: HTMLElement = document.createElement("progress");
        const progress_add_image: HTMLImageElement = document.createElement("img");
        const progress_illustrate_image: HTMLImageElement = document.createElement("img");

        single_progress_container.id = "single-progress-container";

        progress_add_image.src = "./images/add.png";
        progress_add_image.id = prog.id;
        progress_add_image.addEventListener('click', incrementButton);
        progress_illustrate_image.src = prog.image;
        
        progress_tag.classList.add("progressbar");
        progress_tag.id = prog.id;
        progress_tag.setAttribute("max", "100");
        progress_tag.setAttribute("value", "100");
        single_progress_container.appendChild(progress_add_image);
        single_progress_container.appendChild(progress_tag);
        single_progress_container.appendChild(progress_illustrate_image);

        progress_container.appendChild(single_progress_container);
        const inter = setInterval(() => {
            const current_percentage: number = parseInt(progress_tag.getAttribute("value")!);
            
            if (getProgressbar("task") && parseInt(getProgressbar("task")!.getAttribute("value")!) <= 0 &&
            getProgressbar("life") && parseInt(getProgressbar("life")!.getAttribute("value")!) <= 0 &&
            getProgressbar("hunger") && parseInt(getProgressbar("hunger")!.getAttribute("value")!) <= 0){
                clearInterval(points_counter);
                clearInterval(inter);
                DeathScreen(points);
            }else{
                if(current_percentage >= 50 && current_percentage <= 100){
                    progress_tag.setAttribute("value", `${current_percentage - 10}`)
                }else if(current_percentage >= 15 && current_percentage <= 50){
                    progress_tag.setAttribute("value", `${current_percentage - 6}`)
                }else{
                    progress_tag.setAttribute("value", `${current_percentage - 2}`)
                }
            }
        }, 1000)
        const points_counter = setInterval(() => {
            points++;
        }, 5000);
        document.getElementsByTagName('main')[0].appendChild(progress_container);
    })
    
}

function appearCharacter(username: string, currentCharacter: HTMLElement) {
    const divCharacter: HTMLElement = document.createElement('div');
    const characterNameParagraph: HTMLElement = document.createElement('p');
    const characterSkinImg: HTMLImageElement = document.createElement('img');
    
    // Set classes, ids, etc to new elements
    divCharacter.id = 'character';
    characterNameParagraph.textContent = username;
    // characterNameParagraph.classList.add("character");
    characterSkinImg.src = `./images/skins/${currentCharacter.id}.png`
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

export async function showPlayingScreen(username: string){
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
        appearCharacter(username, currentCharacter);
        setupProgressBars();
        showHotBar();
    }
}