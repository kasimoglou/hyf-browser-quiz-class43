import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
document.title = 'General Knowledge Quiz';
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
   <h3 class = "welcome">Welcome To Our</h3>
    <h2 class ="title">General Knowledge Quiz <img src="favicon.png" alt="Favicon" class="favicon" width=45 height=45></h2>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
let favicon = document.querySelector("link[rel~='icon']");
if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  document.head.appendChild(favicon);
}
favicon.href = 'favicon.png';
