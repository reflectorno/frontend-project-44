import gameLogic from '../index.js';

const getRandomNumber = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;
const task = 'What is the result of the expression?';

const calcExp = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const getOperator = () => {
  const randomOperator = ['+', '-', '*'];
  const arrIndex = getRandomNumber(0, randomOperator.length - 1);
  return randomOperator[arrIndex];
};

const getGame = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = getOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(calcExp(operand1, operand2, operator));
  return [question, correctAnswer];
};

const gameCalc = () => {
  gameLogic(task, getGame);
};

export default gameCalc;
