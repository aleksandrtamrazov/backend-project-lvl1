import { getRandomInteger } from '../utils.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const playingGcd = () => {
  const num1 = getRandomInteger(1, 10);
  const num2 = getRandomInteger(1, 10);
  const curAnswer = getGcd(num1, num2);
  const question = `Question: ${num1} ${num2}`;

  return [curAnswer, question];
};

export default playingGcd;
