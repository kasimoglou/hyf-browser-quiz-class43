/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText, correct) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.addEventListener('click', () => {
    const answerEl = document.querySelectorAll('li');
    answerEl.forEach((el) => {
      el.style.fontWeight = '';
      el.style.backgroundColor = '';
    });
    element.style.fontWeight = 'bold';
    const score = 0;
    if (key === correct) {
      element.style.backgroundColor = 'green';
      score++;
    } else {
      element.style.backgroundColor = 'red';
    }
  });

  return element;
};
