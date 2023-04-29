import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { score } from '../views/answerView.js';
// import { initWelcomePage } from './welcomePage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      currentQuestion.correct,
      score
    );
    answersListElement.appendChild(answerElement);

    //answerElement.addEventListener('click', () => {});
  }
  // const showResultBtn = document.getElementById(SHOW_RESULT_BUTTON_ID);

  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    // showResultBtn.style.display = 'block';
    result();
  }
  // } else {
  // showResultBtn.style.display = 'none';
  // }

  // document
  //   .getElementById(SHOW_RESULT_BUTTON_ID)
  //   .addEventListener('click', result);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click', skipQuestion);
};

const result = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

   const resultElement = document.createElement('div');
//  resultElement.innerText = `Congratulations on Completing the Quiz!!\nYou got ${score} out of ${quizData.questions.length} questions correct!`;
  if (`${score}` > 7) {
    resultElement.innerText = `Congratulations on Completing the Quiz with ${score} out of ${quizData.questions.length -1}!! 🎉🎉🎉`
  }
  else if (score > 5 && `${score}` < 7) {
    resultElement.innerText = `Nice try on Completing the Quiz with ${score} out of ${quizData.questions.length -1} 👍🏽`
  }
  else if (`${score}` < 5) {
    resultElement.innerText = `You Completed the Quiz with ${score} out of ${quizData.questions.length -1}, you can always try again 😕`
  }
  resultElement.style.fontSize = '2rem'
  // const restartButton = document.createElement('button');
  // restartButton.innerText = 'Restart Quiz';
  // restartButton.addEventListener('click', () => {
  //   initWelcomePage();
  // });

  // resultElement.appendChild(restartButton);
  userInterface.appendChild(resultElement);
};

const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  correctAnswer(currentQuestion.correct);

  setTimeout(nextQuestion, 2000);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex === quizData.questions.length) {
    finishQuiz();

    return;
  }

  initQuestionPage();
};

export const correctAnswer = (correct) => {
  if (document.querySelector(`li[dataSet="${correct}"]`)) {
    document.querySelector(`li[dataSet="${correct}"]`).style.backgroundColor =
      'green';
  }
};
