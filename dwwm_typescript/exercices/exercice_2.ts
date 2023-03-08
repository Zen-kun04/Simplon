// Exercice # 4

// - Créer une fonction Javascript avec une constante nommée "country", cette constante est typée grâce à Typescript et contient le nom d'un pays.
// - Faire s'afficher le contenu de la constante dans la console du navigateur.

// Exercice # 5

// - Créer une fonction Javascript avec deux constantes nommées : "firstName" et "lastName", ces deux constantes sont typées grâce à Typescript et contiennent vos nom / prénom.
// - Faire s'afficher la concaténation de ces deux variables dans la console du navigateur.


function pays(){
    const country: string = "France";
    console.log(country);
}

function noms(){
    const firstName: string  = "Baguette";
    const lastName: string = "Croissant";
    console.log(firstName, lastName);
}

// Exercice en plus juste pour test :)

function salut(firstName: string, lastName: string){
    return "Salut " + firstName + ' ' + lastName;
}
console.log(salut("Baguette", "Croissant"));