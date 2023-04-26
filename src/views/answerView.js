/**
 * Create an Answer element
 * @returns {Element}
 */

let score = 0;
let answerSelected = false;
let questionsNum = 10;

export const createAnswerElement = (key, answerText, correct) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  element.addEventListener('click', () => {
    if (answerSelected) {
      return;
    }
    answerSelected = true;
    if (key === correct) {
      score++;
      element.style.backgroundColor = 'green';
    } else {
      element.style.backgroundColor = 'red';
      if (document.querySelector(`li[dataSet="${correct}"]`)) {
        document.querySelector(
          `li[dataSet="${correct}"]`
        ).style.backgroundColor = 'green';
      }
    }
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Score: ${score}/${questionsNum}`;
    answerSelected = false;
  });
  element.setAttribute('dataSet', key);
  return element;
};
