import "./StartScreen.css";

interface StartScreenProps {
  startGame: () => void;
}

function StartScreen({ startGame }: StartScreenProps) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Click on the button below to start playing</p>
      <button onClick={startGame}>Start the game</button>
    </div>
  );
}

export default StartScreen;
