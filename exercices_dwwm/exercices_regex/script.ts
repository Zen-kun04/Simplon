// Exercice 1

const domExo1Input = document.getElementById('exo1') as HTMLInputElement
const domExo1Submit = document.getElementById('submitExo1') as HTMLButtonElement

domExo1Submit?.addEventListener('click', exo1SubmitFunction)

function exo1SubmitFunction() {
    const inputValue = domExo1Input?.value
    console.log(inputValue);

    // Créer une expression régulière pour vérifier que le numéro soumis par l'utilisateur ne contient que des chiffres    
}

// Exercice 2

const domExo2Input = document.getElementById('exo2') as HTMLInputElement
const domExo2Submit = document.getElementById('submitExo2') as HTMLButtonElement

domExo2Submit?.addEventListener('click', exo2SubmitFunction)

function exo2SubmitFunction() {
    const inputValue = domExo2Input?.value

    // Créer une expression régulière pour vérifier que le nom de compte soumis par l'utilisateur ne contient ni chiffres ni les caractères suivants : / - _ [ ] { }
    // Test acceptés : Magle, Heineken, Cologne
    // Test non acceptés : Frel0n78, n0r@ge, Marge_S
}

// Exercice 3

const domExo3Input = document.getElementById('exo3') as HTMLInputElement
const domExo3Submit = document.getElementById('submitExo3') as HTMLButtonElement

domExo3Submit?.addEventListener('click', exo3SubmitFunction)

function exo3SubmitFunction() {
    const inputValue = domExo3Input?.value

    // Créer une expression régulière pour vérifier que l'adresse email soumisse respecte bien le format : <chiffre+lettre>@<lettre>.<fr/com>
    // Test acceptés : simplon87@gmail.com, dynamo.contact@chambery.fr
    // Test non acceptés : sony@contact@mail.com, perseon__229@hello.de
}