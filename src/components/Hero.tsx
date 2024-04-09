import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AttachMoney, MoneyOff, AccountBalance } from '@mui/icons-material'; // Import icons
import Typography from '@mui/material/Typography';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import back from "../images/back.jpg";

function Hero() {
  return (
    <>
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${back})`,
      }}
    >
      <Typography pt={18}
      variant="h1"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: '4rem',
        fontFamily: 'Nunito',
        
        }}

        >Welcome to Cash Canvas</Typography>
    </Box>

<Box sx={{ marginTop: 4, paddingLeft: 2, paddingRight: 2, marginBottom:4 }} >
<Grid container spacing={2}>
  {/* Income Section */}
  <Grid item xs={4}>
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: 2,
        borderRadius: 4,
        transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#c8e6c9',
              },
      }}
    >
      <AttachMoney fontSize="large" />
      <Typography variant="h6" sx={{ marginTop: 1 }}>Income</Typography>
    </Box>
  </Grid>
  
  {/* Expenses Section */}
  <Grid item xs={4}>
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: 2,
        borderRadius: 4,
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#c8e6c9',
        },
      }}
    >
      <MoneyOff fontSize="large" />
      <Typography variant="h6" sx={{ marginTop: 1 }}>Expenses</Typography>
    </Box>
  </Grid>
  
  {/* Savings Section */}
  <Grid item xs={4}>
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: 2,
        borderRadius: 4,
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '#c8e6c9',
        },
      }}
    >
      <AccountBalance fontSize="large" />
      <Typography variant="h6" sx={{ marginTop: 1 }}>Savings</Typography>
    </Box>
  </Grid>
</Grid>
</Box>
</>
  );
}

export default Hero;
