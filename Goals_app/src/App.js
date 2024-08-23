// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// list goals app

// form
const FormGoal = (props) =>{

  const [input, setInput] = useState({goal:"", by:""});

  const formChange = (e) =>{
    setInput({...input,[e.target.name]:e.target.value})
  }

  const submitForm = (e) =>{
    e.preventDefault();
    props.goalsData(input)
    setInput({goal:"",by:""})
    
  }

  return(
    <form onSubmit={submitForm}>
      <label>Goal</label>     
      <input
        value={input.goal}
        type='text'
        name='goal'
        placeholder='goal'
        onChange={formChange}
      />
      <input
        value={input.by}
        type='text'
        name='by'
        placeholder='by'
        onChange={formChange}
      />
        <button>Submit goal</button>
    </form>
  )

}

// list output
const Result = (props) =>{
    
    return(
      <>
      <h3>List of goals</h3>
      <ul>
          
          {props.goals.map((rr)=>(
              <li key={rr.goal}>{rr.goal} by {rr.by}</li>
            ))}
          
      </ul>
      </>
    )
}


function App() {

  const [goals, setGoals] = useState([])
  function theGoals(goa){setGoals([...goals,goa])}
  
return(
  <>
  < FormGoal goalsData={theGoals} />
  < Result goals={goals}/>
  </>
)
}

export default App;
