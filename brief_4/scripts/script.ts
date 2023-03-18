import configFile from '../config.json'
const goodAnswerImage: string = require("../images/confirm.png");
const badAnswerImage: string = require("../images/cancelar.png");
const finalGoodAnswerImage: string = require("../images/comprobado.png");
const finalBadAnswerImage: string = require("../images/llevar.png");


interface Question {
    title: string,
    answers: string[],
    correct: number,
    random: boolean
}

let username: string = "";
let questionIndex: number = 0;
let points: number = 0;
const questionsJson: Question[] = configFile.questions;
const containerTitle: Node | undefined = document.getElementById("title")?.cloneNode(true);
function toggleTitle(toggle: boolean){
    console.log(toggle);
    
    if(toggle){
        // Enable title
        const container: HTMLElement | null = document.getElementById("question");
        if(containerTitle)
        container?.insertBefore(containerTitle.cloneNode(true), container.firstChild);
        const contentContainer: HTMLElement | null = document.getElementById("content");
        if(contentContainer){
            contentContainer.style.height = `60vh`;
            contentContainer.style.borderRadius = "0px 0px 10px 10px";
        }
    }else {
        // Disable title
        const title: HTMLElement | null = document.getElementById("title");
        if(title){
            title.remove();
        }
        const contentContainer: HTMLElement | null = document.getElementById("content");
        if(contentContainer){
            contentContainer.style.height = `calc(${contentContainer.clientHeight}px + 10vh)`;
            contentContainer.style.borderRadius = "10px 10px";
        }
    }
}

function isTitleEnabled(){
    let test: HTMLElement | null = document.getElementById("title");
    return test !== null;
}

function setTitle(titleContent: string){
    const title: HTMLElement | null = document.getElementById("title");
    if(title){
        title.textContent = titleContent;
    }
}

function createCustomButton(text: string | null, bgcolor: string | null, className: string | null, idName: string | null, callback: EventListener | null, ...args){
    const customB: HTMLElement | null = document.createElement("div")
    if(text)
    customB.textContent = text;
    if(bgcolor)
    customB.style.backgroundColor = bgcolor;
    if(className)
    customB.classList.add(className);
    if(idName)
    customB.id = idName;
    const answersContainer: HTMLElement | null = document.getElementById("answers");
    if(callback)
    customB.addEventListener('click', () => {
        for(let x in args){
            if(args[x] === "[button]"){
                args[x] = customB;
            }
        }
        if(args){
            callback.apply(null, [new Event('')].concat(args));
        }else
            callback.apply(null, [new Event('')]);
        
    });
    if(answersContainer)
    answersContainer.appendChild(customB);

}

function createCustomElement(tag: string, text: string | null, className: string | null, idName: string | null, to: Element, position: number){
    // position: 0 = before
    // position: 1 = after (default)
    const elem: HTMLElement = document.createElement(tag);
    if(text)
    elem.textContent = text;
    if(className)
    elem.classList.add(className);
    if(idName)
    elem.id = idName;
    if(position === 0){
        to.insertBefore(elem, to.firstChild);
    }else{
        to.appendChild(elem);
    }
    
    return elem;
}

function createCustomImage(path: string, className: string | null, idName: string | null, to: Element, position: number): HTMLImageElement{
    // position: 0 = before
    // position: 1 = after (default)
    const elem: HTMLImageElement = document.createElement("img");
    elem.src = path;
    if(className)
    elem.classList.add(className);
    if(idName)
    elem.id = idName;
    if(position === 0){
        to.insertBefore(elem, to.firstChild);
    }else{
        to.appendChild(elem);
    }
    
    return elem;
}

function elementExist(tag: string | null, className: string | null, idName: string | null) {
    const selectors = [
      tag ? tag : '',
      className ? `.${className}` : '',
      idName ? `#${idName}` : ''
    ].join('');
  
    return document.querySelector(selectors) as HTMLElement | null;
  }

function createErrorMessage(text: string): HTMLElement | null{
    const answersContainer: Element | null = document.getElementById("answers")
    let customElem: HTMLElement | null = null;
    if(answersContainer){
        if(elementExist("span", "errorMessage", null) === null)
        customElem = createCustomElement("span", text, "errorMessage", null, answersContainer, 0)
    }

    return customElem;
    
}

