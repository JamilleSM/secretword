import "./Game.css";

interface GameProps {
  verifyLetter: () => void;
}

function Game({ verifyLetter }: GameProps) {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>End of game</button>
    </div>
  );
}

export default Game;
