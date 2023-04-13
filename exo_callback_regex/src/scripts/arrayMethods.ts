// Classique
function one() {
    console.log('one');
}

// Fléché
const two = () => {
    console.log('two');
}

const x = 'Bonjour j\'ai 3 ans'

// mapArray.forEach((value, index, array) => {
    // console.group('test')
    // console.log(value);
    // console.log(index);
    // console.log(array);
    // console.groupEnd
// })

// callbackfn: (value: number, index: number, array: number[]

// Map - créer un nouveau tableau avec les résultats de la fonction de callback sur chaque élément du tableau.
// Exercice : utiliser map pour multiplier chaque item du tableau par 1.2
const mapArray: number[] = [1, 3.5, 59, 11]
const maped = mapArray.map((val) => val * 1.2);
console.log(maped);


// Filter - créer un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction de callback.
// Exercice : utiliser filter pour récupérer uniquement les prénom avec 6 lettres maximum
const filterArray: string[] = ['Aissatou', 'Thomas', 'Théo', 'Bertrand']
const filtered = filterArray.filter((val) => val.length <= 6);
console.log(filtered);


// Some - Teste si au moins un élément du tableau passe le test implémenté par la fonction de callback. Elle renvoie un booléen indiquant le résultat du test.
// Exercice : utiliser some pour vérifier si le tableau suivant contient la string "pomme"
const someArray: string[] = ['banane', 'concombre', 'pomme', 'cougette']
const somed = someArray.some((val) => val === "pomme");
console.log(somed);


// Map niveau 2 : utiliser map pour créer un tableau des nom + prénom de chaque utilisateurs
// Résultat attendu : ['Cristiano Ronaldo', 'James LeBron',	'Conor McGregor']
const map2Array: { name: string, surname: string }[] = [{ surname: 'Cristiano', name: 'Ronaldo' }, { surname: 'James', name: 'LeBron' }, { surname: 'Conor', name: 'McGregor' }]
const maped2 = map2Array.map((val) => `${val.surname} ${val.name}`);
console.log(maped2);

// Filter niveau 2 : utiliser filter pour récupérer uniquement les produits avec plus de 10 unités en stock
// Résultat attendu : [{product: 'banane', quantity: 23}, {product: 'pomme', quantity: 11}]
const filter2Array: { product: string, quantity: number }[] = [{ product: 'banane', quantity: 23 }, { product: 'cougette', quantity: 5 }, { product: 'pomme', quantity: 11 }]
const filtered2 = filter2Array.filter((val) => val.quantity > 10);
console.log(filtered2);

// Some niveau 2 : utiliser some pour vérifier si un des films du tableau contient le genre "action"
// Résultat attendu : false
const some2Array: { movie: string, type: string }[] = [{ movie: 'banane', type: 'humor' }, { movie: 'cougette', type: 'drama' }, { movie: 'pomme', type: 'thriller' }]
const somed2 = some2Array.some((val) => val.type === "action");
console.log(somed2);



