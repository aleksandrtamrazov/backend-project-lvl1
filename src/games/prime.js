import { getRandomInteger } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const playingPrime = () => {
  const num = getRandomInteger(1, 10);
  const curAnswer = isPrime(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;

  return [curAnswer, question];
};

export default playingPrime;
