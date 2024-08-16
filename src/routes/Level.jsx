import { useParams } from "react-router-dom";

export function Level() {
  const { levelId } = useParams();

  return (
    <div id={levelId} className="max-w-screen-2xl mx-auto pt-20 pb-20 px-4">
      <h1 className="text-5xl">Level {levelId}</h1>
      <p>Level is a component that displays the level {levelId} of the game.</p>
    </div>
  );
}
