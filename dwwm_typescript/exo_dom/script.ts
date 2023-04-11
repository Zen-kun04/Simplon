// getElementById
const domElementA: HTMLElement | null = document.getElementById('test')

// getElementsByClassName
const domElements: HTMLCollectionOf<Element> = document.getElementsByClassName('test')

// getElementByTagName
const domElementByTag: HTMLCollectionOf<Element> = document.getElementsByTagName('img')

// querySelector
const querySelector: HTMLHeadingElement | null = document.querySelector('.box > h1')

// querySelectors
const querySelectors: NodeListOf<Element> | null  = document.querySelectorAll('.box > h1')

if (querySelector) {
    querySelector.addEventListener('click', toto)
}

function toto(lol: Event) {
    console.log(event)
}

///////////////////////////////////////////////////////////////////

// function myTeamScore(score1: number, score3: number) {

//     console.log(score1)
//     console.log(score3)

// }

// const players: any = [
//     {
//         name: "Toto",
//         score: 15
//     },
//     {
//         name: "Tata",
//         score: 89
//     },
//     {
//         name: "Tutu",
//         score: 59
//     }
// ]

// myTeamScore(players[1].score, players[2].score)