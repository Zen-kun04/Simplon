// Exercice 1

// Récupérez tous les élements du DOM contenant une lettre de l'alphabet
// Vous écouterez le click du l'utilisateur sur chaque element ( boucle ? )
// Lorsque l'utilisateur click sur une lettre faite en sorte que la lettre selectionnée ai un background gris
// Si l'utilisateur re-click sur une touche déjà selectionnée remettez lui un background blanc

// Exercice 2.1

// Vous écouterez le clavier de l'utilisateur
// Si il appuie sur une touche avec une voyelle, affichez "voyelle" dans la console
// Si il appuie sur une touche avec une consonne, affichez "consonne" dans la console
// Si il appuie sur une touch qui n'est ni une voyelle ni une consonne, affichez "Pas dans l'alphabet" dans la console

// Exercice 2.2

// Lorsque l'utilisateur appuie sur une touche qui est une lettre de l'alphabet, 
// appliquez la même logique que lorsqu'il click sur une lettre de l'alphabet ( background rouge ... )

const voyelles = ["a", "e", "i", "o", "u"]
const consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
let lettres_activees: HTMLElement[] = [];
const lettres: HTMLCollectionOf<Element> = document.getElementsByClassName("letter");
const lettresArray: Element[] = Array.from(lettres);


function exo_1(){
    for(let i = 0; i < lettresArray.length; i++){
        let lettre = lettresArray[i] as HTMLElement;
        lettre.addEventListener('click', () => {
            if(lettres_activees.includes(lettre)){
                lettre.style.backgroundColor = "unset";
                lettres_activees.splice(lettres_activees.indexOf(lettre), 1);
            }else{
                lettre.style.backgroundColor = "gray";
                lettres_activees.push(lettre);
            }
            
            
        })
    }

}

// exo_1();


function exo_2(){
    
    document.addEventListener('keypress', (key) => {
        let key_value = key.key;
        
        if(voyelles.includes(key_value.toLowerCase())){
            console.log("voyelle");
            
            for(let i = 0; i < lettresArray.length; i++){
                let lettre = lettresArray[i] as HTMLElement;
                if (lettre.textContent?.toLowerCase() === key_value.toLowerCase()){
                    if(lettres_activees.includes(lettre)){
                        lettre.style.backgroundColor = "unset";
                        lettres_activees.splice(lettres_activees.indexOf(lettre), 1);
                    }else{
                        lettre.style.backgroundColor = "gray";
                        lettres_activees.push(lettre);
                    }
                }
            }
            
        }else if(consonnes.includes(key_value.toLowerCase())){
            console.log("consonne");
            
            for(let i = 0; i < lettresArray.length; i++){
                let lettre = lettresArray[i] as HTMLElement;
                if (lettre.textContent?.toLowerCase() === key_value.toLowerCase()){
                    if(lettres_activees.includes(lettre)){
                        lettre.style.backgroundColor = "unset";
                        lettres_activees.splice(lettres_activees.indexOf(lettre), 1);
                    }else{
                        lettre.style.backgroundColor = "gray";
                        lettres_activees.push(lettre);
                    }
                }
                
            }
        }else {
            console.log("Pas dans l'alphabet");
            
        }
    })
}

exo_2();