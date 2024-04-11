import React from 'react';
import Button from '@mui/material/Button';
import theme from './theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <Hero />
      <Footer/>
      
    </div>
  );
}

export default App;