function hideErrorMessages(){
    const error: HTMLCollectionOf<Element> | null = document.getElementsByClassName("errorMessage");
    if(error){
        for(let i of error){
            i.remove();
        }
    }
}

function mainButtonStart(event: Event, ...args): void{
    console.log("si");
    let buttonB: HTMLElement | null = null;
    
    
    if(args)
    
    for(let a of args){
        if(a instanceof HTMLElement){
            buttonB = a;
            
        }else if(buttonB !== null && typeof a === "string" && a.includes("[", 0) && a.includes("]", -1)){
            // Custom options
            switch(a){
                case "[check_username]":
                    const customInput = document.getElementById("inputUsername") as HTMLInputElement;
                    let err: HTMLElement | null = null;
                    if(customInput && customInput.value === ""){
                        err = createErrorMessage("Erreur: Il faut que tu ajoutes un nom d'utilisateur!")
                    }else{
                        hideErrorMessages();
                        username = customInput.value.trim();
                    }
                    break;
            }
            if(username.trim() !== "")
            startQuestions();
        }
    }
    
}

function shuffle<T>(array: T[]): T[] {
    let lista: T[] = JSON.parse(JSON.stringify(array));
    let currentIndex = lista.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [lista[currentIndex], lista[randomIndex]] = [
        lista[randomIndex], lista[currentIndex]];
    }
  
    return lista;
};

function isGoodAnswer(answer: string){
    const question: Question = getCurrentQuestion();
    console.log(questionsJson[questionsJson.indexOf(question)]);
    
    const goodAnswer: string = question.answers[question.correct]
    console.log(answer, goodAnswer);
    
    return answer === goodAnswer;
}

function getCurrentQuestion(): Question{
    return questionsJson[questionIndex];
}

function hideCustomButtons(){
    const buttons: NodeListOf<Element> = document.querySelectorAll(".answer");
    for(let button of buttons){
        button.remove();
    }
}

function showPartialResultPage(result: boolean){
    /*
    Result: true = Good!
    Result: false = Bad
    */

    // Remove everything
    hideCustomButtons();
    toggleTitle(false);
    /////////////////////
    const answersContainer: HTMLElement | null = document.getElementById("answers");
    let image: HTMLImageElement | null = null;
    let nextSeconds = 5;
    let nextSecondsParagraph: HTMLElement | null = null;

    let secondsParagraph: HTMLElement | null = null

    if(answersContainer && result === true)
    image = createCustomImage(goodAnswerImage, null, null, answersContainer, 0);
    else if(answersContainer && result === false)
    image = createCustomImage(badAnswerImage, null, null, answersContainer, 0);
    if(image){
        image.style.width = "20vh";
        image.style.marginTop = "4vh";
    }
    if(answersContainer){
        createCustomElement("p", result ? "Bravo!" : "Dommage!", null, 'answerResultParagraph', answersContainer, 1);
        createCustomElement("p", result ? "+1" : "-1", null, result ? "nice" : "bad", answersContainer, 1);
        createCustomElement("p", questionIndex + 1 < questionsJson.length ? "Prochaine question dans" : "Résultats dans", null, "answerResultParagraphNextQuestion", answersContainer, 1);
        nextSecondsParagraph = createCustomElement("p", nextSeconds.toString(), "secondsGreen", "answerResultParagraphSeconds", answersContainer, 1);
        var inter = setInterval(function(){
            nextSeconds--;
            if(nextSeconds !== 0)
            nextSecondsParagraph!.textContent = nextSeconds.toString();
            if(nextSeconds === 0){
                clearInterval(inter);
                afterInterval();
            }else if(nextSeconds === 2){
                nextSecondsParagraph?.classList.remove("secondsGreen");
                nextSecondsParagraph?.classList.add("secondsOrange");
            }else if(nextSeconds === 1){
                nextSecondsParagraph?.classList.remove("secondsOrange");
                nextSecondsParagraph?.classList.add("secondsRed");
            }
            
            
        }, 1000);
        secondsParagraph = createCustomElement("p", "secondes", null, "answerResultParagraphNextQuestion", answersContainer, 1);


        function afterInterval(){
            questionIndex++;
            hidePartialResultPage();
            toggleTitle(true);
            if(typeof getCurrentQuestion() !== "undefined"){
                setTitle(getCurrentQuestion().title);
                loadQuestion(getCurrentQuestion());
            }
            else
            showFinalResultPage();
            
        }
    }
}

