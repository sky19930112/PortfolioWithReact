import React from 'react';
import ResponsiveAppBar from './components/Nav/Nav';
import About from './components/About'
import Contact from './components/Contact/Contact'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <ResponsiveAppBar />;
    <Contact />
    </>
  )
}

export default App;
