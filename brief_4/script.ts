import config from './config.json';

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