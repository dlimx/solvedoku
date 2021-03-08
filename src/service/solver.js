/* eslint-disable no-param-reassign */
import { cloneDeep } from 'lodash';
import { validate } from './validator';
import { getRowColKey } from '../util/util';

export const getSolution = (oldPuzzle, immutable) => {
  const puzzle = cloneDeep(oldPuzzle);

  // helper to determine when to wrap
  const getNext = ({ row, col }) => {
    if (col + 1 >= puzzle[0].length) {
      return { row: row + 1, col: 0 };
    }
    return { row, col: col + 1 };
  };

  // backtracking solution generation
  const recurse = ({ row, col }) => {
    let result = false;

    // exit on complete case
    if (row >= puzzle.length) {
      return true;
    }

    // skip starting rows
    if (immutable[getRowColKey({ row, col })]) {
      result = recurse(getNext({ row, col }));
      if (result) {
        return true;
      }
    } else {
      // test all values
      for (let value = 1; value <= puzzle.length; value += 1) {
        puzzle[row][col] = value;

        if (validate(puzzle).valid) {
          result = recurse(getNext({ row, col }));
          if (result) {
            return true;
          }
        }
      }

      // reset
      puzzle[row][col] = 0;
    }

    return false;
  };

  recurse({ row: 0, col: 0 });
  return puzzle;
};
