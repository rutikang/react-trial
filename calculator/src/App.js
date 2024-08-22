import './App.css';

import {useState, useRef } from 'react';
function App() {
  const resultRef = useRef(null);
  const inputRef = useRef(null);

  const [result, setResult] = useState(0);

  const add = (e) =>{
      e.preventDefault();
      setResult((result) =>result + Number(inputRef.current.value))
  }

  const minus = (e) =>{
    e.preventDefault();
    setResult((result) =>result - Number(inputRef.current.value))
}

const div = (e) =>{
  e.preventDefault();
  setResult((result) =>result / Number(inputRef.current.value))
}

const mul = (e) =>{
  e.preventDefault();
  setResult((result) =>result * Number(inputRef.current.value))
}

const removeInput = (e) =>{
  e.preventDefault();
  inputRef.current.value = 0
}
const resetResult = (e) =>{
  e.preventDefault();
  setResult((preVal)=> preVal * 0);
}

  return (
    <div className="App">
      <h1>Simple calculator</h1>

      <p ref= {resultRef}>{result}</p>

      <form>
        <input 
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Input a number'
        />
        <button onClick={add}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={div}>Divide</button>
        <button onClick={mul}>Multiply</button>
        <button onClick={removeInput}>removeInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>

    </div>
  );
}

export default App;
