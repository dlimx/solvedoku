import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import GameBoard from './GameBoard';
import { getGame } from '../service/generator';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

function Game() {
  const [initialGame, setInitialGame] = useState(getGame());
  const [game, setGame] = useState(initialGame);
  const [immutable, setImmutable] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setGame(initialGame);

    const newImmutable = {};

    initialGame.forEach((rowValue, row) => {
      rowValue.forEach((value, col) => {
        if (value !== 0) {
          newImmutable[`${row},${col}`] = true;
        }
      });
    });

    setImmutable(newImmutable);
  }, [initialGame]);

  const setPosition = useCallback(
    (value, { row, col } = {}) => {
      if (immutable[`${row},${col}`]) return;
      const newGame = [...game];
      newGame[row] = [...newGame[row]];
      newGame[row][col] = value;
      setGame(newGame);
    },
    [game, immutable],
  );

  return (
    <Container>
      <GameBoard
        game={game}
        immutable={immutable}
        setPosition={setPosition}
        errors={errors}
      />
      <Controls
        game={game}
        immutable={immutable}
        initialGame={initialGame}
        setErrors={setErrors}
        setGame={setGame}
        setInitialGame={setInitialGame}
      />
    </Container>
  );
}

export default Game;
