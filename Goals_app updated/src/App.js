import { useState } from 'react';
import { ListData } from './ListData';
import { FormData } from './FormData';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Stack } from '@mui/material';


function App() {
  const [goalsList, setGoalsList] = useState([])
    function updLi(goalObj){
      setGoalsList([...goalsList, goalObj])
    }
 return(
  <>
  <Stack direction={'row'} spacing={1}>
  < FormData updateList={updLi}/>
  < ListData goalsList = {goalsList}/>
  </Stack>
  </>
 )
}

export default App;
