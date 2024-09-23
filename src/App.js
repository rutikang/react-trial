import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Feed } from "./components/Feed";
import { Leftbar } from "./components/Leftbar";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { useState } from "react";


function App() {

  const [mode, setMode] = useState('light')

  const darktheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"} color={'text.primary'}>

      <Navbar />
      <Stack direction={'row'} spacing={1}  >
      <Leftbar setMode={setMode} mode= {mode} />
      <Feed/>
      <Rightbar/>
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
