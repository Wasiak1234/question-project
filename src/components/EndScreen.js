import React from "react";
import Typist from "react-typist";

function EndScreen({setIndex}) {
  return (
    <div className="container">
      <div className="container__end">
        <Typist>Brawo, odgadłeś wszystkie flagi! :)</Typist>
        <button onClick={() => setIndex(-1)} className="restartButton">Wróć do menu</button>
      </div>
    </div>
  );
}

export default EndScreen;
