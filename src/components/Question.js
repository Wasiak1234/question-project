import React from "react";

function Question({ index, data, setDisplay, flag }) {
  const check = (e, indexes, array) => {
    const target = e.target;
    const answer = data[index].map((answer) => answer.correctAnswer).join("");
    const copyArray = array;

    if (copyArray[indexes] === answer) {
      target.classList.add("correctAnswer");
      if (flag) {
        setDisplay(true);
        flag = false;
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="questionCounter">#{index + 1}</div>
        {data[index].map((el) => (
          <div key={el.question} className="question">
            <h1 className="question__header">{el.question}</h1>
            <img className="question__img" src={el.flag} alt="" />
          </div>
        ))}
        {data[index].map((el) =>
          el.answers.map((answer, index, array) => (
            <ul key={answer} className="answers">
              <li
                onClick={(e) => check(e, index, array)}
                className="answers__item"
              >
                {answer}
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default Question;
