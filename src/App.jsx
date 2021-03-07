import React from 'react';
import styled from 'styled-components';
import Game from './components/Game';

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 40px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1>Solve-doku</h1>
      </header>
      <Game />
    </Container>
  );
}

export default App;
