import React from "react";
import Question from "./Question";

function CheckAnswer({ data, index, setDisplay, flag }) {
  const check = (e) => {
    const target = e.target;
    const answer = data[index].map((answer) => answer.correctAnswer).join("");

    if (target.textContent === answer) {
      target.classList.add("correctAnswer");
      if (flag) {
        setDisplay(true);
        flag = false;
      }
    }
  };
  return (
    <div>
      <Question check={check} />
    </div>
  );
}

export default CheckAnswer;
