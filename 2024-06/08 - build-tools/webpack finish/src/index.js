import './styles/main.scss';
import magicWand from './assets/magic-wand.svg';
import {randomGradient} from "./randomGradient.js";

const body = document.querySelector('body');
const button = document.querySelector('button');

const image = document.querySelector('#wand');
image.src = magicWand;

button.addEventListener('click', () => {
  body.style.background = randomGradient();
});