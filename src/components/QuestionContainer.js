import React, { useState } from "react";
import { data } from "../data";
import "./QuestionContainer.css";
import Question from "./Question";
import Button from "./Button";
import EndScreen from "./EndScreen";
import CheckAnswer from "./CheckAnswer";

function Questions() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(false);
  let flag = true;
  if (data[index]) {
    return (
      <>
        <Question
          index={index}
          display={display}
          setIndex={setIndex}
          data={data}
        />
        <Button
          display={display}
          setDisplay={setDisplay}
          index={index}
          setIndex={setIndex}
          data={data}
        />

        <CheckAnswer
          data={data}
          index={index}
          setDisplay={setDisplay}
          flag={flag}
        />
      </>
    );
  }
  if (index === data.length) {
    return <EndScreen />;
  }
}

export default Questions;
