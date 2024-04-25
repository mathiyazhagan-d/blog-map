// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import Footer from './components/Footer'; 
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static" className='color-white'>
          <Toolbar>
            <Grid container className='justify-content'>
              <Grid item xs={5}>  
                <Typography variant="h5" className='font-pop-bold font-color-black'>
                  Road Map blog
                </Typography>
              </Grid>
              <Grid item xs={5}> 
                <Button className='font-pop font-color-black Button-link' color="inherit">
                  <Link className='Button-link' to="/">Home</Link>
                </Button>
               
                <Button className='font-pop font-color-black Button-link' color="inherit">
                  <Link className='Button-link' to="/fullstack">Full Stack Development</Link>
                </Button>
                <Button className='font-pop font-color-black Button-link' color="inherit">
                  <Link className='Button-link' to="/datascience">Data Science</Link>
                </Button>
                <Button className='font-pop font-color-black Button-link' color="inherit">
                  <Link className='Button-link' to="/cybersecurity">Cyber Security</Link>
                </Button>
                <Button className='font-pop font-color-black Button-link' color="inherit">
                  <Link className='Button-link' to="/career">Career</Link>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
