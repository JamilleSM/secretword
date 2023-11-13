import { FormEvent, useState, useRef } from "react";
import "./Game.css";

interface GameProps {
  verifyLetter: (letter: string) => void;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}

function Game({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}: GameProps) {
  const [letter, setLetter] = useState<string>("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    verifyLetter(letter);
    setLetter("");
    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  };
  return (
    <div className="game">
      <p className="points">
        <span>Punctuation: {score}</span>
      </p>
      <h1>Guess the word:</h1>
      <h3 className="tip">
        Tip about the word <span>{pickedCategory}</span>
      </h3>
      <p>You still have {guesses} attempts</p>
      <div className="wordContainer">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span key={index} className="letter">
              {letter}
            </span>
          ) : (
            <span key={index} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Try to guess a letter of the word</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(text) => setLetter(text.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>To play</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letters already used</p>
        {wrongLetters.map((letters, index) => (
          <span key={index}>{letters}, </span>
        ))}
      </div>
    </div>
  );
}

export default Game;
