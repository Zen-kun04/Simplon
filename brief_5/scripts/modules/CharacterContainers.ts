import config from '../../config.json'

interface Character {
    skin_location: string;
    low_speed: {
      [key: string]: number;
    };
    chat: {
      [key: string]: string;
    };
  }
  
  interface Characters {
    steve: Character;
    alex: Character;
  }

export function getCharacter(id: string): HTMLElement | null{
    const container: HTMLElement | null = document.querySelector(`.character #${id}`);
    return container;
}

export function createCharacter(id: string, visible: boolean = true): HTMLElement {
    const charactersDiv: HTMLElement | null = document.getElementById("characters");
    const characterBody: HTMLElement = document.createElement('div');
    const characterParagraph: HTMLElement = document.createElement('p');
    const characterSkin: HTMLImageElement = document.createElement('img');
    characterBody.id = id.trim().toLowerCase();
    characterSkin.src = `${id.trim().toLowerCase()}.png`;
    characterSkin.alt = `Minecraft skin of ${id}`;
    characterParagraph.textContent = id;
    characterBody.classList.add('character');
    if(!visible){
        characterBody.classList.add('hidden-right');
    }
    characterBody.appendChild(characterParagraph);
    characterBody.appendChild(characterSkin);
    charactersDiv?.appendChild(characterBody);
    return characterBody;
}

export function loadAllCharacters(): void {
    for(let characterName in config.characters){
        if(Object.keys(config.characters).indexOf(characterName, 0) === 0){
            createCharacter(characterName);
        }else{
            createCharacter(characterName, false);
        }
        
    }
}

export function hideCharacter(id: string, to: string): void {
    const container: HTMLElement | null = document.querySelector(`#characters #${id}`);
    to = to.toLowerCase();
    if(container){
        if(to === "left")
        // container.style.marginLeft = "-220px";
        setTimeout(() => {
            container.classList.add('hidden-left')
        }, 100);
        else if(to === "right")
        // container.style.marginRight = "-220px";
        setTimeout(() => {
            container.classList.add('hidden-right')
        }, 100);
        // setTimeout(() => {
        //     container.classList.add('hidden');
        // }, 800);
        

    }
}

export function showCharacter(id: string, to: string): void {
    const container: HTMLElement | null = document.querySelector(`#characters #${id}`);
    console.log(container);
    
    to = to.toLowerCase();
    if(container){
        
        
        if(to === "left")
        container.style.marginLeft = "-40vw";
        else if(to === "right")
        container.style.marginRight = "-40vw";
        
        

    }
}

export function getCurrentCharacter(): HTMLElement | null{
    const character: HTMLElement | null = document.querySelector(".character:not(.hidden-right):not(.hidden-left)")
    return character;
}











export function getNextCharacter(): HTMLElement | null {
    
    
    const currentCharacter: HTMLElement | null = getCurrentCharacter();
    if(currentCharacter){
        const allCharacters: Characters = config.characters;
        const currentCharacterName: string | null = currentCharacter.textContent;
        if(
            currentCharacterName && 
            currentCharacterName?.trim() !== "" && 
            Object.keys(allCharacters).includes(currentCharacterName.trim().toLowerCase())
            ){
            const keys = Object.keys(allCharacters)
            const currentCharacterIndex: number = keys.indexOf(currentCharacterName.trim().toLowerCase(), 0);
            if(currentCharacterIndex + 1 === keys.length){
                // Current character is the last one
                console.log(`El personaje actual es ${keys[currentCharacterIndex]} y el proximo sera ${keys[0]}`);

            }else{
                console.log(`El personaje actual es ${keys[currentCharacterIndex]} y el proximo sera ${keys[currentCharacterIndex + 1]}`);
                hideCharacter(currentCharacterName.trim().toLowerCase(), "left");
                const newID: string = keys[currentCharacterIndex + 1];
                const newCharacter: HTMLElement | null = document.getElementById(newID);
                console.log(newCharacter);
                if(newCharacter && newCharacter.textContent && newCharacter.textContent.trim() !== ""){
                    setTimeout(() => {
                        // newCharacter.style.marginLeft = "44vw";
                        newCharacter.classList.remove('hidden-right');
                    }, 500);
                    
                    // setTimeout(() => {
                        
                    // }, 300)
                    
                }
                // showCharacter(newCharacter.textContent.trim().toLowerCase(), "left");
                
                // setTimeout(() => {
                //     newCharacter?.classList.remove('hidden');
                // }, 300)
                

            }
            
            
        }else
        location.reload();

        
    }
    return null;
}






export function nextCharacterToLeft(){

}

export function nextCharacterToRight(){

}