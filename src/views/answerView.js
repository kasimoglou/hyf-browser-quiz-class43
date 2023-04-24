/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.addEventListener('click', () => {
    const answerEl = document.querySelectorAll("li")
    answerEl.forEach((el) => {
el.style.fontWeight = ""
      el.style.backgroundColor = ""
    }) 
    element.style.fontWeight = "bold"
    element.style.backgroundColor = "#bde0fe"
    
     const event = new CustomEvent('answerSelected', { detail: { key, answerText } });
    element.dispatchEvent(event); 
})
  return element;
};

