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








/*
Exercice 1:
============
*/

function exercice_1_data(){
    const data: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne']
    for(let i: number = 0; i < data.length; i++){
        if(data[i].length <= 5){
            console.log(`Le prénom ${data[i]} est inférieur ou égal à 5 caractères.`);
            
        }
    }
}

// exercice_1_data()
/*
Exercice 2:
============
*/

function exercice_2_countries(){
    const countries: string[] = ["France", "Allemagne", "Italie", "Suisse", "Belgique"]
    var sentence: string = ""
    sentence = countries.join(', ')
    console.log(sentence)
    return sentence    
}

// exercice_2_countries()

/*
Exercice 3:
============
*/

function exercice_3_numbers(){
    const numbers: number[] = [123, 999, 340, 12390]
    const results: number[] = []
    for (let i:number = 0; i < numbers.length; i++){
        results.push(numbers[i] * 180)
    }
    console.log(results)
    return results
    
}

// exercice_3_numbers()

/*
Exercice 4:
============
*/

function exercice_4_objet(){
    interface Objet {
        name: string,
        surname: string,
        age: number
    }

    const objet: Objet = {
        name: 'Marchal',
        surname: 'Mickeal',
        age: 19
    }

    objet.age >= 18 ? console.log(`${objet.name} ${objet.surname} est majeur.`) : console.log(`${objet.name} ${objet.surname} n'est pas majeur!`);
    
}

// exercice_4_objet()
/*
Exercice 5:
============
*/

function exercice_5_un_objet(){
    interface UnObjet{
        nom: string,
        prenom: string,
        age: number
    }

    const personne: UnObjet = {
        nom: "Lassalle",
        prenom: "Jean",
        age: 10
    }

    console.log(`Salut, j'suis ${personne.prenom} ${personne.nom} et je suis agé de ${personne.age} ans`);
    
}

// exercice_5_un_objet()

/*
Exercice 6:
============
*/

function exercice_6_gens(){
    interface Personne{
        nom: string,
        prenom: string,
        age: number
    }

    const personnes: Personne[] = [
        {
            nom: "asd",
            prenom: "dsa",
            age: 16
        },
        {
            nom: "asd1",
            prenom: "dsa1",
            age: 19
        },
        {
            nom: "asd2",
            prenom: "dsa2",
            age: 27
        },
        {
            nom: "asd3",
            prenom: "dsa3",
            age: 49
        },
        {
            nom: "asd4",
            prenom: "dsa4",
            age: 5
        },
    ]

    for (let i = 0; i < personnes.length; i++){
        let personne = personnes[i]
        
        personne.age >= 18
        ?
        console.log(`Bonjour, mon nom est ${personne.nom} et mon prénom est ${personne.prenom}. Je suis majeur car je suis agé de ${personne.age} ans`)
        :
        console.log(`Bonjour, je m'appelle ${personne.nom} ${personne.prenom} et je suis mineur car je suis agé de ${personne.age} ans mdr`);
    }
}


// exercice_6_gens()