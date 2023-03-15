import config from '../config.json';


// const questions = config.questions;
// for (const question in questions) {
//   if (questions.hasOwnProperty(question)) {
//     const answers = questions[question];
//     console.log(question);
//     // for (const answer of answers) {
//     //   console.log(answer);
//     // }
//   }
// }

interface Question {
    title: string,
    answers: string[],
    correct: number
}


const jsonQuestions: Question[] = config.questions;
console.log(jsonQuestions);


const title = document.getElementById("title")!;
let completed_questions: Object[] = [];

let points = 0;

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

function buttonListener(){
    const answerButtonList = document.getElementsByClassName("answer");
    const answerButtonListArray = Array.from(answerButtonList);
    for(let i = 0; i < answerButtonListArray.length; i++) {
        const answer = answerButtonListArray[i] as HTMLElement;
        answer.addEventListener('click', () => {
          const currentQuestion = getCurrentQuestion();
          
          if(answerButtonListArray.indexOf(answer) === currentQuestion.correct) points++;
          nextQuestion();
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
    title.textContent = question.title;
    for(let answer of question.answers){
        let button: Element = createButton();
        button.textContent = answer;
    }
    colors = ["red", "purple", "green", "blue"];
}

function startQuiz(){
    // buttonListener();
    var i = 0;
    var temps = 5 // en secondes

    function executeQuestion(){
        var quest = jsonQuestions[i];
        loadQuestion(quest);
        var quiz = setInterval(function(){
            temps--;
            console.log(temps);
            
            if(temps === 0){
                hideAnswers();
                console.log("T'as perdu");
                clearInterval(quiz);
                temps = 5;
                i++;
                if(i < jsonQuestions.length){
                    executeQuestion();
                }else{
                    console.log("Quiz terminé");
                    title.innerHTML = "T'as fini!"
                    console.log(points);
                    
                }
                
            }
        }, 1000);
    }
    executeQuestion();
        
        
}
    // nextQuestion();


function getCurrentQuestion(){
  const queue: number = completed_questions.length;
  return jsonQuestions[queue - 1];
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


// askForUsername();
startQuiz();
// startQuiz();

