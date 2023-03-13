import config from './config.json';

const buttonA = document.getElementsByClassName("answer")[0];
let resultImage: MyImage = document.getElementById("result")?.getElementsByTagName("img")[0]! as HTMLImageElement;

interface MyImage{
  src?: string;
}



const questions = config.questions;
for (const question in questions) {
  if (questions.hasOwnProperty(question)) {
    const answers = questions[question];
    console.log(question);
    // for (const answer of answers) {
    //   console.log(answer);
    // }
  }
}