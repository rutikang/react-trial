import logo from './logo.svg';
import './App.css';

// calculator
import { useState, useRef } from 'react';

function App() {
  
const inputRef = useRef(null);
const resultRef = useRef(0);
const [answer, setAnswer] = useState(0);
const [sign, setSign] = useState('')
//
const add = (e) =>{
  e.preventDefault();
  
  setAnswer(answer + Number(inputRef.current.value))
  setSign('+')
}
const sub = (e) =>{
  e.preventDefault();
  
  setAnswer(answer - Number(inputRef.current.value))
  setSign('-')
}
const div = (e) =>{
  e.preventDefault();
  
  setAnswer(answer / Number(inputRef.current.value))
  setSign('/ ')
}
const mult = (e) =>{
  e.preventDefault();
  
  setAnswer(answer * Number(inputRef.current.value))
  setSign('*')
}
const clear = (e) =>{
  e.preventDefault();
  inputRef.current.value = null
   
}
const clearAll = (e) =>{
  e.preventDefault();
  inputRef.current.value = null
  setAnswer( null)
  setSign()
   
}
  return(
    <>
    <h3>Simple calculator</h3>
    <form>
      <label htmlFor='input'> Input : </label>
      <input 
      ref = {inputRef}
      type='number'
      name='input'
      />
      
      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={div}>Divide</button>
      <button onClick={mult}>Multiply</button>
      <button onClick={clear}>Clear Input</button>
      <button onClick={clearAll}>Clear all</button>

    </form>
    
    <h4>Answer : </h4>
    <div>
    <p ref= {resultRef}>{answer}</p>
    </div>
    </>
  )

}

export default App;
