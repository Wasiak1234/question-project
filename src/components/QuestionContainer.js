import React, { useState } from "react";
import { questions } from "../Questions";
import "./QuestionContainer.css";
import Typist from 'react-typist';

function Questions() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(false);
  let flag = true;

  const checkAnswer = (e) => {
    const target = e.target;
    const answer = questions[index]
      .map((answer) => answer.correctAnswer)
      .join("");

    if (target.textContent === answer) {
      target.classList.add("correctAnswer");
      if (flag) {
        setDisplay(true);
        flag = false;
      }
    }
  };

  if (questions[index]) {
    return (
      <div className="container">
        <div className="questionCounter">#{index + 1}</div>
        {questions[index].map((el) => (
          <div key={el.question} className="question">
            <h1 className="question__header">{el.question}</h1>
            <img className="question__img" src={el.flag} alt="" />
          </div>
        ))}
        {questions[index].map((el) =>
          el.answers.map((answer) => (
            <ul key={answer} className="answers">
              <li onClick={(e) => checkAnswer(e)} className="answers__item">
                {answer}
              </li>
            </ul>
          ))
        )}

        {display && (
          <button
            onClick={() => {
              setIndex((prev) => prev + 1);
              setDisplay(false);
            }}
            className="next"
          >
            {index >= questions.length - 1 ? 'Zakończ' : 'Następne'}
          </button>
        )}
      </div>
    );
  }
  if (index === questions.length) {
    return (
      <div className="container">
        <div className="container__end">
            <Typist >
                Brawo, odgadłeś wszystkie flagi! :)
            </Typist>
        </div>
      </div>
    );
  }
}

export default Questions;
