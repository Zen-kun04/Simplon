// Exercice 1
// Faites l'import nécessaire pour exploiter les données du fichier data.json et afficher son contenu dans la console

import data from './data.json';
console.log(data);

interface Telephones {
    telephone: string, 
    fabricant: string, 
    ventes_annuelles_estimees: number
}

interface Consoles {
    console: string, 
    fabricant: string, 
    ventes_totales_estimees: number
}

// Exercice 2
// Créer deux constantes, l'une contient les téléphones de la liste, l'autre les consoles
// Afficher le contenu des deux constantes dans la console

const a: Telephones[] = data.telephones;
const b: Consoles[] = data.consoles;
console.log(a, b);

// Exercice 3
// Fusionner les tableaux "consoles" et "téléphones" dans une constantes "products" (how to merge array Javascript > Google)
// Afficher le contenu de cette constante
const ab: Array<Telephones | Consoles> = []; // Pour éviter les erreurs d'overload
let products: Array<Telephones | Consoles> = ab.concat(a, b);
console.log(products);

// Exercice 4
// Extraire toutes les marques présentent dans le tableau "products" dans un nouveau tableau
const brands: string[] = [];
products.forEach((product) => {
    if(!brands.includes(product.fabricant))
    brands.push(product.fabricant);
});

console.log(brands);

// Exercice 5.1
// Extraire les produits des marques Samsung et Sony du tableau "products" dans un nouveau tableau
const samson_products: (Telephones | Consoles)[] = [];
products.forEach((product) => {
    if(['samsung', 'sony'].includes(product.fabricant.toLowerCase())){
        samson_products.push(product);
    }
});

console.log(samson_products);


// Exercice 5.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne un tableau des produits de la marque (brand) présent dans "products" 

function allProducts(brand: string): (Telephones | Consoles)[] {
    let brand_products: (Telephones | Consoles)[] = []
    products.forEach((product) => {
        if(product.fabricant.toLowerCase() === brand.toLowerCase()){
            brand_products.push(product);
        }
    });
    return brand_products;
}

console.log(allProducts("sOnY"));

// Exercice 6.1
// Faire le total des consoles vendus par Nintendo
// Faire le total des téléphones vendus par Apple

let totalNintendo: number = 0;
let totalApple: number = 0;
products.forEach((product) => {
    if (product.fabricant.toLowerCase() === "nintendo"){
        totalNintendo++;
    }else if(product.fabricant.toLowerCase() === "apple"){
        totalApple++;
    }
});
console.log(`Total de produits vendus pas Nintendo: ${totalNintendo}`);
console.log(`Total de produits vendus pas Apple: ${totalApple}`);


// Exercice 6.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne le total des ventes des produits de la marque (brand) présent dans "products"

function totalSell(brand: string): number[] {
    let total: number[] = [];
    products.forEach((product) => {
        if(product.fabricant.toLowerCase() === brand.toLowerCase()){
            if("ventes_annuelles_estimees" in product){
                total.push(product.ventes_annuelles_estimees);
            }else{
                total.push(product.ventes_totales_estimees);
            }
        }
    })
    return total;
}

console.log(totalSell("sony"));
