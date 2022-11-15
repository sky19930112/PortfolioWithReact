import React from 'react';

import NavBar from './components/Nav/Nav';
import About from './components/About'
import Contact from './components/Contact/Contact'
import Work from './components/Work/Work'
import Resume from './components/Resume/Resume.js'
import Footer from './components/Footer/Footer.js'

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <NavBar />
    <About />
    <Footer />
    </>
  )
}

export default App;
