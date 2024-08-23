// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// goal app

function FormData(props){

  const [input, setInput] = useState({goal:"", by:""})
  const inputChange = (e) =>{
    setInput({...input, [e.target.name]:e.target.value})
  }

  const goalList = (e) =>{
    e.preventDefault();
    props.updateList(input)
    setInput({goal:"",by:""})
  }
  

  return(
    <form onSubmit={goalList}>
      <label>Goal</label>
      <input
      name='goal'
      placeholder='Enter your goal'
      type='text'
      value = {input.goal}
      onChange={inputChange}
      />
      <label>Achieve by </label>
      <input
      name='by'
      placeholder='By .............'
      type='text'
      value = {input.by}
      onChange={inputChange}
      />
      <button type='submit'>Submit Goal</button>
    </form>
  )
}

function ListData(props){
  return(
    <>
    <h3>My goals </h3>
    <ul>
    {props.goalsList.map((rr)=>(
      <li>{rr.goal} achieved by {rr.by}</li>
    ))
    }
    </ul>
    </>
  )
}

function App() {
  const [goalsList, setGoalsList] = useState([])
    function updLi(goalObj){
      setGoalsList([...goalsList, goalObj])
    }
 return(
  <>
  < FormData updateList={updLi}/>
  < ListData goalsList = {goalsList}/>
  </>
 )
}

export default App;
