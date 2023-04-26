

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
  
  element.addEventListener('click', () => {
    let score = 0
     
    if(!selected){
    const answerEls = document.querySelectorAll('li');
    const scoreElement = document.getElementById('score');
    answerEls.forEach((el) => {
      if(el.getAttribute('dataset') !== correct){
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

