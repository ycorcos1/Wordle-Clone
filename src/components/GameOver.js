import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "You correctly guessed the word" : "You failed"}
      </h3>
      <h1>Correct Word: {correctWord.toUpperCase(0)}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
