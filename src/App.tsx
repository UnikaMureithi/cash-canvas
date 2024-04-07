import React from 'react';
import Button from '@mui/material/Button';
import theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      
      {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      >

      <ThemeProvider theme={theme}><Button variant="contained">Hello World</Button></ThemeProvider>

      </Box> */}
      <br/><br/><br/>
      
      <Contact/>

    </div>
  );
}

export default App;
