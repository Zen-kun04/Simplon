import { getCurrentCharacter, getCharacterTask } from "./CharacterContainers";
import { incrementButton, onCommandTypeEvent, onKeyPressEvent } from "./Events";
import { DeathScreen } from "./DeathScreen";
import config from '../../config.json';

interface ProgressBarLevel {
    progressbar: HTMLElement,
    count: number
}

let points: number = 0;
export let currentCharacter: HTMLElement;

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

export function getCharacterChatTask(id: string): string {
    return Object.keys(config.characters[id].chat)[0];
}

function setupProgressBars(currentCharacter: HTMLElement){
    const all_progressbars: ProgressBar[] = [
        {
            id: "task",
            image: `./images/items/${getCharacterTask(currentCharacter.id)}.png`,
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
        
        document.getElementsByTagName('main')[0].appendChild(progress_container);
    })
    const points_counter = setInterval(() => {
        points++;
        incrementPointsPage();
    }, 5000);
    
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

export function predict(message: string): string[] {
    const without_slash: string = message.substring(1);
    const global_commands: string[] = Object.keys(config.normal_character.chat);
    const character_commands: string[] = Object.keys(config.characters[currentCharacter.id].chat)
    const commands_found: string[] = [];
    global_commands.forEach((cmd) => {
        if(cmd.toLowerCase().startsWith(without_slash.toLowerCase())){
            commands_found.push(cmd);
        }
    })

    character_commands.forEach((cmd) => {
        if(cmd.toLowerCase().startsWith(without_slash.toLowerCase())){
            commands_found.push(cmd);
        }
    })

    return commands_found;
}

export function addChatPrediction(message: string){
    const chat_predict = document.querySelector("#chat-predict") as HTMLElement;
    const chat_div = document.querySelector("#chat-div") as HTMLElement;
    const p: HTMLElement = document.createElement("p");
    p.textContent = message;
    chat_predict.insertBefore(p, chat_predict.firstChild);
    const input = document.querySelector("#chat-input") as HTMLElement;
    chat_div.insertBefore(chat_predict, input);
    const found = predict(`/${message}`);
    console.log(found);
    
    const predict_styles = getComputedStyle(chat_predict);
    chat_predict.style.height = `${parseInt(predict_styles.height.replace('px', '')) + 20}px`;
}

export function resetChatPrediction(){
    const chat_predict = document.querySelector("#chat-predict") as HTMLElement;
    chat_predict.childNodes.forEach((node) => {
        node.remove();
    })
    chat_predict.style.height = `0px`;
}

export function addChatLog(message: string) {
    const p: HTMLElement = document.createElement("p");
    p.textContent = message;
  
    const chat_div = document.querySelector("#chat-div") as HTMLElement;
    // const chat_input = document.querySelector("#chat-input") as HTMLElement;
    const chat_predict = document.querySelector("#chat-predict") as HTMLElement;
    const maxLogs = 6;
    const logs = chat_div.querySelectorAll("p");
    if (logs.length >= maxLogs) {
      chat_div.removeChild(logs[0]);
    }
  
    chat_div.insertBefore(p, chat_predict);
  }

export function showChat(){
    const chat_div: HTMLElement = document.createElement("div");
    const chat_input = document.createElement("input") as HTMLInputElement;
    const chat_predict: HTMLElement = document.createElement("div");

    chat_div.id = "chat-div";
    chat_input.id = "chat-input";
    chat_predict.id = "chat-predict";

    chat_input.addEventListener('keypress', onKeyPressEvent);
    chat_input.addEventListener('input', onCommandTypeEvent);
    
    chat_div.appendChild(chat_predict);
    chat_div.appendChild(chat_input);

    document.querySelector("main")?.appendChild(chat_div);
}

function setupPointsCounter(){
    const main = document.querySelector("main") as HTMLElement;
    const p: HTMLElement = document.createElement("p");
    p.id = "points";
    p.textContent = "0 points";
    main.insertBefore(p, main.firstChild);
}

function incrementPointsPage(){
    const p = document.querySelector("main #points") as HTMLElement;    
    p.textContent = `${points} points`;
}

export async function showPlayingScreen(username: string){
    currentCharacter = getCurrentCharacter() as HTMLElement;
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
        setupPointsCounter();
        appearCharacter(username, currentCharacter);
        setupProgressBars(currentCharacter);
        showHotBar();
        showChat();
    }
}