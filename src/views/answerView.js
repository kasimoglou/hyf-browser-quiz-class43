const questionsNum = 10;
export let score = 0;
let answerSelected = false;

/**
 * Create an Answer element
 * @returns {Element}
 */

import { correctAnswer } from '../pages/questionPage.js';

export const createAnswerElement = (key, answerText, correct) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;

  answerSelected = false;

  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = `SCORE: ${score}/${questionsNum}`;

  element.addEventListener('click', () => {
   
    if(!answerSelected){
      if (key === correct) {
        score++;
        element.style.fontWeight = 'bold';
        correctAnswer(correct);
      } else {
        element.style.backgroundColor = 'red';
        correctAnswer(correct);
      }

      answerSelected = true;

      scoreElement.innerHTML = `Score: ${score}/${questionsNum}`;
    }
  });
  element.setAttribute('dataSet', key);
  return element;
};
