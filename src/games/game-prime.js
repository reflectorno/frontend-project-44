import gameLogic from '../index.js';

const getRandomNumber = (min = 2, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gamePrime = () => {
  gameLogic(task, getGame);
};

export default gamePrime;
