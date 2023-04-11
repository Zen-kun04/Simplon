// Exercice # 1

// Créer une constante "data", elle contient un tableau avec les valeurs suivantes : ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'], veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "data" et n'afficher dans la console du navigateur que les prénoms avec moins ou egale 5 lettres.

// Exercice # 2

// Créer une CONSTANTE "countries", elle contient un tableau avec 5 pays de votre choix, veillez à bien le typer.
// Créer une VARIABLE "sentence", elle contient une string vide, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "countries" et ajouter chaque valeur dans la string de la variable "sentence" avec une virgule entre chaque.
// Lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Attendu : "France, Allemagne, Italie, Suisse, Belgique"

// Exercice # 3

// Créer une constante "numbers", elle contient le tableau suivant [123, 999, 340, 12390], veillez à bien le typer.
// Créer une variable "results", elle contient un tableau vide. Ce tableau servira plus tard, veillez à bien le typer.
// À l'aide d'une boucle multiplier chaque valeur du tableau "numbers" par 180.
// Vous stockerez chaque résultat dans le tableau "results", lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Aide : regarder sur Google comment insérer des valeurs dans un tableau, ici on cherche à pousser dans le tableau "results"

// Exercice # 4

// Créer une constante contenant l'objet suivant : { name: 'Marchal', surname: 'Mickeal', age: 19 }, veillez à bien le typer.
// À l'aide d'une condition vérifier si Mickeal est bien majeur, si c'est le cas afficher un message dans la console du navigateur.

// Exercice # 5

// Créer une constante contenant un objet, cet objet contient les clés suivantes: "nom", "prénom", "age". Vous êtes libres de choisir les valeurs associées, veillez à bien typer.
// Exploitez l'objet de sort à afficher dans le navigateur une phrase se présentant comme cela : "bonjour mon nom est <insérer nom> <insérer prénom>, j'ai <insérer age>"

// Exercice # 6

// Créer une constante contenant contenant un tableau de 5 objets, chaque objet à la forme de celui de l'exercice # 5, veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau d'objet et afficher dans la console du navigateur la même phrase que l'exercice # 5 pour chaque valeur du tableau.

// Exercice # 7

// Pousser ce que vous avez produit dans votre repo Github et partagez moi l'url ;)


/*
Exercice 1:
============
*/

function _exercice_1_data(){
    const data: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne']
    for(let i: number = 0; i < data.length; i++){
        if(data[i].length <= 5){
            console.log(`Le prénom ${data[i]} est inférieur ou égal à 5 caractères.`);
            
        }
    }
}


/*
Exercice 2:
============
*/

function _exercice_2_countries(){
    const countries: string[] = ["France", "Allemagne", "Italie", "Suisse", "Belgique"]
    var sentence: string = countries.join(', ')
    console.log(sentence)
    return sentence    
}

/*
Exercice 3:
============
*/

function _exercice_3_numbers(){
    const numbers: number[] = [123, 999, 340, 12390]
    const results: number[] = []
    for (let i:number = 0; i < numbers.length; i++){
        results.push(numbers[i] * 180)
    }
    console.log(results)
    return results
    
}

/*
Exercice 4:
============
*/

function _exercice_4_objet(){
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


/*
Exercice 5:
============
*/

function _exercice_5_un_objet(){
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


/*
Exercice 6:
============
*/

function _exercice_6_gens(){
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

