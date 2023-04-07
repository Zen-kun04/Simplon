// #1 créer une fonction pour générer une carte (voir fichier html), la carte est composée de cette manière :
//    - une <div> avec la classe "departmentCard"
//    - la <div> précédente contient deux <div>, une avec la classe "departmentCardHeader" l'autre avec la classe "departmentCardBody"
//    - la <div> précédente avec la class "departmentCardBody" contient deux <p> avec pour texte le nom du département et son code
// #2 Pour chaque élément du tableau de départements retournés par l'API créer une carte à l'aide de votre fonction
// #3 Insérer les cartes de départements dans la <div> avec l'id "domTarget"

async function fetchDepartments() {
    try {
        // Fetch API pour récupérer les données
        const response = await fetch('https://geo.api.gouv.fr/departements')
        const data: {nom: string, code: string, codeRegion: string}[] = await response.json()
        data.forEach((d) => {
            generateCard(d.nom, d.code);
        })
        // Votre logique ici
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}

function generateCard(name: string, code: string){
    const departmentCard: HTMLElement = document.createElement('div');
    const departmentCardHeader: HTMLElement = document.createElement('div');
    const departmentCardBody: HTMLElement = document.createElement('div');
    const pName: HTMLElement = document.createElement('p');
    const pCode: HTMLElement = document.createElement('p');
    pName.textContent = `Nom: ${name}`;
    pCode.textContent = `Code: ${code}`;
    departmentCard.classList.add('departmentCard');
    departmentCardHeader.classList.add('departmentCardHeader');
    departmentCardBody.classList.add('departmentCardBody');
    departmentCardBody.appendChild(pName);
    departmentCardBody.appendChild(pCode);
    departmentCard.appendChild(departmentCardHeader);
    departmentCard.appendChild(departmentCardBody);

    const wrapper = document.querySelector(".cardsWrapper#domTarget") as HTMLElement;
    wrapper.appendChild(departmentCard);
}

// Execute la fonction pour fetch les départements
fetchDepartments()