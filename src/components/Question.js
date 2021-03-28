import React from "react";

function Question({ index, check, data}) {
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
          el.answers.map((answer) => (
            <ul key={answer} className="answers">
              <li onClick={(e) => check(e)} className="answers__item">
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
