export const getRandomNb = (min = 100, max = 999) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
