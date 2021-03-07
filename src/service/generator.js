import { Difficulties } from '../constants/constants';

export const getGame = (difficulty = Difficulties.Medium) => {
  return [
    [0, 0, 0, 4, 0, 0, 0, 0, 6],
    [3, 0, 0, 0, 6, 0, 5, 4, 0],
    [0, 0, 0, 0, 0, 3, 0, 2, 7],
    [8, 0, 3, 0, 0, 2, 1, 0, 0],
    [0, 7, 0, 3, 0, 1, 0, 9, 0],
    [0, 0, 6, 7, 0, 0, 2, 0, 5],
    [5, 2, 0, 8, 0, 0, 0, 0, 0],
    [0, 3, 4, 0, 1, 0, 0, 0, 2],
    [9, 0, 0, 0, 0, 7, 0, 0, 0],
  ];
};

export const getEmptyGame = () => {
  return Array.from(new Array(9), () => new Array(9).fill(0));
};
