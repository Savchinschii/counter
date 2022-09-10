import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    let [display, setDisplay] = useState(0);
    const incrementHandler = () => {
        setDisplay(++display)
    }
    const resetHandler = () => {
        setDisplay(0)
    }
  return (
      <div>
      <Counter display={display} incrementHandler={incrementHandler} resetHandler={resetHandler} />
      </div>
  );
}

export default App;
