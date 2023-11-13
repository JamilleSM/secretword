import "./GameOver.css";

interface GameOverProps {
  retry: () => void;
  score: number;
}

function GameOver({ retry, score }: GameOverProps) {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>
        Your score was: <span>{score}</span>
      </h2>
      <button onClick={retry}>Restart the game</button>
    </div>
  );
}

export default GameOver;
