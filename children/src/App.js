import logo from './logo.svg';
import './App.css';

// calculator
import { useState, useRef } from 'react';


const Button = ({backgroundColor,children}) =>{
  return(
    <button style={{backgroundColor}}>{children}</button>
  )
}

const Alert = ({children}) =>{
  return(
    <div>
      {children}
    </div>
  )
}
  
const DeleteButton = () =>{
  return(
    <Button backgroundColor = 'red'>Delete</Button>
  )
}

function App() {
  return(
    <>
    <Alert>
      <h3>This is an alert</h3>
      <p> Do you want to delete this</p>
      < DeleteButton />
    </Alert>
    </>
  )
  
}
  

export default App;
