import gameLogic from '../index.js';

const getRandomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;
const task = 'What number is missing in the progression?';

const getGame = () => {
  const progressionLength = getRandomNumber(5, 10);
  const firstNum = getRandomNumber(0, 10);
  const stepOfProgression = getRandomNumber(1, 10);
  const missNum = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + i * stepOfProgression);
  }
  const correctAnswer = progression[missNum];
  progression[missNum] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const gameProgression = () => {
  gameLogic(task, getGame);
};

export default gameProgression;
