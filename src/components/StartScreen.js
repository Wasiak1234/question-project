import React from "react";

function StartScreen({ setIndex }) {
  return (
    <div className="container--start">
      <div className="container__start">
        <button onClick={() => setIndex(0)} className="startButton">Start</button>
      </div>
    </div>
  );
}

export default StartScreen;
