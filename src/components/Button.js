import React from "react";

function Button({display, setDisplay, index, setIndex, data }) {
  return (
    <div>
      {display && (
        <button
          onClick={() => {
            setIndex((prev) => prev + 1);
            setDisplay(false);
          }}
          className="next"
        >
          {index >= data.length - 1 ? "Zakończ" : "Następne"}
        </button>
      )}
    </div>
  );
}

export default Button;
