// Exercice 1

// Récupérer l'element du DOM contenant la phrase "Cible moi 🎯" à l'aide d'un getElementById
// Affichez l'element dans la console

// Exercice 2

// Récupérer les elements du DOM contenant la phrase "Cible moi 🎯" à l'aide d'une getElementsByClassName
// Affichez les elements dans la console

// Exercice 3

// Écouter le click de l'utilisateur sur le bouton "Hello !" à l'aide d'un eventListener
// À chaque click vous afficherez "Hey dude!" dans la console

// Exercice 4

// Écouter le click de l'utilisateur sur les boutons "+" et "-"
// À chaque click vous augmenterez / diminuerez une variable contenant un chiffre et l'afficherez dans la console

// Exercice 5.1

// Écouter le text saisi par l'utilisateur dans l'input
// À chaque modification vous afficherez la valeur de l'input dans la console

// Exercice 5.2

// Remplacer le paragraph contenant "Remplacer par la saisie de l'utilisateur" par la valeur de l'input en direct


// const exo1: HTMLElement | null = document.querySelector(".box");
// exo1?.getElementsByTagName('p')[0].addEventListener('click', () => {
//     console.log('oui :)');
    
// })

const exo_cible: HTMLCollectionOf<Element> | null = document.getElementsByClassName("box");
for(let classes of exo_cible){
    const cibles: HTMLCollectionOf<HTMLElement> = classes.getElementsByTagName('p');
    for(let cible of cibles){
        if(cible.innerText.startsWith("Cible moi"))
        cible.addEventListener('click', () => {
            console.log("Voilà");
        })   
    }
}


const exo_3: Element | null = document.getElementsByClassName("box")[2].getElementsByClassName("button")[0];
exo_3.addEventListener('click', () => {
    console.log("mdr");
    
})


let points = 0;
const exo_4_increment: Element | null = document.getElementsByClassName("incrementButton")[0];
const exo_4_decrement: Element | null = document.getElementsByClassName("decrementButton")[0];
exo_4_increment.addEventListener('click', () => {
    points++;
    console.log(points);
})

exo_4_decrement.addEventListener('click', () => {
    points--;
    console.log(points);
})



const exo_5: HTMLElement | null = document.getElementById("inputTextExo5");
let sentence = "";
exo_5?.addEventListener('keydown', (key) => {
    console.log(key.key);
    if(key.key == "Backspace"){
        sentence = sentence.substring(0, sentence.length-1);
    }else if(!["Control", "Escape", "AltGraph", "Shift"].includes(key.key)){
        sentence += key.key;
        
    }
    
    let text: HTMLElement | null = document.getElementsByClassName("inputWrapper")[0].getElementsByTagName('p')[0];
    text.innerText = sentence; 
})