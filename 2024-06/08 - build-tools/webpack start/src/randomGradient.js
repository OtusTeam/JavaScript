import {randomColor} from "./randomColor.js";
import {gradient} from "./gradient.js";

export const randomGradient = () => {
  const colorStart = randomColor();
  const colorFinish = randomColor();

  return gradient(colorStart, colorFinish);
}