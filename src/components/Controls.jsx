import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { validate } from '../service/validator';
import { getGame } from '../service/generator';
import { getSolution } from '../service/solver';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Button = styled.button`
  color: ${(props) => (props.solid ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  height: 60px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  background-color: ${(props) => (props.solid ? 'palevioletred' : 'white')};
  cursor: pointer;
`;

function Controls({
  game,
  setGame,
  setErrors,
  initialGame,
  immutable,
  setInitialGame,
}) {
  const [message, setMessage] = useState('');

  const restartGame = (e) => {
    e.preventDefault();
    setErrors({});
    setInitialGame(getGame());
  };

  const validateGame = (e) => {
    e.preventDefault();
    const result = validate(game);

    setErrors(result.errors);
    if (result.valid) {
      if (!result.complete) {
        setMessage("You're doing great, keep going!");
      } else {
        setMessage("Congratulations, you've won!");
      }
    } else {
      setMessage('There was an error in your solution, try again!');
    }
  };

  const solveGame = (e) => {
    e.preventDefault();
    const solvedGame = getSolution(initialGame, immutable);
    setGame(solvedGame);
    setMessage("Here's one solution!");
  };

  return (
    <Container>
      {/* <Button>Generate New Puzzle</Button> */}
      <Button onClick={restartGame}>Restart</Button>
      <Button onClick={solveGame}>Find Solution</Button>
      <Button solid onClick={validateGame}>
        Validate
      </Button>
      <p>{message}</p>
    </Container>
  );
}

Controls.propTypes = {
  game: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  immutable: PropTypes.objectOf(PropTypes.bool).isRequired,
  initialGame: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    .isRequired,
  setInitialGame: PropTypes.func.isRequired,
  setGame: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
};

export default Controls;
