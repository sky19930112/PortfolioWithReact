import React from 'react';
import ResponsiveAppBar from './components/Nav/Nav';
import About from './components/About'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <ResponsiveAppBar />;
    <About />
    </>
  )
}

export default App;
