/* eslint-disable no-param-reassign */
import { getRowColKey } from '../util/util';

const getFilledArray = (size = 9) => {
  return new Array(size + 1).fill(null);
};

// check for total count
const validateRow = (filled, size = 9) => {
  let total = 0;
  for (let i = 1; i < filled.length; i += 1) {
    if (filled[i]) {
      total += 1;
    }
  }

  return total !== size;
};

export const validate = (puzzle, complete = false) => {
  const size = puzzle.length;
  const errors = {};
  let isComplete = true;
  let isValid = true;
  let filled;
  let value;

  // util function for checking coords
  const checkValue = (filledArray, { row, col }) => {
    value = puzzle[row][col];
    if (!value) {
      isComplete = false;
    } else if (filledArray[value]) {
      isValid = false;

      // collect errors
      errors[filledArray[value]] = true;
      errors[getRowColKey({ row, col })] = true;
    } else {
      filledArray[value] = getRowColKey({ row, col });
    }
  };

  // check rows
  for (let row = 0; row < puzzle.length; row += 1) {
    filled = getFilledArray();

    for (let col = 0; col < puzzle[0].length; col += 1) {
      checkValue(filled, { row, col });
    }

    if (!validateRow(filled, size)) {
      isComplete = false;
    }
  }

  // check columns
  for (let col = 0; col < puzzle[0].length; col += 1) {
    filled = getFilledArray();

    for (let row = 0; row < puzzle.length; row += 1) {
      checkValue(filled, { row, col });
    }

    if (!validateRow(filled, size)) {
      isComplete = false;
    }
  }

  const squareSize = size / 3;

  // check each of the squares
  for (let squareRow = 0; squareRow < 3; squareRow += 1) {
    for (let squareCol = 0; squareCol < 3; squareCol += 1) {
      filled = getFilledArray();

      for (let deltaRow = 0; deltaRow < squareSize; deltaRow += 1) {
        for (let deltaCol = 0; deltaCol < squareSize; deltaCol += 1) {
          checkValue(filled, {
            row: squareRow * squareSize + deltaRow,
            col: squareCol * squareSize + deltaCol,
          });
        }
      }

      if (!validateRow(filled, size)) {
        isComplete = false;
      }
    }
  }

  return {
    valid: isValid,
    errors,
    complete: isComplete,
  };
};
