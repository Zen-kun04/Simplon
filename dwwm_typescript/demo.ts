// Système de constante et variable
// Différent types

const firstName: string = 'Kévin';
const lastName: string = 'Wolff'; 

const age: number = 30

const isHeWakeUp: boolean = false;

// Tableau
const learners: any[] = ['Kevin', 30, true]

// Objet
const learner: {} = {
    name: 'Kevin',
    age: 30,
    wakeUp: false
}


function exercice_1_adresse(){
    const address: string = "Some random address haha";
    const zipCode: number = 12345;
    const addressFull: string = address + ' ' + zipCode;
    return addressFull;
}

// console.log(exercice_1_adresse());

function exercice_2_tableau(){
    const tableau: string[] = [
        "Espagne",
        "France",
        "Angleterre",
        "Argentine",
        "Italie"
    ]

    for(let i = 0; i < tableau.length; i++){
        console.log(tableau[i]);
    }
}

// exercice_2_tableau()


function exercice_3_string(random_string: string){
    return random_string.split('');
}

// console.log(exercice_3_string("hello world"));

function exercice_4_revert(random_string: string[]){
    const reverted = random_string.join('');
    return reverted;
}

// console.log(exercice_4_revert(exercice_3_string("Hello World")));



