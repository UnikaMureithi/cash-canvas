import React from 'react';
import Button from '@mui/material/Button';
import theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Hero from './components/Hero';


function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      
      {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      >

      <ThemeProvider theme={theme}><Button variant="contained">Hello World</Button></ThemeProvider>

      </Box> */}
      
    </div>
  );
}

export default App;
