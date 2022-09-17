import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";


function App() {
    let [display, setDisplay] = useState(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setDisplay(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(display))
    }, [display])

    const incrementHandler = () => {
        setDisplay(++display)
    }
    const resetHandler = () => {
        setDisplay(0)
    }
    return (
        <div>
            <Counter display={display}
                     incrementHandler={incrementHandler}
                     resetHandler={resetHandler}
            />
        </div>
    );
}

export default App;
