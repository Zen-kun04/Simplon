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
function nextQuestion(){
  console.log('si?');
  if(completed_questions.length === jsonQuestions.length){
    title.innerHTML = "T'as fini!"
    for(let i = 0; i < answerButtonListArray.length; i++){
      let button = answerButtonListArray[i] as HTMLElement;
      button.style.backgroundColor = "unset";
      button.style.boxShadow = "unset";
      button.innerText = "";
    }
  }
  for(let question of jsonQuestions){
    
    if(!completed_questions.includes(question)){
      title.innerText = question.title;
      for(let button of answerButtonList){
        let index = answerButtonListArray.indexOf(button);
        button.innerHTML = question.answers[index];
        
      }
      completed_questions.push(question);
    }
  }

}
nextQuestion();
for(let answer of answerButtonList) {
  answer.addEventListener('click', () => {
    console.log("jaskjaksjas");
    nextQuestion();
  });
}