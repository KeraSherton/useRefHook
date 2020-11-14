import React, { useState, useRef } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const componentRef = useRef();
  const toggleCounter = () => setIsVisible(!isVisible);
  const asyncClick = () =>
    setTimeout(() => {
      if (componentRef.current) {
        setCounter((prevValue) => prevValue + 1);
      }
    }, 1000);

  return (
    <div ref={componentRef}>
      {isVisible ? (
        <div>
          <p> {counter} </p>
          <button onClick={asyncClick}> Add click </button>
          <button onClick={toggleCounter}>Hide counter</button>
        </div>
      ) : (
        <button onClick={toggleCounter}>Show counter</button>
      )}
    </div>
  );
};
export default Counter;
