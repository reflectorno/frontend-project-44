import gameLogic from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
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
