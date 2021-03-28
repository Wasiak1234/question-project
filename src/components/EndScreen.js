import React from "react";
import Typist from "react-typist";

function EndScreen({setIndex}) {
  return (
    <div className="container">
      <div className="container__end">
        <Typist>Brawo, odgadłeś wszystkie flagi! :)</Typist>
        <button onClick={() => setIndex(0)} className="restartButton">Wróć na początek</button>
      </div>
    </div>
  );
}

export default EndScreen;
