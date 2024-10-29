import { useState } from 'react';

import Box from '@mui/material/Box';
import { Button, Divider, Typography } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css'

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
    <Box sx={{alignItems:'center', justifyContent:'center', display:'flex', height:'100vh', width:'100%'}}>
      <Box sx={{width:400, bgcolor:'#fafdff', p:2, borderRadius:2, boxShadow:3, border:'0.5px solid #d9ddde'}}>
        <Typography sx={{fontFamily:'roboto', fontSize:25, mb:3}}>Feedback form</Typography>
      <Divider sx={{bgcolor:'gray', mb:4}}/>
    <form className='form' onSubmit={formSub}>
    <label style={{marginBottom:15}} className='form-label'>How good is our service :  {score}</label>
    <input
      type='range'
      min='0'
      max='10'
      value={score}
      onChange={(e)=>setScore(e.target.value)}
      className='form-control'
      
    />
    <label style={{marginBottom:15, marginTop:10}}>Comment</label>
    <textarea
      value = {comment}
      onChange={(e) => setComment(e.target.value)}
      className='form-control'
    />
    <Button sx={{ bgcolor:'#1b92c4', color:'white', mb:5, mt:4,ml:1, width:'90%'}} type='submit'>Submit</Button>
    </form>
    
    </Box>
    </Box>
    
    </>
  )

}

export default App;
