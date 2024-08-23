export const randomColor = () => {
  const letters = '0123456789ABCDEF';

  const color = [...Array(6)].reduce((acc, current) => acc + letters[Math.floor(Math.random() * 16)], "#");

  return color;
};