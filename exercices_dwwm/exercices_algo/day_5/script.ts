// Map - créer un nouveau tableau avec les résultats de la fonction de callback sur chaque élément du tableau.
// Exercice : utiliser map pour multiplier chaque item du tableau par 1.2
const mapArray: number[] = [1, 3.5, 59, 11]

// Filter - créer un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction de callback.
// Exercice : utiliser filter pour récupérer uniquement les prénom avec 6 lettres maximum
const filterArray: string[] = ['Aissatou', 'Thomas', 'Théo', 'Bertrand']

// Some - Teste si au moins un élément du tableau passe le test implémenté par la fonction de callback. Elle renvoie un booléen indiquant le résultat du test.
// Exercice : utiliser some pour vérifier si le tableau suivant contient la string "pomme"
const someArray: string[] = ['banane', 'concombre', 'pomme', 'cougette']

// Map niveau 2 : utiliser map pour créer un tableau des nom + prénom de chaque utilisateurs
// Résultat attendu : ['Cristiano Ronaldo', 'James LeBron',	'Conor McGregor']
const map2Array: { name: string, surname: string }[] = [{ surname: 'Cristiano', name: 'Ronaldo' }, { surname: 'James', name: 'LeBron' }, { surname: 'Conor', name: 'McGregor' }]

// Filter niveau 2 : utiliser filter pour récupérer uniquement les produits avec plus de 10 unités en stock
// Résultat attendu : [{product: 'banane', quantity: 23}, {product: 'pomme', quantity: 11}]
const filter2Array: { product: string, quantity: number }[] = [{ product: 'banane', quantity: 23 }, { product: 'cougette', quantity: 5 }, { product: 'pomme', quantity: 11 }]

// Some niveau 2 : utiliser some pour vérifier si un des films du tableau contient le genre "action"
// Résultat attendu : false
const some2Array: { movie: string, type: string }[] = [{ movie: 'banane', type: 'humor' }, { movie: 'cougette', type: 'drama' }, { movie: 'pomme', type: 'thriller' }]