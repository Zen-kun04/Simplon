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



const jsonQuestions: any = config.questions;
console.log(jsonQuestions);

const answerButtonList = document.getElementsByClassName("answer");
const answerButtonListArray = Array.from(answerButtonList);
const title = document.getElementById("title")!;
let completed_questions: Object[] = [];

let points = 0;

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
    
  }
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

function getCurrentQuestion(){
  const queue: number = completed_questions.length;
  return jsonQuestions[queue - 1];
}

nextQuestion();
for(let i = 0; i < answerButtonListArray.length; i++) {
  const answer = answerButtonListArray[i] as HTMLElement;
  answer.addEventListener('click', () => {
    const currentQuestion = getCurrentQuestion();
    
    if(answerButtonListArray.indexOf(answer) === currentQuestion.correct) points++;
    nextQuestion();
  });
}