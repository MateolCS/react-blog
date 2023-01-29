import React from "react";
import styled from "styled-components";
import Row from "./Row";
const GameGrid = ({ currentGuess, turn, guesses }) => {
  return (
    <GridWrapper>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </GridWrapper>
  );
};

export default GameGrid;

const GridWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 15%);
  grid-gap: 10px;
  margin-top: 20px;
`;
