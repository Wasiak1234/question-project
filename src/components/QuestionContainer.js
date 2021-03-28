import React, { useState } from "react";
import { data } from "../data";
import "./QuestionContainer.css";
import Question from "./Question";
import EndScreen from "./EndScreen";
import StartScreen from "./StartScreen";

function Questions() {
  const [index, setIndex] = useState(-1);
  const [display, setDisplay] = useState(false);
  let flag = true;

  if(index === -1) {
      return <StartScreen setIndex={setIndex}/>
  }

  if (data[index]) {
    return (
      <>

        <Question
          index={index}
          display={display}
          setIndex={setIndex}
          data={data}
          setDisplay={setDisplay}
          flag={flag}
        />

        
      </>
    );
    
  }
  if (index === data.length) {
    return <EndScreen setIndex={setIndex}/>;
  }
}

export default Questions;
