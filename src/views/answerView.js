

/**
 * Create an Answer element
 * @returns {Element}
 */

const USER_INTERFACE_ID = 'user-interface';
let score  = 0;

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
   
    if (key === correct) {
      element.style.backgroundColor = 'green';
      score++;
      

    } else {
      element.style.backgroundColor = 'red';

      if (document.querySelector(`li[dataSet="${correct}"]`)) {
        document.querySelector(`li[dataSet="${correct}"]`).style.backgroundColor = 'green';
      }
    }

    
    scoreEl.textContent = `Score: ${score}`;

  }); 

  element.setAttribute('dataSet', key);


  return element;
};
