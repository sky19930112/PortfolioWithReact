import React from 'react';
import NavBar from './components/Nav/Nav';
import About from './components/About'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <NavBar />;
    <Work />
    </>
  )
}

export default App;
