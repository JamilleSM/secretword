import "./GameOver.css";

interface GameOverProps {
  retry: () => void;
}

function GameOver({ retry }: GameOverProps) {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Restart the game</button>
    </div>
  );
}

export default GameOver;
