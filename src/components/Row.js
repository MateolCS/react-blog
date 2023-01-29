import React from "react";
import styled from "styled-components";
const Row = ({ guess, currentGuess }) => {
  if (currentGuess) {
    const letters = currentGuess.split("");
    return (
      <StyledRow>
        {letters.map((letter, index) => {
          return <StyledLetter key={index}>{letter}</StyledLetter>;
        })}
        {[...Array(5 - letters.length)].map((_, index) => {
          return <StyledLetter key={index}></StyledLetter>;
        })}
      </StyledRow>
    );
  }

  if (guess)
    return (
      <StyledRow>
        {guess.map((letter, index) => {
          return (
            <StyledLetter key={index} color={letter.color}>
              {letter.key}
            </StyledLetter>
          );
        })}
      </StyledRow>
    );

  return (
    <StyledRow>
      <StyledLetter></StyledLetter>
      <StyledLetter></StyledLetter>
      <StyledLetter></StyledLetter>
      <StyledLetter></StyledLetter>
      <StyledLetter></StyledLetter>
      <StyledLetter></StyledLetter>
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const StyledLetter = styled.div`
  width: 60px;
  height: 60px;
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: 600;
  border: 2px solid #4b4453;
  color: #4b4453;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
`;
