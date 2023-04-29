import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

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

    answerElement.addEventListener('click', () => {});
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click', skipQuestion);
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
