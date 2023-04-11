

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
    const deathMessage = document.querySelector('p#death-message') as HTMLElement;
    deathMessage.textContent = "Go to the f#cking mine 💀";
    const scoreMessage = document.querySelector('p#score') as HTMLElement;
    scoreMessage.textContent = `Score: ${points}`;
    const button = document.querySelector("button#restart") as HTMLElement;
    button.addEventListener('click', () => {
        location.reload();
    })
    
    
}