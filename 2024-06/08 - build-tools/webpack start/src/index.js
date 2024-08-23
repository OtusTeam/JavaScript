import {randomGradient} from "./randomGradient.js";

const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  body.style.background = randomGradient();
})