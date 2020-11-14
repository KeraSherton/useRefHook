import React, { useRef, useState, useEffect } from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const textInput = useRef();
  const nameField = useRef();

  const toggleCounter = () => setIsVisible(!isVisible);
  const focusInput = () => textInput.current.focus();
  const setNameFunct = () => setName(textInput.current.value);
  const addEx = () => setName((prevValue) => (prevValue += "!"));
  const counterVisibility = isVisible ? <Counter /> : null;

  return (
    <div className="App">
      <input ref={textInput} type="text" onChange={setNameFunct} />
      <button onClick={focusInput}>Focus</button>
      <p ref={nameField} onClick={addEx}>
        Hello {name}
      </p>
      <button onClick={toggleCounter}>Hide counter</button>
      {counterVisibility}
    </div>
  );
}