function showFinalResultPage(){
    // Display the final results of player
    toggleTitle(false);
    const answersContainer: HTMLElement | null = document.getElementById("answers");
    let resultImage: HTMLImageElement | null = null;
    let resultText: HTMLElement | null = null;
    let resultPoints: HTMLElement | null = null;
    if(answersContainer){
        resultImage = createCustomImage(points >= questionsJson.length / 2 ? finalGoodAnswerImage : finalBadAnswerImage, null, null, answersContainer, 1);
        if(resultImage){
            resultImage.style.width = "20vh";
            resultImage.style.marginTop = "4vh";
        }
        resultText = createCustomElement("p", points === questionsJson.length ? 
        "Parfait!" : 
        points >= questionsJson.length / 1.5 ? 
        "Pas mal 😏" : 
        points === questionsJson.length / 2 ?
        "Tu peux mieux faire!" :
        "Aïe aïe aïe 😬..."
        ,null, "answerResultParagraph", answersContainer, 1);
        resultPoints = createCustomElement("p", `${points}/${questionsJson.length}`, null, "answerResultParagraphSeconds", answersContainer, 1);
        createCustomButton("Restart", "rgb(55, 197, 55)", "answer", null, finalResultButtonListener);
    }
}

function finalResultButtonListener(event: Event){
    resetEverything();
    main();
}

function hidePartialResultPage(): void {
    const answersContainer: HTMLElement | null = document.getElementById("answers");
    if (answersContainer) {
        while (answersContainer.firstChild) {
            answersContainer.removeChild(answersContainer.firstChild);
        }
    }
}


function resetEverything(){
    toggleTitle(false);
    hidePartialResultPage();
    hideErrorMessages();
    points = 0;
    username = "";
}


function callbackAnswer(event: Event, ...args: any){
    const button: HTMLElement = args[0];
    const buttonText: string | null = button.textContent;
    
    if(buttonText && isGoodAnswer(buttonText)){
        console.log("bien hecho!");
        showPartialResultPage(true);
        // Add points
        points++;
        
    }else{
        console.log("que pena :(");
        showPartialResultPage(false);
    }
    
    // shuffle(getCurrentQuestion().answers)
    

    
    
}

function loadQuestion(question: Question){
    setTitle(question.title);
    let colors = ["red", "purple", "green", "blue"];
    let answerList: string[] = question.answers;
    if(question.random){
        answerList = shuffle(getCurrentQuestion().answers)
    }
    for(let amount in question.answers){
        createCustomButton(answerList[amount], null, 'answer', colors[0], callbackAnswer, "[button]");
        colors.shift();
    }
}

function startQuestions(){
    // Remove player button, input and text

    const playButton: HTMLElement | null = document.getElementById("play");
    if(playButton)
    playButton.remove();

    const inputUsername: HTMLElement | null = document.getElementById("inputUsername");
    if(inputUsername)
    inputUsername.remove();

    const usernameParagraph: HTMLElement | null = document.getElementById("usernameParagraph");
    if(usernameParagraph)
    usernameParagraph.remove();
    /////////////////////////////////////////

    toggleTitle(true);
    loadQuestion(questionsJson[questionIndex]);
    


    
}

function main(){
    // let time = 10;
    toggleTitle(false);
    const answersContainer: HTMLElement | null = document.getElementById("answers");
    if(answersContainer){
        const customParagraph: HTMLElement = createCustomElement("p", "Username:", null, "usernameParagraph", answersContainer, 0);
        const customInput: HTMLElement = createCustomElement("input", null, null, "inputUsername", answersContainer, 1);
        customParagraph.style.marginTop = "5vh";
        customParagraph.style.marginBottom = "2vh";
        customInput.style.marginBottom = "7vh";
    }
    
    createCustomButton("Let's play!", "red", "answer", "play", mainButtonStart, "[button]", "green", "[check_username]");
    
    
    
    // var interval = setInterval(function(){
    //     if(time % 2 === 0){
    //         toggleTitle(true);
            
    //     }else{
    //         toggleTitle(false);
    //     }
    //     if(time === 0){
    //         clearInterval(interval)
    //     }
    //     time--;
    // }, 1000)
}

main()