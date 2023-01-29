import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [history, setHistory] = useState([]);

  const formatGuess = () => {
    const solutionArray = [...solution];
    const formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "#b0a8b9" };
    });

    formattedGuess.forEach((letter, index) => {
      if (letter.key === solutionArray[index]) {
        letter.color = "#008f7a";
        solutionArray[index] = null;
      }
    });

    formattedGuess.forEach((letter) => {
      if (solutionArray.includes(letter.key) && letter.color !== "#008f7a") {
        letter.color = "#f9f871";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }

    setGuesses((prev) => {
      let newGuesses = [...prev];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prev) => {
      return [...prev, currentGuess];
    });

    setTurn((prev) => {
      return prev + 1;
    });

    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        return;
      }

      if (history.includes(currentGuess)) {
        return;
      }

      if (currentGuess.length !== 5) {
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { currentGuess, handleKeyUp, turn, guesses, isCorrect };
};

export default useWordle;
