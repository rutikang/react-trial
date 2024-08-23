// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// feedback form

function App() {

  const [score, setScore] = useState(10)
  const [comment, setComment] = useState("")

  const formSub = (e) =>{
      e.preventDefault();
      
    if (Number(score) < 5 && comment.length < 10 ){
      alert("Please provide a reason for the low score")
      return;
    }
    setScore(10)
    setComment("")

  }
  return(
    <>
    <h2>Feedback form</h2>
    <form onSubmit={formSub}>
    <label>How good is our service: {score}</label>
    <input
      type='range'
      min='0'
      max='10'
      value={score}
      onChange={(e)=>setScore(e.target.value)}
    />
    <label>Comment</label>
    <textarea
      value = {comment}
      onChange={(e) => setComment(e.target.value)}
    />
    <button type='submit'>Submit</button>
    </form>
    
    
    </>
  )

}

export default App;
