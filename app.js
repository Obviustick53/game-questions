// @ts-check

import { questions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/ui.js";



const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScoresFinal(quiz.score);
      } else {
        console.log(quiz);
        ui.showCurrentScore(quiz.score)
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
        ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
          quiz.guess(currenChoice);
          renderPage(quiz, ui);
        });
      }
};

function main(){

    const quiz = new Quiz(questions);

    const ui = new UI();

    renderPage(quiz, ui);

}

main();



 