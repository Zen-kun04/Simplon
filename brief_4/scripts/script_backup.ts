import config from '../config.json';
const confirmImg = require('../images/confirm.png');

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



const jsonQuestions: any = config.questions;
const answerClass: HTMLElement | null = document.querySelector(".answer");
const answerButtonList = document.getElementsByClassName("answer");
const answerButtonListArray = Array.from(answerButtonList);
const title = document.getElementById("title")!;
let completed_questions: Object[] = [];
let old_content: string = "";
let startGame: boolean = false;
let points: number = 0;
let username: string = "";

function nextQuestion(){
  if(completed_questions.length === jsonQuestions.length){
    title.innerHTML = "T'as fini!"
    for(let i = 0; i < answerButtonListArray.length; i++){
      let button = answerButtonListArray[i] as HTMLElement;
      button.style.backgroundColor = "unset";
      button.style.boxShadow = "unset";
      button.innerText = "";
    }
    console.log(points);
    
  }else{
    for(let question of jsonQuestions){
      
      if(!completed_questions.includes(question)){
        title.innerText = question.title;   
        console.log(answerButtonList);
           
        for(let index in answerButtonListArray){
          let button = answerButtonListArray[index] as HTMLElement;        
          if(button){
            button.innerHTML = question.answers[index];
            button.style.display = "block !important";
            console.log(question.answers[index]);
            console.log(index);
          }
          
          
          
          
        }
        completed_questions.push(question);
        break;
      }
    }
  }
  

}

function getCurrentQuestion(){
  const queue: number = completed_questions.length;
  return jsonQuestions[queue - 1];
}

function askForUsername(){
  let title: Element | null = document.getElementById("title");
  if(title){
    title.innerHTML = "Entre ton meilleur blaze";
  }
  const content: HTMLElement | null = document.getElementById("content");
  if(content){
    old_content = content.innerHTML;
    content.innerHTML = `
    <p id='error'></p>
    <div id='username_content'>
      <input type='text' id='pseudo'>
      <img src='${confirmImg}' id='pseudo_confirm'>
    </div>
    `;
    const input = document.getElementById("pseudo") as HTMLInputElement;
    const pseudo_content: HTMLElement | null = document.getElementById("username_content");
    if(pseudo_content){
      pseudo_content.style.display = "flex";
      pseudo_content.style.justifyContent = "center";
    }
    content.style.paddingTop = "15px";
    if(input){
      input.style.height = "26px";
      input.style.marginRight = "15px";
      const confirm_button_pseudo: HTMLElement | null  = document.getElementById("pseudo_confirm");
      if (confirm_button_pseudo){
        confirm_button_pseudo.addEventListener('click', () => {
          const error_message: HTMLElement | null = document.getElementById("error");
          if(error_message){
            
            if(input?.value !== ""){
              username = input?.value;
              error_message.innerText = "";
              console.log(`Your username is ${username}`);
              content.innerHTML = old_content;
              startButtonListener();
              nextQuestion();
            }else{
              
                content.style.display = "flex";
                content.style.flexDirection = "column";
                content.style.alignItems = "center";
                error_message.style.width = "100%";
                error_message.style.textAlign = "center";
                error_message.style.color = "red";
                error_message.innerText = "Error";
                confirm_button_pseudo.style.width = "30px";
            }
          }
        })
      }

    
    }
    
    
  }
}

function startButtonListener(){
  for(let i = 0; i < answerButtonListArray.length; i++) {
    const answer = answerButtonListArray[i] as HTMLElement;
    answer.addEventListener('click', () => {
      const currentQuestion = getCurrentQuestion();
      
      if(answerButtonListArray.indexOf(answer) === currentQuestion.correct) points++;
      nextQuestion();
    });
  }
}

// askForUsername()
nextQuestion()