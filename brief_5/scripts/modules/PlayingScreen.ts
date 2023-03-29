import { getCurrentCharacter } from "./CharacterContainers";


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
    }
}