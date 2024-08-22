// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const ToDo = (props) =>{
  return(
  <tr>
    <td>{props.id}</td>
    <td><input /></td>
    <td>{props.time_alloc}</td>
  </tr>
  )
}




function App() {

  const [todo, setTodo] = useState([
    {
      id : 23,
      time_alloc : '3:30'
    },
    {
      id : 34,
      time_alloc : '5:30'
    }
  ]);
  
  // 
  const reverseTodo = () =>{
    setTodo( ([...todo]).reverse() );
  }
  // const tt = todo.map((dd,index)=>{
  //   const id = dd.id;
  //   const time_a = dd.time_alloc;

  //   return(

  //   )
  // })
 return(
  <>
  <button onClick={reverseTodo}>Reverse</button>
<tbody>
  {
    todo.map((tt, index) =>(
      < ToDo key = {tt.id} id={tt.id} time_alloc={tt.time_alloc}/>
    ))
  }
</tbody>
</>
 )
}

export default App;
