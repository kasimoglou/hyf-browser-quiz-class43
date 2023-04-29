const questionsNum = 10;
let score = 0;
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
  scoreElement.innerHTML = `Score: ${score}/${questionsNum}`;

  element.addEventListener('click', () => {
    if (!answerSelected) {
      const answerEls = document.querySelectorAll('li');
      answerEls.forEach((el) => {
        if (el.getAttribute('dataSet') !== correct) {
          el.style.pointerEvents = 'none';
        }
        el.style.fontWeight = '';
        el.style.backgroundColor = '';
      });

      element.style.fontWeight = 'bold';

      if (key === correct) {
        score++;

        element.style.backgroundColor = 'green';
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
