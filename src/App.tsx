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

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(display))
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setDisplay(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setDisplay(0)
    }
    return (
        <div>
            <Counter display={display}
                     incrementHandler={incrementHandler}
                     resetHandler={resetHandler}
                     setToLocalStorageHandler={setToLocalStorageHandler}
                     getFromLocalStorageHandler={getFromLocalStorageHandler}
                     clearLocalStorageHandler={clearLocalStorageHandler}
            />
        </div>
    );
}

export default App;
