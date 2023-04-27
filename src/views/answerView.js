

/**
 * Create an Answer element
 * @returns {Element}
 */

const USER_INTERFACE_ID = 'user-interface';

export const createAnswerElement = (key, answerText, correct) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;

  let selected = false;
  let score = 0
  const scoreElement = document.getElementById('score');

  element.addEventListener('click', () => {

     
    if (!selected) {
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
        scoreElement.innerHTML = `Score: ${score}/10`;
       
      } else {
        element.style.backgroundColor = 'red';

        if (document.querySelector(`li[dataSet="${correct}"]`)) {
          document.querySelector(`li[dataSet="${correct}"]`).style.backgroundColor = 'green';
          scoreElement.innerHTML = `Score: ${score}/10`;
        }
    }
  
  
  selected = true;

  }
  }); 
  element.setAttribute('dataSet', key);
  return element;
};


