
interface Boulot {
    nom: string,
    salaire: number,
    cadre: string
}

interface Personne {
    nom: string,
    prenom: string,
    age: number,
    travail: Boulot
}

function test(){
    const personnes: Personne[] = [
        {
            nom: "Test",
            prenom: "Michel",
            age: 28,
            travail: {
                nom: "Développeur",
                salaire: 3884,
                cadre: "Backend"
            }
        },
        {
            nom: "JSP",
            prenom: "Adrien",
            age: 34,
            travail: {
                nom: "Cybersécurité",
                salaire: 5400,
                cadre: "Audit"
            }
        },
        {
            nom: "duturfu",
            prenom: "Jean",
            age: 56,
            travail: {
                nom: "Médecin",
                salaire: 1800,
                cadre: "Généraliste"
            }
        },
        {
            nom: "Dru",
            prenom: "Philippe",
            age: 52,
            travail: {
                nom: "Comptabilité",
                salaire: 2000,
                cadre: "Employé"
            }
        },
    ]


    for(let i = 0; i < personnes.length; i++){
        const personne = personnes[i];
        
    }
}