// Exercice 1

const domExo1Input = document.getElementById('exo1') as HTMLInputElement
const domExo1Submit = document.getElementById('submitExo1') as HTMLButtonElement

domExo1Submit?.addEventListener('click', exo1SubmitFunction)

function exo1SubmitFunction() {
    const inputValue = domExo1Input?.value
    if(inputValue.match(/\d+/) && !inputValue.match(/[a-zA-Z\._]/)) // Important: ne pas mettre d'espaces dans le regex
    console.log(`Phone number: ${inputValue}`);
    else
    alert("That's not a valid number!");
    // Créer une expression régulière pour vérifier que le numéro soumis par l'utilisateur ne contient que des chiffres    
}

// Exercice 2

const domExo2Input = document.getElementById('exo2') as HTMLInputElement
const domExo2Submit = document.getElementById('submitExo2') as HTMLButtonElement

domExo2Submit?.addEventListener('click', exo2SubmitFunction)

function exo2SubmitFunction() {
    const inputValue = domExo2Input?.value
    const regex = /[0-9\/\-_\[\]{}]+/;
    // Créer une expression régulière pour vérifier que le nom de compte soumis par l'utilisateur ne contient ni chiffres ni les caractères suivants : / - _ [ ] { }
    // Test acceptés : Magle, Heineken, Cologne
    // Test non acceptés : Frel0n78, n0r@ge, Marge_S
    if(inputValue.match(regex)){
        // mauvais
        alert("invalid nickname format!");
    }else{
        console.log(`Your nickname is: ${inputValue}`);
        
    }
}   

// Exercice 3

const domExo3Input = document.getElementById('exo3') as HTMLInputElement
const domExo3Submit = document.getElementById('submitExo3') as HTMLButtonElement

domExo3Submit?.addEventListener('click', exo3SubmitFunction)

function exo3SubmitFunction() {
    const inputValue = domExo3Input?.value
    const regex = /^(?=.*?\d)(?=.*?[a-zA-Z])[A-Za-z0-9]+@[A-Za-z0-9]+\.(com|fr)$/;
    // (?=.*?\d) => Être sûr qu'il y aura au moins 1 chiffre
    if(inputValue.match(regex)){
        console.log(`Ton email c'est: ${inputValue}`);
    }else{
        alert(inputValue + ' ' + inputValue.match(regex));
    }
    // Créer une expression régulière pour vérifier que l'adresse email soumisse respecte bien le format : <chiffre+lettre>@<lettre>.<fr/com>
    // Test acceptés : simplon87@gmail.com, dynamo.contact@chambery.fr
    // Test non acceptés : sony@contact@mail.com, perseon__229@hello.de
}