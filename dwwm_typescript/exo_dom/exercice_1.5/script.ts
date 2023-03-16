// Exercice 1

// Lorsque l'utilisateur clique sur le bouton vous ajoutez la class "green" au carré


// Exercice 2

// Lorsque l'utilisateur clique sur le bouton :
// - Si le carré est couleur coral, vous enlevez la class "coral" et ajoutez la class "green"
// - Si le carré est couleur green, vous enlevez la class "green" et ajoutez la class "coral"


// Exercice 3

// Lorsque l'utilisateur clique sur le bouton vous récuperez la valeur de l'input
// Selon la réponse l'utilisateur vous remplacez le text "Votre réponse est ..." du paragraphe par "Bonne" ou "Mauvaise"


// Exercice 4

// Lorsque l'utilisateur clique sur un carré coral celui-ci devient vert et les autres coral
// Si l'utilisateur clique sur un carré vert, il ne se passe rien


// Exercie 5

// Lorsque l'utilisateur selectionne une liste, replacez la liste bidon par les membres de l'équipe sélectionnée


function exo_1(){
    const button: HTMLElement | null = document.getElementById("boutton_exercice_1");
    const square: HTMLElement | null = document.querySelector(".square_empty");
    if(button){
        button.addEventListener('click', () => {                        
            square?.classList.add("green");
        });
    }
}

exo_1();

function exo_2(){
    const button: HTMLElement | null = document.getElementById("boutton_exercice_2");
    const square: HTMLElement | null = document.getElementById("square_2");
    if(button){
        let green = false;
        button.addEventListener('click', () => {
            
            if(green){
                square?.classList.remove("green")
                square?.classList.add("coral")
                green = false;
            }else {
                square?.classList.remove("coral")
                square?.classList.add("green")
                green = true;
            }
        })
    }
}

exo_2();

function exo_3(){
    const calcul: HTMLElement | null = document.getElementById("calcul");
    if((calcul) && calcul.textContent?.trim() != ""){
        const vraie_reponse: number = eval(calcul.textContent!.split('=', 1)[0].trim())
        const inputText: HTMLInputElement | null = document.querySelector(".input_exo3");
        let reponse: number = 0;
        
        const button: HTMLElement | null = document.getElementById("boutton_exo_3");
        const paragraph: HTMLElement | null = document.getElementById("p_3");
        const message = "Votre réponse est ";
        button?.addEventListener('click', () => {
            if(inputText){
                reponse = Number(inputText.value)
            }
            
            if(reponse === vraie_reponse){
                if(paragraph){                    
                    paragraph.textContent = message + "bonne";
                }
            }else {
                if(paragraph){
                    paragraph.textContent = message + "mauvaise";
                }
            }
        })
    }
    
}

exo_3()


function exo_4(){
    const carres: HTMLCollectionOf<Element> = document.getElementsByClassName("exo_4");
    for(let carre of carres){
        carre.addEventListener('click', () => {
            if(carre.classList.contains('coral')){
                for(let carre2 of carres){
                    if(carre2.classList.contains('green')){
                        carre2.classList.remove('green');
                        carre2.classList.add('coral');
                    }
                }
                carre.classList.remove('coral');
                carre.classList.add('green');
            }
        })
        
    }
}

exo_4();


const equipeA: string[] = ['Martin', 'Lucie', 'Jasmine']
const equipeB: string[] = ['Lisa', 'Mathieu', 'Anthony']
const equipeC: string[] = ['Anissa', 'Laïla', 'Jean-Paul']

function exo_5(){
    const teamButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("buttonTeam");
    let ul: HTMLElement | null = document.querySelector("#liste");
    const squareDiv: Element | null = document.querySelector("#liste-div");
    for(let button of teamButtons){
        if(button){
            button.addEventListener('click', () => {
                if(ul){
                    ul.remove();
                }
                ul = document.createElement("ul");
                if(button.id === "TeamA"){                                        
                    
                    for(let name of equipeA){
                        const list: HTMLElement | null = document.createElement("li");
                        list.textContent = name;
                        ul.appendChild(list);
                    }
                    
                }else if(button.id === "TeamB"){
                    for(let name of equipeB){
                        const list: HTMLElement | null = document.createElement("li");
                        list.textContent = name;
                        ul.appendChild(list);
                    }
                }else{
                    for(let name of equipeC){
                        const list: HTMLElement | null = document.createElement("li");
                        list.textContent = name;
                        ul.appendChild(list);
                    }
                }
                squareDiv?.appendChild(ul);
            })
        }
    }
}

exo_5();