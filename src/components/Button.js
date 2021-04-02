import React from "react";
import './Button.css'

function Button({setValueOne, setValueTwo, checkedOne}) {


    const handleClickReverse = () => {
      if(checkedOne) {
        setValueOne(prev => prev.split('').reverse().join(''))
      } else {
        setValueTwo(prev => prev.split('').reverse().join(''))

      }
    }

    const handleClickUpper = () => {
      if(checkedOne) {
        setValueOne(prev => prev.toUpperCase())
      } else {
        setValueTwo(prev => prev.toUpperCase())
      }
    }


  return (
    <div className="buttonWrapper">
      <button onClick={handleClickReverse} className="btn">Odwróć</button>
      <button onClick={handleClickUpper} className="btn">Wielkie litery</button>
    </div>
  );
}

export default Button;
