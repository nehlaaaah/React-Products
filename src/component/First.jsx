import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './first.css';

const First = () => {
  const appBarStyle = {
    color: 'white',
    fontSize: '40px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    fontFamily: 'serif',
    textAlign: 'center', // Ensure text alignment
    width: '100%',
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, ...appBarStyle }}>
              PRODUCTS
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default First;
