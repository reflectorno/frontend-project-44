import gameLogic from '../index.js';

const getRandomNumber = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGame = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameEven = () => {
  gameLogic(task, getGame);
};
export default gameEven;
