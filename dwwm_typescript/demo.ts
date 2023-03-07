// Système de constante et variable
// Différent types

const firstName: string = 'Kévin';
const lastName: string = 'Wolff'; 

const age: number = 30

const isHeWakeUp: boolean = false;

// Tableau
const learners: any[] = ['Kevin', 30, true]

// Objet
const learner: {} = {
    name: 'Kevin',
    age: 30,
    wakeUp: false
}

for (var x in learner){
    document.write(learner[x]);
}