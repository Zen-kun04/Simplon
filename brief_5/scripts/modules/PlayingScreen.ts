import { getCurrentCharacter } from "./CharacterContainers";

function appearCharacter(currentCharacter: HTMLElement) {
    const divCharacter: HTMLElement = document.createElement('div');
    const characterNameParagraph: HTMLElement = document.createElement('p');
    const characterSkinImg: HTMLImageElement = document.createElement('img');

    // Set classes, ids, etc to new elements
    divCharacter.id = 'character';
    characterNameParagraph.textContent = currentCharacter.textContent!.trim();
    characterSkinImg.src = './steve.png'
    // Assign elements into each other
    divCharacter.appendChild(characterNameParagraph);
    divCharacter.appendChild(characterSkinImg);
    document.getElementsByTagName('main')[0].appendChild(divCharacter);
}

function showHotBar(){
    
}

export async function showPlayingScreen(){
    const currentCharacter: HTMLElement | null = getCurrentCharacter();
    if(currentCharacter){
        const h1: HTMLElement = document.createElement('h1');
        h1.textContent = `You're now playing "${currentCharacter.textContent?.trim()}"`
        const playingDocument = await fetch("./world.html");
        const html = await playingDocument.text();
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(html, 'text/html');
        document.implementation.createHTMLDocument('oldDoc');
        const oldHtml = document.querySelector('html');
        if (oldHtml) {
            oldHtml.replaceWith(newDoc.documentElement);
        }
        document.querySelector('main')?.appendChild(h1);
        appearCharacter(currentCharacter);
    }
}