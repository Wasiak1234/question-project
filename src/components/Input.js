import React, { useState } from "react";
import Button from "./Button";
import "./Input.css";

function Input() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [disabledOne, setDisabledOne] = useState(false);
  const [disabledTwo, setDisabledTwo] = useState(false);
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const handleCheckedOne = () => {
    setCheckedOne(true);
    setCheckedTwo(false);
    setDisabledOne(false);
    setDisabledTwo(true);
  };

  const handleCheckedTwo = () => {
    setCheckedTwo(true);
    setCheckedOne(false);
    setDisabledTwo(false);
    setDisabledOne(true);
  };

  const handleChangeOne = (e) => {
    setValueOne(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setValueTwo(e.target.value);
  };

  return (
    <>
      <div className="rectangle">
        <Button
          checkedOne={checkedOne}
          setValueOne={setValueOne}
          setValueTwo={setValueTwo}

        />
      </div>
      <div className="rectangle">
        <input
          type="radio"
          onChange={handleCheckedOne}
          checked={checkedOne}
          className="radio"
        />
        <input
          type="text"
          onChange={handleChangeOne}
          value={valueOne}
          disabled={disabledOne}
          className="text"
        />
      </div>
      <div className="rectangle">
        <input
          type="radio"
          onChange={handleCheckedTwo}
          checked={checkedTwo}
          className="radio"
        />
        <input
          type="text"
          onChange={handleChangeTwo}
          value={valueTwo}
          disabled={disabledTwo}
          className="text"
        />
      </div>
    </>
  );
}

export default Input;
