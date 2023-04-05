

export async function DeathScreen(points: number){
    const playingDocument = await fetch("./templates/death.html");
    const html = await playingDocument.text();
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, 'text/html');
    document.implementation.createHTMLDocument('oldDoc');
    const oldHtml = document.querySelector('html');
    if (oldHtml) {
        oldHtml.replaceWith(newDoc.documentElement);
    }
    const oofSound = document.getElementById("oof")! as HTMLAudioElement;
    oofSound.volume = 0.2;
    oofSound.play();
    const deathMessage: HTMLElement = document.createElement('p');
    deathMessage.textContent = "Go to the f#cking mine 💀";
    const scoreMessage: HTMLElement = document.createElement('p');
    scoreMessage.textContent = `Score: ${points}`;

    const body: HTMLElement = document.querySelector('body')!;
    body.appendChild(deathMessage);
    body.appendChild(scoreMessage);
    
}