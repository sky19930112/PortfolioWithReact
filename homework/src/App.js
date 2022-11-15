import React from 'react';

import NavBar from './components/Nav/Nav';
import Footer from './components/Footer/Footer.js'
import renderPage from './utils/Render.js'

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline />
    <NavBar />
    <renderPage />
    <Footer />
    </>
  )
}

export default App;
