// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//simple calc


function App() {

  const [input, setInput] = useState("");

  const subForm = (e)=>{
    e.preventDefault();
    console.log(input);
    alert("Hello "+ input);
    setInput("");
  }

return(
  <form onSubmit={subForm}>
    <label htmlFor='name'>Name</label>
    <input
      placeholder='name'
      id='name'
      type='text'
      
      value={input}
      onChange={(e)=> setInput(e.target.value)}
    />
    <button disabled= {!input} type='submit'>Submit</button>

  </form>
)
}

export default App;
