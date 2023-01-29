import React from "react";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import GameGrid from "../components/GameGrid";
import getDateFormatted from "../utils/getDateFormatted";
import styled from "styled-components";
import useFetchWord from "../hooks/useFetchWord";
const Wordle = () => {
  const todaysWord = useFetchWord();

  const { currentGuess, handleKeyUp, turn, guesses, isCorrect } =
    useWordle(todaysWord);

  const [alreadyPlayed, setAlreadyPlayed] = useState(false);
  const [displayWinMessage, setDisplayWinMessage] = useState(false);
  const [displayLoseMessage, setDisplayLoseMessage] = useState(false);

  useEffect(() => {});

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    const wasPlayed = localStorage.getItem("wordle");

    if (wasPlayed) {
      if (wasPlayed === getDateFormatted()) {
        setAlreadyPlayed(true);
      }
    }

    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyUp);
      localStorage.setItem("wordle", getDateFormatted());
      setDisplayWinMessage(true);
    }

    if (!isCorrect && turn > 5) {
      window.removeEventListener("keyup", handleKeyUp);
      setDisplayLoseMessage(true);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, isCorrect, turn]);

  if (displayWinMessage) {
    return (
      <Layout>
        <Message>Congratulations on guessing correctly!</Message>
      </Layout>
    );
  }

  if (displayLoseMessage) {
    return (
      <Layout>
        <Message>
          Sorry, you ran out of guesses! Solution was {todaysWord}
        </Message>
      </Layout>
    );
  }
  return (
    <Layout>
      {alreadyPlayed ? (
        <Message>
          Looks like You've played it today! Come back tomorrow :)
        </Message>
      ) : (
        <GameGrid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      )}
    </Layout>
  );
};

export default Wordle;

const Message = styled.h1`
  color: #296073;
  font-size: 3rem;
  text-align: center;
  margin-top: 20%;
`;
