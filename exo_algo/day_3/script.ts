// Exercice
// Liste des stock dans stock.json

// Lorsqu'un utilisateur selectionne un téléphone dans la liste puis soumet sa recherche 
// vous affichez dans le paragraphe avec l'ID "infoExo1" un message indiquant si il y a du stock,
// et si il y a du stock le nombre en stock

// Exercice
// Liste des utilisateurs dans users.json

// Lorsqu'un utilisateur saisie une adresse email et un mot de passe valid vous lui affichez 
// le message suivant dans le paragraphe avec l'ID "successExo2" :
// "Bonjour <nom utilisateur> <prenom utilisateur>, vous êtes connecté en tant que <role utilisateur>"

// lorsqu'un utilisateur saisie une adresse email et un mot de passe invalide vous lui affichez 
// le message suivant dans le paragagraphe avec l'ID "errorExo2" :
// "Identifiants inconnus"

import data from './stock.json'
import users from './users.json'

interface Telephone {
    modele: string,
    stock: number
}

const boutonExo1 = document.querySelector("#boutonExo1") as HTMLButtonElement;
const menu_derroulant = document.querySelector("#phone") as HTMLSelectElement;
const telephones: Telephone[] = data.telephones;
boutonExo1.addEventListener('click', () => {
    const value: string = menu_derroulant.value;
    const option = document.querySelector(`option[value="${value}"]`) as HTMLOptionElement;
    const text: string = option.text;
    telephones.forEach((tel: Telephone) => {
        if(tel.modele.toLowerCase() === text.toLowerCase()){
            const p = document.querySelector("#infoExo1") as HTMLElement;
            if(tel.stock > 0){
                p.textContent = `Il nous reste ${tel.stock} en stock!`;
            }else{
                p.textContent = "Nous n'avons plus de stock pour ce téléphone :/"
            }
        }
    })
})




interface UserData {
    nom: string,
    prenom: string,
    email: string,
    mot_de_passe: string,
    role: string
}


const bouton_login = document.querySelector("#boutonExo2") as HTMLButtonElement;
const email_input = document.querySelector("#email") as HTMLInputElement;
const password_input = document.querySelector("#password") as HTMLInputElement;
const users_list: UserData[] = users.utilisateurs;
const success_p = document.querySelector("#successExo2") as HTMLElement;
const error_p = document.querySelector("#errorExo2") as HTMLElement;
bouton_login.addEventListener('click', () => {    
    users_list.every((user) => { // using every instead of forEach so I can break the loop when data is valid
        if(email_input.value.toLowerCase() === user.email.toLowerCase() && password_input.value === user.mot_de_passe){            
            error_p.textContent = "";
            success_p.textContent = `Bonjour ${user.nom} ${user.prenom}, vous êtes connecté en tant que ${user.role}`;
            return false;
        }else{            
            success_p.textContent = "";
            error_p.textContent = "Identifiants inconnus";
            return true;
        }
    })
});


