// Exercice 1
// Créer un <p> à l'aide de la fonction createElement()
// Ajouter la class "exo1" à l'élément créé
// Ajouter le texte "Hello world" à l'élément créé
// Insérer l'élément créé dans la <div> avec l'id "targetExo1"
const p: HTMLElement = document.createElement('p');
p.classList.add("exo1");
p.textContent = "Hello world";
const targetExo1 = document.querySelector("div#targetExo1") as HTMLElement;
targetExo1.appendChild(p);

// Exercice 2.1
// À partir du code précédent écrire une fonction générique pour créer un <p>. Cette fonction 
// reçoit un paramètre d'entrée "text" de type string qui est utilisé pour le texte du <p>.
// La fonction retourne le <p> créé
function paragraphCreator(content: string): HTMLElement {
    const p: HTMLElement = document.createElement('p');
    p.classList.add("exo1");
    p.textContent = content;
    return p;
}
// Exercice 2.2
// Parcourez le tableau, utilisez la fonction précédemment créée pour générer
// un <p> pour chaque string du tableau et stocker les <p> dans un tableau

const countries: string[] = ['France', 'Belgique', 'Suede', 'Russie', 'Hongrie']
const p_list: HTMLElement[] = []
countries.forEach((country: string) => {
    const p: HTMLElement = paragraphCreator(country);
    p_list.push(p);
});


// Exercice 2.3
// Parcourez le tableau de <p> précédemment créé pour insérer chaque <p>
// dans la <div> avec l'id "targetExo4"
const targetExo4 = document.querySelector("div#targetExo4") as HTMLElement;
p_list.forEach((p: HTMLElement) => {
    targetExo4.appendChild(p);
});
// Exercice 3
// À l'aide du code de l'exercice 2.1, 2.2, 2.3
// - Créer une fonction générique pour créer des <li> avec un paramètre pour définir le texte du <li>
// - Parcourez le tableau, utilisez la fonction précédemment créée pour générer un <li> pour chaque objet
//   du tableau et stocker les <li> dans un tableau
// - Chaque <li> contient le texte suivant : "<nom>, <codePostal>" (remplacer avec valeur de l'objet)
// - Parcourez le tableau de <li> précédemment créé pour insérer chaque <li> dans le <ul> avec  l'id "targetExo5"

const cities: { nom: string, codePostal: string }[] = [
    { nom: "Paris", codePostal: "75000" },
    { nom: "Lyon", codePostal: "69000" },
    { nom: "Marseille", codePostal: "13000" },
]
const ul = document.querySelector("ul#targetExo5") as HTMLElement;
function createLi(content: string) {
    const li: HTMLElement = document.createElement('li');
    li.textContent = content;
    ul.appendChild(li);
}

cities.forEach((city) => {
    createLi(`${city.nom}, ${city.codePostal}`);
});