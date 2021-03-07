import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 76px;
  width: ${(props) => (props.highlightLeft ? '80px' : '80px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  font-size: 24px;
  cursor: default;
  color: palevioletred;
  border-left: ${(props) =>
    props.highlightLeft ? '4px solid black' : '2px solid black'};
  border-top: ${(props) =>
    props.highlightTop ? '4px solid black' : '2px solid black'};
  background-color: #d9d9d9;
  font-weight: bold;
`;

const EditableContainer = styled.input`
  height: 74px;
  width: ${(props) => (props.highlightLeft ? '74px' : '74px')};
  border: 2px solid black;
  text-align: center;
  font-size: 24px;
  border-left: ${(props) =>
    props.highlightLeft ? '4px solid black' : '2px solid black'};
  border-top: ${(props) =>
    props.highlightTop ? '4px solid black' : '2px solid black'};
  background-color: ${(props) => (props.hasError ? '#ff000022' : 'white')};
  font-weight: bold;
`;

function Tile({
  value,
  editable,
  onChange,
  highlightLeft,
  highlightTop,
  hasError,
}) {
  if (editable) {
    const wrappedOnChange = (event) => {
      let newValue = 0;
      const test = event.target.value[event.target.value.length - 1];
      if (test) {
        try {
          newValue = parseInt(test, 10);
          if (Number.isNaN(newValue)) {
            newValue = 0;
          }
        } catch (error) {
          newValue = 0;
        }
      }
      onChange(newValue);
    };
    return (
      <EditableContainer
        highlightLeft={highlightLeft}
        highlightTop={highlightTop}
        value={value}
        onChange={wrappedOnChange}
        hasError={hasError}
      />
    );
  }
  return (
    <Container
      highlightLeft={highlightLeft}
      highlightTop={highlightTop}
      hasError={hasError}
    >
      {value}
    </Container>
  );
}

Tile.propTypes = {
  value: PropTypes.number.isRequired,
  editable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  highlightLeft: PropTypes.bool.isRequired,
  highlightTop: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default Tile;
