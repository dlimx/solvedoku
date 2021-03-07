import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tile from './Tile';
import { getRowColKey } from '../util/util';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  max-width: 724px;
  margin-right: 40px;
  border: 2px solid black;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

function GameBoard({ game, immutable, setPosition, errors }) {
  return (
    <Container>
      {game.map((rowValue, row) => (
        // eslint-disable-next-line react/no-array-index-key
        <Row key={row}>
          {rowValue.map((value, col) => (
            <Tile
              key={getRowColKey({ row, col })}
              editable={!immutable[`${row},${col}`]}
              value={value}
              onChange={(newValue) => setPosition(newValue, { row, col })}
              highlightLeft={col % 3 === 0 && col !== 0}
              highlightTop={row % 3 === 0 && row !== 0}
              hasError={!!errors[getRowColKey({ row, col })]}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
}

GameBoard.propTypes = {
  game: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  immutable: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.bool).isRequired,
  setPosition: PropTypes.func.isRequired,
};

export default GameBoard;
