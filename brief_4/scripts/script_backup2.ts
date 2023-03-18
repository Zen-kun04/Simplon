import config from '../config.json';
const goodAnswerImage = require("../images/confirm.png")

interface Question {
    title: string,
    answers: string[],
    correct: number
}


const jsonQuestions: Question[] = config.questions;
console.log(jsonQuestions);


const title = document.getElementById("title")!;
let completed_questions: Question[] = [];
var quiz: number;
let points = 0;
var questionIndex = 0;

function nextQuestion(){
    const answerButtonList = document.getElementsByClassName("answer");
    const answerButtonListArray = Array.from(answerButtonList);
  if(completed_questions.length === jsonQuestions.length){
    title.innerHTML = "T'as fini!"
    hideAnswers();
    console.log(points);
    
  }else{
    for(let question of jsonQuestions){
    
    if(!completed_questions.includes(question)){
      title.innerText = question.title;
      for(let button of answerButtonList){
        let index = answerButtonListArray.indexOf(button);
        button.innerHTML = question.answers[index];
        
      }
      completed_questions.push(question);
      break;
    }
  }
  }
}

let savedTitle: HTMLElement | null = null;
let savedImage: HTMLElement | null = null;

function showGoodAnswerPage(pointsAdded: number) {
    savedTitle = title.cloneNode(true) as HTMLElement;
    title.remove();
    const content: HTMLElement | null = document.getElementById("content");
    if (content){        
        content.style.height = `calc(${content.clientHeight}px + 10vh)`;
        content.style.borderRadius = "10px";
        const img = document.createElement("img");
        img.src = goodAnswerImage;
        img.style.width = "20vh";
        content.appendChild(img);
        savedImage = img;
    }
}

function buttonListener(){
    const answerButtonList = document.getElementsByClassName("answer");
    const answerButtonListArray = Array.from(answerButtonList);
    for(let i = 0; i < answerButtonListArray.length; i++) {
        const answer = answerButtonListArray[i] as HTMLElement;
        answer.addEventListener('click', () => {
          const currentQuestion = getCurrentQuestion();
          completed_questions.push(currentQuestion);
          if(answerButtonListArray.indexOf(answer) === currentQuestion.correct){
            // Answer is correct
            points++;
            let t = 5;
            hideAnswers();
            showGoodAnswerPage(1);
            
            if(jsonQuestions.indexOf(getCurrentQuestion()) === -1){
                /*
                This was the last question, so I will give the final result
                */
                title.textContent = `Résultat dans ${t} secondes`
                t--;
                var int = setInterval(function(){
                    title.textContent = `Résultat dans ${t} secondes`
                    if(t === 0){
                        clearInterval(int);
                        startQuiz();
                    }else{
                        t--;
                    }
                    
                }, 1000)
            }else{
                /*
                Go to the next question
                */
                title.textContent = `Prochaine question dans ${t} secondes`
                t--;
                var int = setInterval(function(){
                    title.textContent = `Prochaine question dans ${t} secondes`
                    if(t === 0){
                        clearInterval(int);
                        hideGoodAnswerPage();
                        startQuiz();
                    }else{
                        t--;
                    }
                    
                }, 1000)
            }
          }else{
            // Answer is incorrect
            let t = 5;
            hideAnswers();
            
            if(jsonQuestions.indexOf(getCurrentQuestion()) === -1){
                title.textContent = `Résultat dans ${t} secondes`
                t--;
                var int = setInterval(function(){
                    title.textContent = `Résultat dans ${t} secondes`
                    if(t === 0){
                        clearInterval(int);
                        startQuiz();
                    }else{
                        t--;
                    }
                    
                }, 1000)
            }else{
                title.textContent = `Prochaine question dans ${t} secondes`
                t--;
                var int = setInterval(function(){
                    title.textContent = `Prochaine question dans ${t} secondes`
                    if(t === 0){
                        clearInterval(int);
                        startQuiz();
                    }else{
                        t--;
                    }
                    
                }, 1000)
            }
            
          }   
        });
      }
}

let colors = ["red", "purple", "green", "blue"];

function createButton(){
    const answersDiv: Element | null = document.getElementById("answers");
    const buttonCreation: Element = document.createElement("div")
    buttonCreation.classList.add("answer");
    for(let color of colors){
        buttonCreation.id = color;
        colors.splice(colors.indexOf(color), 1);
        break;
    }
    answersDiv?.appendChild(buttonCreation);
    return buttonCreation;
}

function loadQuestion(question: Question){
    console.log(getCurrentQuestion());
    
    title.textContent = question.title;
    for(let answer of question.answers){
        let button: Element = createButton();
        button.textContent = answer;
    }
    buttonListener();
    colors = ["red", "purple", "green", "blue"];
    
}

function startQuiz(){
    // var i = 0;
    // var temps = 5 // en secondes

    // function executeQuestion(){
    //     var quest = jsonQuestions[i];
    //     loadQuestion(quest);        
    //     var quiz = setInterval(function(){
    //         temps--;
    //         console.log(temps);
            
    //         if(temps === 0){
    //             completed_questions.push(quest)
    //             hideAnswers();
    //             console.log("T'as perdu");
    //             clearInterval(quiz);
    //             temps = 5;
    //             i++;
    //             if(i < jsonQuestions.length){
    //                 executeQuestion();
    //             }else{
    //                 console.log("Quiz terminé");
    //                 title.innerHTML = "T'as fini!"
    //                 console.log(points);
    //             }
                
    //         }
    //     }, 1000);
    // }
    
    // executeQuestion();
    hideAnswers();
    if(questionIndex < jsonQuestions.length){

        loadQuestion(jsonQuestions[questionIndex]);
        questionIndex++;
    }else{
        hideAnswers();
        title.innerHTML = "T'as fini!"
    }
    
        
        
}

function getCurrentQuestion(){
  const queue: number = completed_questions.length;
  return jsonQuestions[queue];
}

function hideAnswers(){
    const answerButtonList = document.getElementsByClassName("answer");
    const answerButtonListArray = Array.from(answerButtonList);
    for(let i = 0; i < answerButtonListArray.length; i++){
        let button = answerButtonListArray[i] as HTMLElement;
        button.remove();
    }
}

function askForUsername(){
    const div = document.createElement("p");
    div.id = "username-div";
    
    const contentDiv = document.getElementById("content");
    contentDiv?.appendChild(div);
}

startQuiz();